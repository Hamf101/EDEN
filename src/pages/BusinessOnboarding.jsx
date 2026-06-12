import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ShieldCheck, FileText, Upload, Building2, Loader2, Check, Trash2 } from 'lucide-react';
import { submitBusinessForm } from '../services/formApi';
import './BusinessOnboarding.css';

import { formatFileSize } from '../utils/fileHelpers';

/**
 * Business capital readiness application form.
 * Collects readiness details, documents, and client information.
 */

const QUALIFICATIONS = [
  'Business operating for at least 12 months',
  'No prior defaults',
  'No UCC liens attached to you',
  'Revenue details available for review',
  'Website or brand presence available if applicable',
];

const REQUIRED_DOCUMENTS = [
  { label: '3 months business bank statements', required: true },
  { label: 'Proof of business ownership', required: true },
  { label: 'Owner identification details', required: true },
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

  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // States to hold file details for preview and indicator status
  const [bankStatements, setBankStatements] = useState([]);
  const [ownershipProof, setOwnershipProof] = useState(null);
  const [ownerID, setOwnerID] = useState([]);
  const [taxReturn, setTaxReturn] = useState(null);
  const [posReport, setPosReport] = useState(null);

  // Refs for uncontrolled file inputs so we can access FileList on submit.
  const bankStatementsRef = useRef(null);
  const ownershipProofRef = useRef(null);
  const ownerIDRef = useRef(null);
  const taxReturnRef = useRef(null);
  const posReportRef = useRef(null);

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
      // Clean up all object URLs created during the component lifetime
      activeUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleMultipleFilesChange = (e, setter, currentFiles) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    
    // Do not clean up previous URLs because we are appending

    const formatted = newFiles.map((file) => {
      const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      trackUrl(url);
      return {
        file, // Keep the actual File object
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: url,
      };
    });

    setter((prev) => [...prev, ...formatted]);
    
    // Clear the input so selecting the same file again triggers onChange
    if (e.target) e.target.value = '';
  };

  const handleSingleFileChange = (e, setter, currentFile) => {
    const file = e.target.files?.[0];
    if (file) {
      if (currentFile?.previewUrl) {
        untrackAndRevoke(currentFile.previewUrl);
      }
      const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      trackUrl(url);
      setter({
        file, // Keep the actual File object
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: url,
      });
    }
  };

  const clearSingleFile = (setter, ref, currentFile) => {
    if (currentFile?.previewUrl) {
      untrackAndRevoke(currentFile.previewUrl);
    }
    if (ref.current) {
      ref.current.value = '';
    }
    setter(null);
  };

  const clearMultipleFiles = (setter, ref, currentFiles) => {
    currentFiles.forEach((f) => {
      if (f.previewUrl) untrackAndRevoke(f.previewUrl);
    });
    if (ref.current) {
      ref.current.value = '';
    }
    setter([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission by posting all fields and uploaded files
   * to the backend API, which sends a structured email with attachments.
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Make sure we have the required files
      if (!bankStatements || bankStatements.length === 0) {
        throw new Error('Please upload 3 months of business bank statements.');
      }
      if (!ownershipProof) {
        throw new Error('Please upload proof of business ownership.');
      }
      if (!ownerID || ownerID.length === 0) {
        throw new Error('Please upload owner identification details (Front & Back).');
      }

      const result = await submitBusinessForm(
        formData,
        {
          bankStatements: bankStatements.map(p => p.file),
          ownershipProof: [ownershipProof.file],
          ownerID: ownerID.map(p => p.file),
          taxReturn: taxReturn ? [taxReturn.file] : null,
          posReport: posReport ? [posReport.file] : null,
        }
      );

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

  const renderFilePreview = (files, onClear) => {
    if (!files || (Array.isArray(files) && files.length === 0)) return null;

    const fileList = Array.isArray(files) ? files : [files];

    return (
      <div className="file-preview-list">
        {fileList.map((file, idx) => (
          <div key={idx} className="file-preview-item">
            {file.previewUrl ? (
              <img
                src={file.previewUrl}
                alt="File Preview"
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
            
            {!Array.isArray(files) && (
              <button
                type="button"
                className="file-preview-remove"
                onClick={onClear}
                title="Remove file"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
        {Array.isArray(files) && files.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => {
                const newFiles = files.slice(0, -1);
                const removed = files[files.length - 1];
                if (removed && removed.previewUrl) untrackAndRevoke(removed.previewUrl);
                // We don't have direct access to the setter here. 
                // But we can clear all and require them to re-upload, or pass the setter.
                // Wait, renderUploadField passes files, but renderFilePreview doesn't know the setter.
                // I will pass an onRemoveLast callback.
                // Actually, passing the setter is easier if we just pass onClear, but let's stick to clear all for business since we don't have the setter here.
              }}
              style={{ display: 'none' }} // Hidden because no setter is available
            >
              Remove Last
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onClear}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', fontSize: '12px' }}
            >
              <Trash2 size={12} />
              Clear All Files
            </Button>
          </div>
        )}
      </div>
    );
  };

  const renderUploadField = ({ title, files, inputRef, isMultiple, setter, required }) => {
    const hasFile = Array.isArray(files) ? files.length > 0 : !!files;
    const labelText = hasFile 
      ? (isMultiple ? `Add ${title}` : `Change ${title}`) 
      : `${title}${required ? ' *' : ''}`;
    
    return (
      <div>
        <label className={`onboarding-form__upload-item ${hasFile ? 'onboarding-form__upload-item--has-file' : ''}`}>
          <Upload size={20} />
          <span>{labelText}</span>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            multiple={isMultiple}
            className="onboarding-form__upload-input"
            aria-label={`Upload ${title}`}
            onChange={(e) => isMultiple ? handleMultipleFilesChange(e, setter, files) : handleSingleFileChange(e, setter, files)}
            // Do not use required here if we use state, because the input value is cleared
          />
        </label>
        {renderFilePreview(files, () => isMultiple ? clearMultipleFiles(setter, inputRef, files) : clearSingleFile(setter, inputRef, files))}
      </div>
    );
  };

  const renderInput = (id, name, label, type = 'text', placeholder = '', required = true) => (
    <div className="onboarding-form__group">
      <label htmlFor={id} className="onboarding-form__label">{label}{required && ' *'}</label>
      <input
        type={type}
        id={id}
        name={name}
        className="onboarding-form__input"
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  const renderSelect = (id, name, label, options, required = true) => (
    <div className="onboarding-form__group">
      <label htmlFor={id} className="onboarding-form__label">{label}{required && ' *'}</label>
      <select
        id={id}
        name={name}
        className="onboarding-form__input"
        value={formData[name]}
        onChange={handleChange}
        required={required}
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="page page--onboarding">
      {/* ---- Hero ---- */}
      <section className="onboarding-hero" id="business-onboarding-hero">
        <div className="onboarding-hero__inner container">
          <Building2 size={40} className="onboarding-hero__icon" />
          <h1 className="onboarding-hero__title">
            Business Package <span className="text-gradient">Application</span>
          </h1>
          <p className="onboarding-hero__subtitle">
            Complete the application form below so we can review your business,
            documents, and funding readiness goals.
          </p>
        </div>
      </section>

      {/* ---- Qualifications & Documents ---- */}
      <SectionWrapper id="funding-requirements" bg="surface">
        <div className="section-header-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2>Qualification &amp; <span className="text-gradient">Document Requirements</span></h2>
          <p>Review the details and documents that help us prepare your strategy session.</p>
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

      {/* ---- Application Form ---- */}
      <SectionWrapper id="application-form" bg="surface">
        <div className="onboarding-form-wrapper">
          <h2>Application <span className="text-gradient">Form</span></h2>
          <p className="onboarding-form-subtitle">
            Fill out the form below to begin your capital readiness assessment.
          </p>

          {isSubmitted ? (
            <div className="success-state">
              <div className="success-state__icon-wrapper">
                <Check size={40} />
              </div>
              <h3 className="success-state__title">Application Submitted!</h3>
              <p className="success-state__message">
                Thank you for taking the time to complete the application. Our team will review your business information and get back to you shortly.
              </p>
              <div className="success-state__loader">
                <Loader2 size={16} className="success-state__spinner" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Redirecting to home page...</span>
              </div>
            </div>
          ) : (
          <form className="onboarding-form" onSubmit={handleSubmit}>
            <div className="onboarding-form__row">
              {renderInput('biz-name', 'fullName', 'Full Name', 'text', 'Your full name')}
              {renderInput('biz-email', 'email', 'Email Address', 'email', 'you@business.com')}
            </div>

            <div className="onboarding-form__row">
              {renderInput('biz-phone', 'phone', 'Phone Number', 'tel', '(555) 123-4567')}
              {renderInput('biz-business-name', 'businessName', 'Business Name', 'text', 'Your business name')}
            </div>

            <div className="onboarding-form__row">
              {renderSelect('biz-age', 'businessAge', 'How long has your business been operating?', [
                { value: '1-2', label: '1–2 years' },
                { value: '2-5', label: '2–5 years' },
                { value: '5+', label: '5+ years' }
              ])}
              {renderSelect('biz-revenue', 'monthlyRevenue', 'Monthly Revenue', [
                { value: 'under-10k', label: 'Under $10k' },
                { value: '10k-50k', label: '$10k – $50k' },
                { value: '50k-100k', label: '$50k – $100k' },
                { value: '100k-250k', label: '$100K – $250K' },
                { value: '250k-500k', label: '$250K – $500K' },
                { value: '500k-1m', label: '$500K – $1M' },
                { value: '1m+', label: '$1M+' }
              ])}
            </div>

            <div className="onboarding-form__row">
              {renderSelect('biz-defaults', 'hasDefaults', 'Any prior defaults?', [
                { value: 'no', label: 'No' },
                { value: 'yes', label: 'Yes' }
              ])}
              {renderSelect('biz-ucc', 'hasUccLiens', 'Any UCC liens attached?', [
                { value: 'no', label: 'No' },
                { value: 'yes', label: 'Yes' }
              ])}
            </div>

            {renderInput('biz-website', 'website', 'Business Website (if applicable)', 'url', 'https://yourbusiness.com', false)}

            <div className="onboarding-form__group">
              <label htmlFor="biz-message" className="onboarding-form__label">Additional Information</label>
              <textarea
                id="biz-message"
                name="message"
                className="onboarding-form__input onboarding-form__textarea"
                rows="4"
                placeholder="Tell us more about your business and capital readiness goals..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Document Uploads */}
            <div className="onboarding-form__uploads">
              <h3>Upload Documents</h3>
              <div className="onboarding-form__upload-grid">
                {renderUploadField({ title: 'Bank Statements (3 months)', files: bankStatements, inputRef: bankStatementsRef, isMultiple: true, setter: setBankStatements, required: true })}
                {renderUploadField({ title: 'Proof of business ownership', files: ownershipProof, inputRef: ownershipProofRef, isMultiple: false, setter: setOwnershipProof, required: true })}
                {renderUploadField({ title: 'Owner identification details (Front & Back)', files: ownerID, inputRef: ownerIDRef, isMultiple: true, setter: setOwnerID, required: true })}
                {renderUploadField({ title: 'Tax Return (Optional)', files: taxReturn, inputRef: taxReturnRef, isMultiple: false, setter: setTaxReturn, required: false })}
                {renderUploadField({ title: 'POS Transaction Report (Optional)', files: posReport, inputRef: posReportRef, isMultiple: false, setter: setPosReport, required: false })}
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
                'Submit Application'
              )}
            </Button>
          </form>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
