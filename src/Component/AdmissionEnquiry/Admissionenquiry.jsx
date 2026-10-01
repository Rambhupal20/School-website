import React, { useState } from 'react';
import './Admissionenquiry.css';

const Admissionenquiry = () => {
  const initialForm = {
    parentName: '',
    phone: '',
    email: '',
    childGrade: '',
    enquiryType: 'general',
    message: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Please enter your name';

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[- ]/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }

    if (!formData.childGrade) {
      newErrors.childGrade = 'Please select a grade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Enquiry Submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-container">
        
        {/* Left Side: Contact details & quick assistance */}
        <div className="enquiry-info">
          <span className="enquiry-badge">Get In Touch</span>
          <h2 className="enquiry-title">Have Questions About Admissions?</h2>
          <p className="enquiry-subtitle">
            Our admissions office is here to guide you through the process, arrange campus tours, and clarify fee structures or curriculum details.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Direct Admission Helpline</h4>
                <p>+91 98765 43210 / 08554 223344</p>
                <span>Mon – Sat: 8:30 AM – 4:30 PM</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Admissions Email</h4>
                <p>admissions@mouryaschool.edu.in</p>
                <span>We reply within 24 business hours</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🏫</div>
              <div>
                <h4>Campus Visit Hours</h4>
                <p>Mourya High School Campus</p>
                <span>Walk-in tours daily at 10:00 AM & 2:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Callback / Enquiry Form */}
        <div className="enquiry-form-card">
          {submitted ? (
            <div className="enquiry-success">
              <div className="success-badge-icon">✓</div>
              <h3>Thank You for Reaching Out!</h3>
              <p>
                We have received your enquiry for <strong>{formData.childGrade}</strong>. Our academic counselor will call <strong>{formData.phone}</strong> shortly.
              </p>
              <button className="reset-enquiry-btn" onClick={handleReset}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="form-card-title">Request a Callback / School Tour</h3>
              <p className="form-card-subtitle">Fill in your contact info to get instant details.</p>

              <div className="field-group">
                <label htmlFor="parentName">Parent / Guardian Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={errors.parentName ? 'input-invalid' : ''}
                />
                {errors.parentName && <span className="field-error">{errors.parentName}</span>}
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-invalid' : ''}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="childGrade">Grade Looking For *</label>
                  <select
                    id="childGrade"
                    name="childGrade"
                    value={formData.childGrade}
                    onChange={handleChange}
                    className={errors.childGrade ? 'input-invalid' : ''}
                  >
                    <option value="">Select Class</option>
                    <option value="Pre-Primary / Nursery">Pre-Primary / Nursery</option>
                    <option value="Class 1 to 5">Class 1 to 5</option>
                    <option value="Class 6 to 8">Class 6 to 8</option>
                    <option value="Class 9 & 10">Class 9 & 10</option>
                  </select>
                  {errors.childGrade && <span className="field-error">{errors.childGrade}</span>}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="enquiryType">I am looking to:</label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                >
                  <option value="general">Ask General Questions</option>
                  <option value="campus_tour">Book an In-Person Campus Tour</option>
                  <option value="fee_structure">Request Fee Structure Brochure</option>
                  <option value="transportation">Inquire about Bus Routes / Transport</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="message">Your Message / Query (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about specific questions, previous syllabus, or preferred visit timings..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="enquiry-submit-btn">
                Request Information →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Admissionenquiry;