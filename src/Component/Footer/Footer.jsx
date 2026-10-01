import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="school-footer" id="contact">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* Column 1: School Identity & Mission */}
          <div className="footer-col brand-col">
            <h3 className="footer-school-name">Mourya High School</h3>
            <p className="school-tagline">Excellence in Education • Est. 1995</p>
            <p className="school-desc">
              Dedicated to nurturing young minds with knowledge, discipline, and character, preparing every student for a successful and compassionate future.
            </p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook" className="social-icon">f</a>
              <a href="#twitter" aria-label="Twitter" className="social-icon">𝕏</a>
              <a href="#instagram" aria-label="Instagram" className="social-icon">📸</a>
              <a href="#youtube" aria-label="YouTube" className="social-icon">▶</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#student-life">Student Life</a></li>
              <li><a href="#facilities">Campus Facilities</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#admission">Admission Form</a></li>
              <li><a href="#enquiry">Enquiry & Tours</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Visiting Hours */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span>Mourya High School Campus, Main Road, Anantapur, Andhra Pradesh - 515001</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 98765 43210 / 08554 223344</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@mouryahighschool.edu.in</span>
              </li>
            </ul>

            <div className="office-hours">
              <h5>Administrative Office Hours</h5>
              <p>Monday – Friday: 8:30 AM – 4:30 PM</p>
              <p>Saturday: 9:00 AM – 1:30 PM</p>
              <p className="closed-notice">Sunday & Public Holidays: Closed</p>
            </div>
          </div>

          {/* Column 4: Google Map Embed */}
          <div className="footer-col map-col">
            <h4 className="footer-title">Our Location</h4>
            <div className="map-frame-wrapper">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123847.67107775988!2d77.534888!3d14.681888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b0365778841%3A0x7d25e0b62e49c717!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="170"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="directions-link">
              Open in Google Maps →
            </a>
          </div>

        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Mourya High School. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#disclosure">Mandatory Public Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;