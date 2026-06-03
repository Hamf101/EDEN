import { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ShieldCheck, Upload, CreditCard, Lock, DollarSign } from 'lucide-react';
import './CreditOnboarding.css';

/**
 * Credit Consulting client onboarding form.
 * Collects login credentials, ID, address, and payment proof.
 */

const PAYMENT_METHODS = [
  { method: 'Zelle', detail: 'Latelyservices@gmail.com' },
  { method: 'Apple Pay', detail: '6786683918' },
  { method: 'PayPal', detail: 'Latelyservices@gmail.com' },
  { method: 'Cash App', detail: '$latelyservices' },
];

export default function CreditOnboarding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentAddress: '',
    ssn: '',
    experianLogin: '',
    experianPassword: '',
    equifaxLogin: '',
    equifaxPassword: '',
    paymentMethod: '',
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
      <section className="onboarding-hero" id="credit-onboarding-hero">
        <div className="onboarding-hero__inner container">
          <CreditCard size={40} className="onboarding-hero__icon" />
          <h1 className="onboarding-hero__title">
            Credit Consulting <span className="text-gradient">Onboarding</span>
          </h1>
          <p className="onboarding-hero__subtitle">
            Complete the form below to begin your credit consulting journey.
            All information is kept strictly confidential.
          </p>
        </div>
      </section>

      {/* ---- Payment Methods ---- */}
      <SectionWrapper id="payment-methods" bg="surface">
        <div className="onboarding-payment">
          <div className="onboarding-payment__header">
            <DollarSign size={24} className="onboarding-payment__icon" />
            <h2>Payment <span className="text-gradient">Methods</span></h2>
          </div>
          <p className="onboarding-payment__subtitle">
            Please submit payment using one of the following methods and upload a screenshot of
            your payment confirmation below.
          </p>
          <div className="onboarding-payment__grid">
            {PAYMENT_METHODS.map((pm) => (
              <div key={pm.method} className="onboarding-payment__card">
                <span className="onboarding-payment__method">{pm.method}</span>
                <span className="onboarding-payment__detail">{pm.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ---- Intake Form ---- */}
      <SectionWrapper id="credit-intake" bg="transparent">
        <div className="onboarding-form-wrapper">
          <h2>Client <span className="text-gradient">Information</span></h2>
          <p className="onboarding-form-subtitle">
            All information is encrypted and stored securely.
          </p>

          <form className="onboarding-form" onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="credit-name" className="onboarding-form__label">Full Name *</label>
                <input
                  type="text"
                  id="credit-name"
                  name="fullName"
                  className="onboarding-form__input"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="credit-email" className="onboarding-form__label">Email Address *</label>
                <input
                  type="email"
                  id="credit-email"
                  name="email"
                  className="onboarding-form__input"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="credit-phone" className="onboarding-form__label">Phone Number *</label>
                <input
                  type="tel"
                  id="credit-phone"
                  name="phone"
                  className="onboarding-form__input"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="credit-address" className="onboarding-form__label">Current Address *</label>
                <input
                  type="text"
                  id="credit-address"
                  name="currentAddress"
                  className="onboarding-form__input"
                  placeholder="123 Main St, City, State ZIP"
                  value={formData.currentAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="credit-ssn" className="onboarding-form__label">
                <Lock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Social Security Number *
              </label>
              <input
                type="password"
                id="credit-ssn"
                name="ssn"
                className="onboarding-form__input"
                placeholder="XXX-XX-XXXX"
                value={formData.ssn}
                onChange={handleChange}
                required
              />
            </div>

            {/* Credit Logins */}
            <div className="onboarding-form__section-title">
              <ShieldCheck size={20} />
              <h3>Credit Bureau Logins</h3>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="experian-login" className="onboarding-form__label">Experian Username *</label>
                <input
                  type="text"
                  id="experian-login"
                  name="experianLogin"
                  className="onboarding-form__input"
                  placeholder="Experian username"
                  value={formData.experianLogin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="experian-pw" className="onboarding-form__label">Experian Password *</label>
                <input
                  type="password"
                  id="experian-pw"
                  name="experianPassword"
                  className="onboarding-form__input"
                  placeholder="Experian password"
                  value={formData.experianPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="onboarding-form__row">
              <div className="onboarding-form__group">
                <label htmlFor="equifax-login" className="onboarding-form__label">Equifax Username *</label>
                <input
                  type="text"
                  id="equifax-login"
                  name="equifaxLogin"
                  className="onboarding-form__input"
                  placeholder="Equifax username"
                  value={formData.equifaxLogin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="onboarding-form__group">
                <label htmlFor="equifax-pw" className="onboarding-form__label">Equifax Password *</label>
                <input
                  type="password"
                  id="equifax-pw"
                  name="equifaxPassword"
                  className="onboarding-form__input"
                  placeholder="Equifax password"
                  value={formData.equifaxPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Document Uploads */}
            <div className="onboarding-form__uploads">
              <h3>Upload Documents</h3>
              <div className="onboarding-form__upload-grid">
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Government-Issued ID</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload Government-Issued ID"
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Payment Screenshot</span>
                  <input
                    type="file"
                    accept=".jpg,.png,.pdf"
                    className="onboarding-form__upload-input"
                    aria-label="Upload Payment Screenshot"
                  />
                </label>
              </div>
            </div>

            {/* Payment Selection */}
            <div className="onboarding-form__group">
              <label htmlFor="payment-method" className="onboarding-form__label">Payment Method Used *</label>
              <select
                id="payment-method"
                name="paymentMethod"
                className="onboarding-form__input"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select payment method...</option>
                <option value="zelle">Zelle</option>
                <option value="applepay">Apple Pay</option>
                <option value="paypal">PayPal</option>
                <option value="cashapp">Cash App</option>
              </select>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="credit-message" className="onboarding-form__label">Additional Notes</label>
              <textarea
                id="credit-message"
                name="message"
                className="onboarding-form__input onboarding-form__textarea"
                rows="4"
                placeholder="Any additional information about your credit situation..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button variant="primary" size="lg" type="submit">
              Submit Onboarding
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
