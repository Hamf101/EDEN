'use strict';

const crypto = require('crypto');

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // 96-bit IV recommended for GCM
const AUTH_TAG_LENGTH = 16;

/**
 * Retrieves the 32-byte encryption key from the environment variable.
 * The key must be a 64-character hex string (32 bytes).
 *
 * @returns {Buffer} The 32-byte key buffer.
 * @throws {Error} If ENCRYPTION_KEY is not set or is invalid length.
 */
function getKey() {
  const hex = process.env.ENCRYPTION_KEY;
  if (!hex || hex.length !== 64) {
    throw new Error(
      'ENCRYPTION_KEY must be a 64-character hex string. ' +
      'Generate one with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"'
    );
  }
  return Buffer.from(hex, 'hex');
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * The output format is: iv:authTag:ciphertext (all hex-encoded, colon-separated).
 *
 * @param {string} plaintext - The string to encrypt.
 * @returns {string} The encrypted payload as "iv:authTag:ciphertext".
 * @throws {Error} If encryption fails or key is invalid.
 */
function encrypt(plaintext) {
  const key = getKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv, { authTagLength: AUTH_TAG_LENGTH });

  const encrypted = Buffer.concat([
    cipher.update(plaintext, 'utf8'),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  return [iv.toString('hex'), authTag.toString('hex'), encrypted.toString('hex')].join(':');
}

/**
 * Decrypts a payload produced by {@link encrypt}.
 *
 * @param {string} payload - The "iv:authTag:ciphertext" string.
 * @returns {string} The original plaintext.
 * @throws {Error} If decryption fails (tampered data or wrong key).
 */
function decrypt(payload) {
  const key = getKey();
  const [ivHex, authTagHex, ciphertextHex] = payload.split(':');

  if (!ivHex || !authTagHex || !ciphertextHex) {
    throw new Error('Invalid encrypted payload format.');
  }

  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const ciphertext = Buffer.from(ciphertextHex, 'hex');

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv, { authTagLength: AUTH_TAG_LENGTH });
  decipher.setAuthTag(authTag);

  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
}

module.exports = { encrypt, decrypt };
