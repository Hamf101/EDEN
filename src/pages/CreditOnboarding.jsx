import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { CreditCard, FileText, ShieldCheck, Upload, Loader2, Check, Trash2 } from 'lucide-react';
import { submitCreditForm } from '../services/formApi';
import './BusinessOnboarding.css';

import { formatFileSize } from '../utils/fileHelpers';

export default function CreditOnboarding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentAddress: '',
    ssn: '',
    experianUsername: '',
    experianPassword: '',
    equifaxUsername: '',
    equifaxPassword: '',
  });

  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [idPhoto, setIdPhoto] = useState([]);

  // Ref for the uncontrolled ID photo file input.
  const idPhotoRef = useRef(null);

  // Track active object URLs for cleanup on unmount
  const activeUrlsRef = useRef([]);

  const trackUrl = (url) => {
    if (url) activeUrlsRef.current.push(url);
  };

  const untrackAndRevoke = (url) => {
    if (!url) return;
    URL.revokeObjectURL(url);
    activeUrlsRef.current = activeUrlsRef.current.filter((u) => u !== url);
  };

  useEffect(() => {
    return () => {
      activeUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleIdPhotoChange = (e) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    
    // Do not clean up previous URLs because we are appending
    const formatted = newFiles.map((file) => {
      const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      trackUrl(url);
      return {
        file, // Keep the actual File object for submission
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: url,
      };
    });

    setIdPhoto((prev) => [...prev, ...formatted]);
    
    // Clear the input so selecting the same file again triggers onChange
    if (e.target) e.target.value = '';
  };

  const clearIdPhoto = () => {
    idPhoto.forEach((f) => {
      if (f.previewUrl) untrackAndRevoke(f.previewUrl);
    });
    if (idPhotoRef.current) {
      idPhotoRef.current.value = '';
    }
    setIdPhoto([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission by posting all fields and the ID photo
   * to the backend API. Sensitive fields (SSN, passwords) are AES-256-GCM
   * encrypted server-side before being included in the email.
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (idPhoto.length === 0) {
      setError('Please upload a picture of your ID (Front & Back).');
      setIsLoading(false);
      return;
    }

    try {
      const filesToSubmit = idPhoto.map(p => p.file);
      const result = await submitCreditForm(formData, filesToSubmit.length ? filesToSubmit : null);

      if (!result.success) {
        throw new Error(result.message || 'Submission failed.');
      }

      setIsSubmitted(true);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (id, name, label, type = 'text', placeholder = '') => (
    <div className="onboarding-form__group">
      <label htmlFor={id} className="onboarding-form__label">{label} *</label>
      <input
        type={type}
        id={id}
        name={name}
        className="onboarding-form__input"
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div className="page page--onboarding">
      <section className="onboarding-hero" id="credit-onboarding-hero">
        <div className="onboarding-hero__inner container">
          <CreditCard size={40} className="onboarding-hero__icon" />
          <h1 className="onboarding-hero__title">
            Credit Consultation <span className="text-gradient">Application</span>
          </h1>
          <p className="onboarding-hero__subtitle">
            Share your goals so Eden Prosperity can prepare a practical credit
            readiness and business funding strategy conversation.
          </p>
        </div>
      </section>

      <SectionWrapper id="credit-assessment" bg="transparent">
        <div className="onboarding-form-wrapper">
          <h2>Client <span className="text-gradient">Information</span></h2>
          <p className="onboarding-form-subtitle">
            Please provide your information securely so we can expedite your credit consultation process.
          </p>

          {isSubmitted ? (
            <div className="success-state">
              <div className="success-state__icon-wrapper">
                <Check size={40} />
              </div>
              <h3 className="success-state__title">Assessment Submitted!</h3>
              <p className="success-state__message">
                Thank you for taking the time to complete your assessment. Our team will review your credit profile and get back to you shortly.
              </p>
              <div className="success-state__loader">
                <Loader2 size={16} className="success-state__spinner" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Redirecting to home page...</span>
              </div>
            </div>
          ) : (
          <form className="onboarding-form" onSubmit={handleSubmit}>
            <div className="onboarding-form__row">
              {renderInput('credit-name', 'fullName', 'Full Name', 'text', 'Your full name')}
              {renderInput('credit-email', 'email', 'Email Address', 'email', 'you@email.com')}
            </div>

            <div className="onboarding-form__row">
              {renderInput('credit-phone', 'phone', 'Phone Number', 'tel', '(555) 123-4567')}
              {renderInput('credit-ssn', 'ssn', 'Social Security Number', 'text', 'XXX-XX-XXXX')}
            </div>

            {renderInput('credit-address', 'currentAddress', 'Current Address', 'text', 'City, state, and ZIP')}

            <div className="onboarding-form__section-title">
              <ShieldCheck size={20} />
              <h3>Bureau Login Information</h3>
            </div>

            <div className="onboarding-form__row">
              {renderInput('experian-username', 'experianUsername', 'Experian Username/Email')}
              {renderInput('experian-password', 'experianPassword', 'Experian Password', 'password')}
            </div>

            <div className="onboarding-form__row">
              {renderInput('equifax-username', 'equifaxUsername', 'Equifax Username/Email')}
              {renderInput('equifax-password', 'equifaxPassword', 'Equifax Password', 'password')}
            </div>

            <div className="onboarding-form__uploads">
              <h3>Required Documents</h3>
              <div className="onboarding-form__upload-grid">
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className={`onboarding-form__upload-item ${idPhoto.length > 0 ? 'onboarding-form__upload-item--has-file' : ''}`}>
                    <Upload size={20} />
                    <span>{idPhoto.length > 0 ? 'Add Picture of ID (Front & Back)' : 'Picture of ID (Front & Back) *'}</span>
                    <input
                      ref={idPhotoRef}
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      className="onboarding-form__upload-input"
                      aria-label="Upload picture of ID"
                      onChange={handleIdPhotoChange}
                      // Do not use required here if we use state, because the input value is cleared
                    />
                  </label>
                  
                  {idPhoto.length > 0 && (
                    <div className="file-preview-list">
                      {idPhoto.map((file, idx) => (
                        <div key={idx} className="file-preview-item">
                          {file.previewUrl ? (
                            <img
                              src={file.previewUrl}
                              alt="ID Preview"
                              className="file-preview-thumbnail"
                            />
                          ) : (
                            <div className="file-preview-icon">
                              <FileText size={20} />
                            </div>
                          )}
                          
                          <div className="file-preview-info">
                            <span className="file-preview-name">{file.name}</span>
                            <span className="file-preview-size">{formatFileSize(file.size)}</span>
                          </div>
                          
                          <div className="file-preview-status">
                            <Check size={14} />
                            <span>Attached</span>
                          </div>
                        </div>
                      ))}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            const newPhotos = idPhoto.slice(0, -1);
                            const removed = idPhoto[idPhoto.length - 1];
                            if (removed && removed.previewUrl) untrackAndRevoke(removed.previewUrl);
                            setIdPhoto(newPhotos);
                          }}
                          style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', fontSize: '12px', marginRight: '8px' }}
                        >
                          <Trash2 size={12} />
                          Remove Last
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          onClick={clearIdPhoto}
                          style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', fontSize: '12px' }}
                        >
                          <Trash2 size={12} />
                          Clear All Files
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p style={{ color: '#ff6b6b', fontSize: '0.9rem', marginBottom: '0.5rem', textAlign: 'center' }}>
                {error}
              </p>
            )}

            <Button variant="primary" size="lg" type="submit" disabled={isLoading}>
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </span>
              ) : (
                'Submit Assessment'
              )}
            </Button>
          </form>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
