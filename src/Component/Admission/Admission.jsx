import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const initialFormState = {
    studentName: '',
    dob: '',
    gender: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (!formData.grade) newErrors.grade = 'Please select admission grade';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[- ]/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Admission Application Submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section className="admission-section" id="admission">
      <div className="admission-container">
        
        {/* Header */}
        <div className="admission-header">
          <span className="admission-badge">Admissions Open 2026–2027</span>
          <h2 className="admission-title">Enroll at Mourya High School</h2>
          <p className="admission-subtitle">
            Take the first step toward your child's holistic educational journey. Fill out the application form below and our admissions team will connect with you within 24 hours.
          </p>
        </div>

        {/* Steps Card */}
        <div className="process-bar">
          <div className="step-item">
            <span className="step-num">1</span>
            <div>
              <h5>Online Application</h5>
              <p>Submit candidate details</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div>
              <h5>Document Verification</h5>
              <p>School visit & review</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div>
              <h5>Interaction & Seat Offer</h5>
              <p>Welcome to Mourya!</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-card">
          {submitted ? (
            <div className="success-banner">
              <div className="success-icon">✓</div>
              <h3>Application Submitted Successfully!</h3>
              <p>
                Thank you for applying. We have registered <strong>{formData.studentName}</strong> for <strong>{formData.grade}</strong>. Our admissions counselor will call you at <strong>{formData.phone}</strong> shortly.
              </p>
              <button className="reset-btn" onClick={handleReset}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="form-section-heading">1. Student Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="studentName">
                    Student Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    placeholder="e.g. John Doe"
                    value={formData.studentName}
                    onChange={handleChange}
                    className={errors.studentName ? 'input-error' : ''}
                  />
                  {errors.studentName && <span className="error-text">{errors.studentName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="dob">
                    Date of Birth <span className="req">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={errors.dob ? 'input-error' : ''}
                  />
                  {errors.dob && <span className="error-text">{errors.dob}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    Gender <span className="req">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={errors.gender ? 'input-error' : ''}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <span className="error-text">{errors.gender}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="grade">
                    Grade Applying For <span className="req">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={errors.grade ? 'input-error' : ''}
                  >
                    <option value="">Select Grade / Class</option>
                    <option value="Nursery / Kindergarten">Nursery / Kindergarten</option>
                    <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5)</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="High School (Class 9 & 10)">High School (Class 9 & 10)</option>
                  </select>
                  {errors.grade && <span className="error-text">{errors.grade}</span>}
                </div>
              </div>

              <h3 className="form-section-heading">2. Parent & Contact Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="parentName">
                    Parent / Guardian Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="e.g. Robert Doe"
                    value={formData.parentName}
                    onChange={handleChange}
                    className={errors.parentName ? 'input-error' : ''}
                  />
                  {errors.parentName && <span className="error-text">{errors.parentName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Mobile Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="previousSchool">Previous School (Optional)</label>
                  <input
                    type="text"
                    id="previousSchool"
                    name="previousSchool"
                    placeholder="Name of previous school"
                    value={formData.previousSchool}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">Residential Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="Street, City, Pincode"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit Admission Application →
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Admission;