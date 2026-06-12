'use strict';

/**
 * Helper to remove newline characters to prevent Log Injection/Log Forging vulnerabilities.
 */
function sanitize(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[\r\n]+/g, ' ');
}

/**
 * Minimal structured logger using console.
 * Outputs ISO timestamps and a severity level prefix.
 * Replace with a library like `pino` if more structure is needed later.
 */
const logger = {
  /**
   * @param {string} message
   * @param {...unknown} args
   */
  info(message, ...args) {
    console.log(`[${new Date().toISOString()}] INFO  ${sanitize(message)}`, ...args);
  },

  /**
   * @param {string} message
   * @param {...unknown} args
   */
  warn(message, ...args) {
    console.warn(`[${new Date().toISOString()}] WARN  ${sanitize(message)}`, ...args);
  },

  /**
   * @param {string} message
   * @param {...unknown} args
   */
  error(message, ...args) {
    console.error(`[${new Date().toISOString()}] ERROR ${sanitize(message)}`, ...args);
  },

  /**
   * @param {string} message
   * @param {...unknown} args
   */
  debug(message, ...args) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[${new Date().toISOString()}] DEBUG ${sanitize(message)}`, ...args);
    }
  },
};

module.exports = logger;
