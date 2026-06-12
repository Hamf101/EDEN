/**
 * Form submission API client.
 * Thin layer over fetch() that posts form data to the backend Express server.
 * All endpoints return { success: boolean, message: string }.
 */

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Submits the Business Package application form.
 * Sends multipart/form-data including file attachments.
 *
 * @param {object} fields - Business form text fields.
 * @param {object} files  - Map of field name → FileList (e.g. { bankStatements: FileList, ... })
 * @returns {Promise<{ success: boolean, message: string }>}
 * @throws {Error} If the network request itself fails.
 */
export async function submitBusinessForm(fields, files) {
  const formData = new FormData();

  // Append text fields.
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value ?? '');
  });

  // Append file fields — FileList may contain multiple files.
  Object.entries(files).forEach(([fieldName, fileList]) => {
    if (!fileList) return;
    Array.from(fileList).forEach((file) => formData.append(fieldName, file));
  });

  const response = await fetch(`${API_BASE}/api/submit/business`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}

/**
 * Submits the Credit Consultation Package application form.
 * Sends multipart/form-data including an ID photo attachment.
 *
 * @param {object} fields - Credit form text fields (SSN and passwords encrypted server-side).
 * @param {FileList|null} idPhotoFiles - The ID photo file list from the upload input.
 * @returns {Promise<{ success: boolean, message: string }>}
 * @throws {Error} If the network request itself fails.
 */
export async function submitCreditForm(fields, idPhotoFiles) {
  const formData = new FormData();

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value ?? '');
  });

  if (idPhotoFiles) {
    Array.from(idPhotoFiles).forEach((file) => formData.append('idPhoto', file));
  }

  const response = await fetch(`${API_BASE}/api/submit/credit`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}

/**
 * Submits the Contact / Reaching Out form.
 * Sends JSON (no file attachments).
 *
 * @param {object} fields - Contact form fields.
 * @returns {Promise<{ success: boolean, message: string }>}
 * @throws {Error} If the network request itself fails.
 */
export async function submitContactForm(fields) {
  const response = await fetch(`${API_BASE}/api/submit/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });

  return response.json();
}
