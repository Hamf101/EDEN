'use strict';

const nodemailer = require('nodemailer');
const logger = require('../utils/logger');

/**
 * Lazily-initialized nodemailer transporter.
 * Configured from environment variables so no credentials are hardcoded.
 * @type {import('nodemailer').Transporter | null}
 */
let _transporter = null;

/**
 * Returns a shared nodemailer transporter, creating it on first call.
 * Reads SMTP credentials from process.env.
 *
 * @returns {import('nodemailer').Transporter}
 */
function getTransporter() {
  if (_transporter) return _transporter;

  _transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    family: 4, // Force IPv4 — Render cannot route to Gmail's IPv6 addresses
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return _transporter;
}

/**
 * Sends an email with optional file attachments.
 *
 * @param {object} options
 * @param {string} options.subject   - Email subject line.
 * @param {string} options.html      - HTML body of the email.
 * @param {Array<{filename: string, content: Buffer, contentType: string}>} [options.attachments]
 *   - Files to attach (already in memory from multer).
 * @returns {Promise<void>}
 * @throws {Error} If the transporter fails to send.
 */
async function sendMail({ subject, html, attachments = [] }) {
  const from = process.env.SMTP_USER;
  const to = process.env.SMTP_USER; // sends to itself

  const transporter = getTransporter();

  const mailOptions = {
    from: `"Eden Prosperity Group" <${from}>`,
    to,
    subject,
    html,
    attachments: attachments.map((file) => ({
      filename: file.originalname || file.filename,
      content: file.buffer || file.content,
      contentType: file.mimetype || file.contentType,
    })),
  };

  const start = Date.now();
  await transporter.sendMail(mailOptions);
  logger.info(`Email sent — subject: "${subject}" | duration: ${Date.now() - start}ms`);
}

module.exports = { sendMail };
