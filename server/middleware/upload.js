'use strict';

const multer = require('multer');

// Store files in memory so they can be passed directly to nodemailer as buffers.
// This avoids writing temp files to disk and simplifies cleanup.
const storage = multer.memoryStorage();

/**
 * File filter that only accepts PDF and common image types.
 *
 * @param {import('express').Request} _req
 * @param {Express.Multer.File} file
 * @param {multer.FileFilterCallback} cb
 */
function fileFilter(_req, file, cb) {
  const defaultMimes = 'application/pdf,image/jpeg,image/png,image/webp,image/heic,image/heif';
  const envMimes = process.env.ALLOWED_MIME_TYPES || defaultMimes;
  const ALLOWED_MIME_TYPES = new Set(envMimes.split(',').map(s => s.trim()));

  if (ALLOWED_MIME_TYPES.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`File type "${file.mimetype}" is not allowed. Use PDF or image files.`));
  }
}

/**
 * Multer middleware configured for in-memory storage.
 * Max total upload size: 25 MB.
 */
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB per file
    files: 10,                   // max 10 files per request
  },
});

module.exports = upload;
