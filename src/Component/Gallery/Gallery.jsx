import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'events',
      title: 'Annual Cultural Day',
      subtitle: 'Classical dance and drama performances',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'sports',
      title: 'Inter-School Sports Meet',
      subtitle: 'Athletes competing on sports day',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'campus',
      title: 'Main Academic Block',
      subtitle: 'Spacious corridors and lush greenery',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'academics',
      title: 'Science & Robotics Expo',
      subtitle: 'Student exhibits and model presentations',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'sports',
      title: 'Basketball Championship',
      subtitle: 'Final match celebration on campus',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'campus',
      title: 'Modern Computer Lab',
      subtitle: 'Interactive learning and digital coding',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      category: 'academics',
      title: 'Quiet Study & Library Hall',
      subtitle: 'Extensive book collections & research',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      category: 'events',
      title: 'Independence Day Parade',
      subtitle: 'Flag hoisting ceremony and march past',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <span className="gallery-badge">Moments & Memories</span>
          <h2 className="gallery-title">Campus Life in Pictures</h2>
          <p className="gallery-subtitle">
            Take a glance into our vibrant classrooms, spirited sporting events, and memorable celebrations.
          </p>

          {/* Filter Pills */}
          <div className="gallery-filters">
            {['all', 'campus', 'events', 'sports', 'academics'].map((filter) => (
              <button
                key={filter}
                className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Photos' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              className="gallery-item"
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="overlay-badge">{item.category}</span>
                <h4 className="overlay-title">{item.title}</h4>
                <p className="overlay-subtitle">{item.subtitle}</p>
                <span className="zoom-icon">🔍 View Full Photo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div
            className="lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="lightbox-img"
              />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.subtitle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;