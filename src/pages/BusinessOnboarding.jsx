import { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ShieldCheck, FileText, Upload, Building2 } from 'lucide-react';
import './BusinessOnboarding.css';

/**
 * Business Funding onboarding intake form.
 * Collects qualifications, documents, and client info for loan processing.
 */

const QUALIFICATIONS = [
  'Business operating for at least 12 months',
  'No prior defaults',
  'No UCC liens attached to you',
  'Generating at least $100K/month in revenue',
  'If you have a website, please attach it',
];

const REQUIRED_DOCUMENTS = [
  { label: '3 months business bank statements', required: true },
  { label: 'PROOF of ownership ID', required: true },
  { label: 'Social Security Number (Social)', required: true },
  { label: 'Latest business tax return (if you have it, not required)', required: false },
  { label: 'POS system latest transaction report (if you have a POS system)', required: false },
];

export default function BusinessOnboarding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessAge: '',
    monthlyRevenue: '',
    website: '',
    hasDefaults: '',
    hasUccLiens: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: integrate with backend API
  };

  return (
    <div className="page page--onboarding">
      {/* ---- Hero ---- */}
      <section className="onboarding-hero" id="business-onboarding-hero">
        <div className="onboarding-hero__inner container">
          <Building2 size={40} className="onboarding-hero__icon" />
          <h1 className="onboarding-hero__title">
            Business Funding <span className="text-gradient">Onboarding</span>
          </h1>
          <p className="onboarding-hero__subtitle">
            Complete the intake form below to get started with your business funding application.
            Please review the qualifications before proceeding.
          </p>
        </div>
      </section>

      {/* ---- Qualifications & Documents ---- */}
      <SectionWrapper id="funding-requirements" bg="surface">
        <div className="section-header-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2>Qualification &amp; <span className="text-gradient">Document Requirements</span></h2>
          <p>Review the criteria and documents needed to qualify your business for funding before submitting the form.</p>
        </div>
        
        <div className="funding-requirements-grid">
          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Criteria to Qualify</h3>
            <div className="funding-qualifications__list">
              {QUALIFICATIONS.map((q, i) => (
                <div key={i} className="funding-qualification-item">
                  <ShieldCheck size={20} className="funding-qualification-item__icon" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Documents Needed</h3>
            <div className="funding-qualifications__list">
              {REQUIRED_DOCUMENTS.map((doc, i) => (
                <div key={i} className="funding-qualification-item">
                  <FileText size={20} className="funding-qualification-item__icon" />
                  <span>
                    {doc.label} {!doc.required && <span className="text-muted-light">(Optional)</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ---- Intake Form ---- */}
      <SectionWrapper id="intake-form" bg="surface">
        <div className="onboarding-form-wrapper">
          <h2>Intake <span className="text-gradient">Form</span></h2>
          <p className="onboarding-form-subtitle">
            Fill out the form below to begin your business funding application.
          </p>

          <form className="onboarding-form" onSubmit={handleSubmit}>
            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="biz-name" className="onboarding-form__label">Full Name *</label>
                <input
                  type="text"
                  id="biz-name"
                  name="fullName"
                  className="onboarding-form__input"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="biz-email" className="onboarding-form__label">Email Address *</label>
                <input
                  type="email"
                  id="biz-email"
                  name="email"
                  className="onboarding-form__input"
                  placeholder="you@business.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="biz-phone" className="onboarding-form__label">Phone Number *</label>
                <input
                  type="tel"
                  id="biz-phone"
                  name="phone"
                  className="onboarding-form__input"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="biz-business-name" className="onboarding-form__label">Business Name *</label>
                <input
                  type="text"
                  id="biz-business-name"
                  name="businessName"
                  className="onboarding-form__input"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="biz-age" className="onboarding-form__label">How long has your business been operating? *</label>
                <select
                  id="biz-age"
                  name="businessAge"
                  className="onboarding-form__input"
                  value={formData.businessAge}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="1-2">1–2 years</option>
                  <option value="2-5">2–5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="biz-revenue" className="onboarding-form__label">Monthly Revenue *</label>
                <select
                  id="biz-revenue"
                  name="monthlyRevenue"
                  className="onboarding-form__input"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="100k-250k">$100K – $250K</option>
                  <option value="250k-500k">$250K – $500K</option>
                  <option value="500k-1m">$500K – $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="biz-defaults" className="onboarding-form__label">Any prior defaults? *</label>
                <select
                  id="biz-defaults"
                  name="hasDefaults"
                  className="onboarding-form__input"
                  value={formData.hasDefaults}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="biz-ucc" className="onboarding-form__label">Any UCC liens attached? *</label>
                <select
                  id="biz-ucc"
                  name="hasUccLiens"
                  className="onboarding-form__input"
                  value={formData.hasUccLiens}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="biz-website" className="onboarding-form__label">Business Website (if applicable)</label>
              <input
                type="url"
                id="biz-website"
                name="website"
                className="onboarding-form__input"
                placeholder="https://yourbusiness.com"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="biz-message" className="onboarding-form__label">Additional Information</label>
              <textarea
                id="biz-message"
                name="message"
                className="onboarding-form__input onboarding-form__textarea"
                rows="4"
                placeholder="Tell us more about your business and funding needs..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Document Uploads */}
            <div className="onboarding-form__uploads">
              <h3>Upload Documents</h3>
              <div className="onboarding-form__upload-grid">
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Bank Statements (3 months) *</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    multiple
                    className="onboarding-form__upload-input"
                    aria-label="Upload Bank Statements"
                    required
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>PROOF of ownership ID *</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload Proof of Ownership ID"
                    required
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Social Security Card/ID *</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload Social Security ID"
                    required
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Tax Return (Optional)</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload Tax Return"
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>POS Transaction Report (Optional)</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload POS Transaction Report"
                  />
                </label>
              </div>
            </div>

            <Button variant="primary" size="lg" type="submit">
              Submit Application
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
