import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Smooth scroll to top for Home
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={handleHomeClick}>
            Home
          </a>
        </li>
        <li><a href="#about" onClick={() => setDropdownOpen(false)}>About us</a></li>
        <li><a href="#student-life" onClick={() => setDropdownOpen(false)}>Student Life</a></li>
        <li><a href="#facilities" onClick={() => setDropdownOpen(false)}>Facilities</a></li>
        <li><a href="#gallery" onClick={() => setDropdownOpen(false)}>Gallery</a></li>
        <li><a href="#admission" onClick={() => setDropdownOpen(false)}>Admission</a></li>
        <li><a href="#enquiry" onClick={() => setDropdownOpen(false)}>Admission Enquiry</a></li>

        {/* Careers Dropdown (Supports hover on desktop + click on mobile) */}
        <li 
          className={`dropdown ${dropdownOpen ? 'open' : ''}`} 
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a 
            href="#careers" 
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
          >
            Careers <span className="arrow">▾</span>
          </a>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li>
              <a href="#teaching-jobs" onClick={() => setDropdownOpen(false)}>
                Teaching Staff
              </a>
            </li>
            <li>
              <a href="#non-teaching-jobs" onClick={() => setDropdownOpen(false)}>
                Non-Teaching Staff
              </a>
            </li>
            <li>
              <a href="#current-openings" onClick={() => setDropdownOpen(false)}>
                Current Openings
              </a>
            </li>
            <li>
              <a href="#apply-online" onClick={() => setDropdownOpen(false)}>
                Apply Online
              </a>
            </li>
          </ul>
        </li>

        <li><a href="#contact" onClick={() => setDropdownOpen(false)}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;