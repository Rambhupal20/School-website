import React from 'react';
import './Facilites.css';

const Facilites = () => {
  const facilityList = [
    {
      id: 1,
      name: 'Advanced Science Labs',
      badge: 'Practical Learning',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      description: 'Fully equipped Physics, Chemistry, and Biology laboratories compliant with safety standards for hands-on experiments.',
      features: ['Individual student workstations', 'Safety goggles & eye-wash stations', 'Modern microscopes & measuring tools']
    },
    {
      id: 2,
      name: 'High-Tech Computer Lab',
      badge: 'Digital Literacy',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      description: 'Air-conditioned digital laboratory with high-speed internet, modern systems, and coding tools for young learners.',
      features: ['1:1 Student-to-system ratio', 'High-speed broadband network', 'Dedicated coding & digital art software']
    },
    {
      id: 3,
      name: 'Comprehensive Library',
      badge: 'Knowledge Hub',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      description: 'A peaceful environment stocked with thousands of fiction, non-fiction, encyclopedias, and reference journals.',
      features: ['Over 10,000+ curated volumes', 'Dedicated silent reading hall', 'Digital catalogue & e-magazine access']
    },
    {
      id: 4,
      name: 'Sports & Play Arena',
      badge: 'Athletics & Fitness',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
      description: 'Spacious outdoor grounds and marked courts for basketball, volleyball, cricket nets, and track events.',
      features: ['Multisport standard-sized courts', 'Trained sports coaches & fitness mentors', 'Annual inter-school athletic meet']
    }
  ];

  return (
    <section className="facilities-section" id="facilities">
      <div className="facilities-container">
        
        {/* Section Header */}
        <div className="facilities-header">
          <span className="facilities-badge">Campus Infrastructure</span>
          <h2 className="facilities-title">World-Class Facilities</h2>
          <p className="facilities-subtitle">
            Providing students with an enriching physical and digital environment designed to inspire exploration, creativity, and safety.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilityList.map((item) => (
            <div className="facility-card" key={item.id}>
              <div className="facility-image-wrapper">
                <img src={item.image} alt={item.name} className="facility-image" loading="lazy" />
                <span className="facility-card-badge">{item.badge}</span>
              </div>
              <div className="facility-content">
                <h3 className="facility-name">{item.name}</h3>
                <p className="facility-description">{item.description}</p>
                <ul className="facility-features">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Safety & Amenities Bar */}
        <div className="amenities-strip">
          <div className="amenity-item">
            <span className="amenity-icon">📹</span>
            <div>
              <h4>24/7 CCTV Campus</h4>
              <p>Monitored gates and safe premises</p>
            </div>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">🚌</span>
            <div>
              <h4>Safe Transportation</h4>
              <p>GPS-enabled dedicated bus routes</p>
            </div>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">🩺</span>
            <div>
              <h4>First Aid & Infirmary</h4>
              <p>On-campus healthcare assistance</p>
            </div>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">💧</span>
            <div>
              <h4>Purified Water</h4>
              <p>Reverse Osmosis (RO) drinking stations</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilites;