'use strict';

function baseTemplate({ title, headerSubtitle, intro, sections }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;overflow:hidden;border:1px solid #2a2a2a;">
          <tr>
            <td style="background:linear-gradient(135deg,#b8860b,#ffd700);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#000;font-size:22px;font-weight:700;letter-spacing:1px;">
                EDEN PROSPERITY GROUP
              </h1>
              <p style="margin:8px 0 0;color:#1a1a1a;font-size:14px;font-weight:500;">
                ${headerSubtitle}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;color:#a0a0a0;font-size:15px;line-height:1.6;">${intro}</p>
              ${sections.join('\n')}
            </td>
          </tr>
          <tr>
            <td style="background:#0d0d0d;padding:20px 40px;border-top:1px solid #2a2a2a;">
              <p style="margin:0;color:#555;font-size:12px;text-align:center;">
                Eden Prosperity Group · services@edenprosperitygroup.com · Nationwide — USA
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderSection(title, rowsHtml) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
    <tr>
      <td style="padding-bottom:12px;">
        <p style="margin:0;color:#ffd700;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
          ${title}
        </p>
      </td>
    </tr>
    ${rowsHtml}
  </table>`;
}

function renderMessage(title, message) {
  if (!message) return '';
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
    <tr>
      <td style="padding-bottom:12px;">
        <p style="margin:0;color:#ffd700;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
          ${title}
        </p>
      </td>
    </tr>
    <tr>
      <td style="background:#1a1a1a;border-radius:8px;padding:16px;border-left:3px solid #ffd700;">
        <p style="margin:0;color:#d0d0d0;font-size:14px;line-height:1.7;">${escapeHtml(message)}</p>
      </td>
    </tr>
  </table>`;
}

function renderAttachmentNote(noteText) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="background:#1a1a1a;border-radius:8px;padding:16px;border:1px solid #2a2a2a;">
        <p style="margin:0;color:#a0a0a0;font-size:13px;line-height:1.6;">
          📎 ${noteText}
        </p>
      </td>
    </tr>
  </table>`;
}

function businessTemplate(data) {
  return baseTemplate({
    title: 'Business Package Application',
    headerSubtitle: 'Business Package Application',
    intro: 'A new <strong style="color:#ffd700;">Business Package</strong> application has been submitted. Review the details below and the attached documents.',
    sections: [
      renderSection('CLIENT INFORMATION', [
        row('Full Name', data.fullName),
        row('Email Address', data.email),
        row('Phone Number', data.phone)
      ].join('')),
      renderSection('BUSINESS DETAILS', [
        row('Business Name', data.businessName),
        row('Operating Duration', data.businessAge),
        row('Monthly Revenue', data.monthlyRevenue),
        row('Website', data.website || 'Not provided'),
        row('Prior Defaults', data.hasDefaults),
        row('UCC Liens', data.hasUccLiens)
      ].join('')),
      renderMessage('ADDITIONAL INFORMATION', data.message),
      renderAttachmentNote('<strong style="color:#ffd700;">Documents attached</strong> — review bank statements, proof of ownership, and identification details included with this email.')
    ]
  });
}

function creditTemplate(data) {
  return baseTemplate({
    title: 'Credit Consultation Application',
    headerSubtitle: 'Credit Consultation Package Application',
    intro: 'A new <strong style="color:#ffd700;">Credit Consultation Package</strong> application has been submitted and is awaiting your review.',
    sections: [
      renderSection('Client Information', [
        row('Full Name', data.fullName),
        row('Email Address', data.email),
        row('Phone Number', data.phone),
        row('Current Address', data.currentAddress)
      ].join('')),
      renderSection('Client Credentials', [
        row('SSN', data.ssn),
        row('Experian Username', data.experianUsername),
        row('Experian Password', data.experianPassword),
        row('Equifax Username', data.equifaxUsername),
        row('Equifax Password', data.equifaxPassword)
      ].join('')),
      renderAttachmentNote('<strong style="color:#ffd700;">ID document attached</strong> — Please review the uploaded government-issued ID included with this email.')
    ]
  });
}

function contactTemplate(data) {
  return baseTemplate({
    title: 'New Contact Message',
    headerSubtitle: 'Reaching Out — New Inquiry',
    intro: 'You have received a new message via the Contact form.',
    sections: [
      renderSection('CONTACT DETAILS', [
        row('Full Name', data.fullName),
        row('Email Address', data.email),
        row('Phone Number', data.phone || 'Not provided'),
        row('Service Interested In', data.service || 'Not specified')
      ].join('')),
      renderMessage('MESSAGE', data.message)
    ]
  });
}

function row(label, value) {
  return `
  <tr>
    <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="40%" style="color:#777;font-size:13px;padding-right:12px;">${escapeHtml(label)}</td>
          <td style="color:#e0e0e0;font-size:14px;font-weight:500;">${escapeHtml(String(value ?? '—'))}</td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = { businessTemplate, creditTemplate, contactTemplate };
