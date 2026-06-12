'use strict';

const express = require('express');
const upload = require('../middleware/upload');
const { sendMail } = require('../services/mailer');
const { encrypt } = require('../services/encryption');
const { businessTemplate, creditTemplate, contactTemplate } = require('../services/templates');
const logger = require('../utils/logger');
const fileType = require('file-type');

const router = express.Router();

/**
 * Validates the magic bytes of attachments using file-type.
 * Throws an error if a file doesn't match the allowed mimetypes or its own extension.
 */
async function validateAttachments(attachments) {
  const defaultMimes = 'application/pdf,image/jpeg,image/png,image/webp,image/heic,image/heif';
  const envMimes = process.env.ALLOWED_MIME_TYPES || defaultMimes;
  const ALLOWED_MIME_TYPES = new Set(envMimes.split(',').map(s => s.trim()));

  for (const file of attachments) {
    const type = await fileType.fromBuffer(file.buffer);
    if (!type || !ALLOWED_MIME_TYPES.has(type.mime)) {
      throw new Error(`File "${file.originalname}" has invalid or unsupported content. Only PDFs and standard images are allowed.`);
    }
  }
}

// ── Business Package ─────────────────────────────────────────────────────────

/**
 * POST /api/submit/business
 *
 * Accepts multipart form data with the business onboarding fields and
 * up to 5 document uploads. Sends a structured email to services@edenprosperitygroup.com.
 *
 * Expected fields: fullName, email, phone, businessName, businessAge,
 *   monthlyRevenue, website, hasDefaults, hasUccLiens, message
 * Expected files: bankStatements (multiple), ownershipProof, ownerID,
 *   taxReturn (optional), posReport (optional)
 */
router.post(
  '/business',
  upload.fields([
    { name: 'bankStatements', maxCount: 3 },
    { name: 'ownershipProof', maxCount: 1 },
    { name: 'ownerID', maxCount: 2 },
    { name: 'taxReturn', maxCount: 1 },
    { name: 'posReport', maxCount: 1 },
  ]),
  async (req, res) => {
    const start = Date.now();
    try {
      const {
        fullName, email, phone, businessName,
        businessAge, monthlyRevenue, website,
        hasDefaults, hasUccLiens, message,
      } = req.body;

      // Collect all uploaded files into a flat array for attachment.
      const files = req.files ?? {};
      const attachments = [
        ...(files.bankStatements ?? []),
        ...(files.ownershipProof ?? []),
        ...(files.ownerID ?? []),
        ...(files.taxReturn ?? []),
        ...(files.posReport ?? []),
      ];

      await validateAttachments(attachments);

      const subject = `Business Package - ${fullName}`;
      const html = businessTemplate({
        fullName, email, phone, businessName,
        businessAge, monthlyRevenue, website,
        hasDefaults, hasUccLiens, message,
      });

      sendMail({ subject, html, attachments })
        .then(() => logger.info(`Business form email successfully sent for: ${email} | email duration: ${Date.now() - start}ms`))
        .catch((err) => logger.error(`Business form email failed to send: ${err.message}`));

      logger.info(`Business form API responded to: ${email} | request duration: ${Date.now() - start}ms`);
      res.json({ success: true, message: 'Application submitted successfully.' });
    } catch (err) {
      logger.error(`Business form submission failed: ${err.message}`);
      res.status(500).json({ success: false, message: 'Failed to send application. Please try again.' });
    }
  }
);

// ── Credit Consultation Package ───────────────────────────────────────────────

/**
 * POST /api/submit/credit
 *
 * Accepts multipart form data with credit onboarding fields (including SSN
 * and bureau passwords) and an ID photo upload.
 *
 * Sensitive fields (SSN, Experian password, Equifax password) are AES-256-GCM
 * encrypted before being included in the email body.
 *
 * Expected fields: fullName, email, phone, currentAddress, ssn,
 *   experianUsername, experianPassword, equifaxUsername, equifaxPassword
 * Expected files: idPhoto
 */
router.post(
  '/credit',
  upload.fields([
    { name: 'idPhoto', maxCount: 2 },
  ]),
  async (req, res) => {
    const start = Date.now();
    try {
      const {
        fullName, email, phone, currentAddress,
        ssn, experianUsername, experianPassword,
        equifaxUsername, equifaxPassword,
      } = req.body;

      const attachments = [...(req.files?.idPhoto ?? [])];
      await validateAttachments(attachments);

      const subject = `Credit Consultation Package - ${fullName}`;
      const html = creditTemplate({
        fullName, email, phone, currentAddress,
        ssn,
        experianUsername,
        experianPassword,
        equifaxUsername,
        equifaxPassword,
      });

      sendMail({ subject, html, attachments })
        .then(() => logger.info(`Credit form email successfully sent for: ${email} | email duration: ${Date.now() - start}ms`))
        .catch((err) => logger.error(`Credit form email failed to send: ${err.message}`));

      logger.info(`Credit form API responded to: ${email} | request duration: ${Date.now() - start}ms`);
      res.json({ success: true, message: 'Assessment submitted successfully.' });
    } catch (err) {
      logger.error(`Credit form submission failed: ${err.message}`);
      res.status(500).json({ success: false, message: 'Failed to send assessment. Please try again.' });
    }
  }
);

// ── Contact / Reaching Out ────────────────────────────────────────────────────

/**
 * POST /api/submit/contact
 *
 * Accepts JSON body with contact form fields. No file attachments.
 *
 * Expected fields: fullName, email, phone (optional), service (optional), message
 */
router.post('/contact', express.json(), async (req, res) => {
  const start = Date.now();
  try {
    const { fullName, email, phone, service, message } = req.body;

    const subject = `Reaching Out - ${fullName}`;
    const html = contactTemplate({ fullName, email, phone, service, message });

    sendMail({ subject, html })
      .then(() => logger.info(`Contact form email successfully sent for: ${email} | email duration: ${Date.now() - start}ms`))
      .catch((err) => logger.error(`Contact form email failed to send: ${err.message}`));

    logger.info(`Contact form API responded to: ${email} | request duration: ${Date.now() - start}ms`);
    res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    logger.error(`Contact form submission failed: ${err.message}`);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;
