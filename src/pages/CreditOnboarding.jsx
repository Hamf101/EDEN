import { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { CreditCard, FileText, ShieldCheck, Upload } from 'lucide-react';
import './BusinessOnboarding.css';

export default function CreditOnboarding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentAddress: '',
    creditGoals: '',
    preferredContact: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page page--onboarding">
      <section className="onboarding-hero" id="credit-onboarding-hero">
        <div className="onboarding-hero__inner container">
          <CreditCard size={40} className="onboarding-hero__icon" />
          <h1 className="onboarding-hero__title">
            Credit Consultation <span className="text-gradient">Intake</span>
          </h1>
          <p className="onboarding-hero__subtitle">
            Share your goals so Eden Prosperity can prepare a practical credit
            readiness and business funding strategy conversation.
          </p>
        </div>
      </section>

      <SectionWrapper id="credit-intake" bg="transparent">
        <div className="onboarding-form-wrapper">
          <h2>Client <span className="text-gradient">Information</span></h2>
          <p className="onboarding-form-subtitle">
            Do not submit bureau passwords, full government ID numbers, or
            other sensitive credentials through this form.
          </p>

          <form className="onboarding-form" onSubmit={handleSubmit}>
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
                <label htmlFor="credit-contact" className="onboarding-form__label">Preferred Contact Method *</label>
                <select
                  id="credit-contact"
                  name="preferredContact"
                  className="onboarding-form__input"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                </select>
              </div>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="credit-address" className="onboarding-form__label">Current Address *</label>
              <input
                type="text"
                id="credit-address"
                name="currentAddress"
                className="onboarding-form__input"
                placeholder="City, state, and ZIP"
                value={formData.currentAddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="onboarding-form__section-title">
              <ShieldCheck size={20} />
              <h3>Credit Readiness Goals</h3>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="credit-goals" className="onboarding-form__label">What are your goals? *</label>
              <select
                id="credit-goals"
                name="creditGoals"
                className="onboarding-form__input"
                value={formData.creditGoals}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="personal-credit">Strengthen personal credit profile</option>
                <option value="business-credit">Build business credit readiness</option>
                <option value="funding-readiness">Prepare for funding opportunities</option>
                <option value="business-growth">Create a business growth strategy</option>
              </select>
            </div>

            <div className="onboarding-form__group">
              <label htmlFor="credit-message" className="onboarding-form__label">Additional Notes</label>
              <textarea
                id="credit-message"
                name="message"
                className="onboarding-form__input onboarding-form__textarea"
                rows="4"
                placeholder="Share anything helpful about your credit and business goals..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="onboarding-form__uploads">
              <h3>Optional Documents</h3>
              <div className="onboarding-form__upload-grid">
                <label className="onboarding-form__upload-item">
                  <Upload size={20} />
                  <span>Credit report snapshot</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload credit report snapshot"
                  />
                </label>
                <label className="onboarding-form__upload-item">
                  <FileText size={20} />
                  <span>Business readiness notes</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="onboarding-form__upload-input"
                    aria-label="Upload business readiness notes"
                  />
                </label>
              </div>
            </div>

            <Button variant="primary" size="lg" type="submit">
              Submit Intake
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
