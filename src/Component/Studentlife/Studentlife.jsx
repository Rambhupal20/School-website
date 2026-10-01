import React, { useState } from 'react';
import './Studentlife.css';

const Studentlife = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const activities = [
    {
      id: 1,
      title: 'Sports & Athletics',
      category: 'sports',
      icon: '🏆',
      description: 'Cricket, volleyball, track & field, and yoga programs that emphasize fitness, team spirit, and discipline.',
      tag: 'Physical Fitness'
    },
    {
      id: 2,
      title: 'Science & STEM Club',
      category: 'academic',
      icon: '🔬',
      description: 'Hands-on practical experiments, robotics workshops, and annual science exhibitions fostering curiosity.',
      tag: 'Innovation'
    },
    {
      id: 3,
      title: 'Music, Dance & Drama',
      category: 'cultural',
      icon: '🎭',
      description: 'Annual day celebrations, classical dance, choir, and theatre clubs encouraging artistic expression.',
      tag: 'Creative Arts'
    },
    {
      id: 4,
      title: 'Community & Social Service',
      category: 'leadership',
      icon: '🌱',
      description: 'Tree plantation drives, cleanliness campaigns, and student leadership councils building responsible citizens.',
      tag: 'Character'
    },
    {
      id: 5,
      title: 'Debate & Literary Guild',
      category: 'academic',
      icon: '📚',
      description: 'Elocution competitions, multilingual essay contests, and reading circles honing communication skills.',
      tag: 'Communication'
    },
    {
      id: 6,
      title: 'Art & Craft Workshops',
      category: 'cultural',
      icon: '🎨',
      description: 'Traditional pottery, sketching, origami, and exhibition displays bringing student imagination to life.',
      tag: 'Fine Arts'
    }
  ];

  const filteredActivities = activeCategory === 'all'
    ? activities
    : activities.filter(item => item.category === activeCategory);

  return (
    <section className="studentlife-section" id="student-life">
      <div className="studentlife-container">
        
        {/* Section Header */}
        <div className="studentlife-header">
          <span className="studentlife-badge">Vibrant Campus</span>
          <h2 className="studentlife-title">Life at Mourya High School</h2>
          <p className="studentlife-subtitle">
            Beyond textbooks: discovering talents, building lifelong friendships, and learning essential life skills.
          </p>

          {/* Filter Chips */}
          <div className="category-filters">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Activities
            </button>
            <button
              className={`filter-btn ${activeCategory === 'sports' ? 'active' : ''}`}
              onClick={() => setActiveCategory('sports')}
            >
              Sports
            </button>
            <button
              className={`filter-btn ${activeCategory === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveCategory('academic')}
            >
              Academic Clubs
            </button>
            <button
              className={`filter-btn ${activeCategory === 'cultural' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cultural')}
            >
              Arts & Culture
            </button>
            <button
              className={`filter-btn ${activeCategory === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveCategory('leadership')}
            >
              Leadership
            </button>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {filteredActivities.map((act) => (
            <div className="activity-card" key={act.id}>
              <div className="card-top">
                <span className="activity-icon">{act.icon}</span>
                <span className="activity-tag">{act.tag}</span>
              </div>
              <h3 className="activity-title">{act.title}</h3>
              <p className="activity-desc">{act.description}</p>
            </div>
          ))}
        </div>

        {/* Daily Schedule Banner */}
        <div className="routine-banner">
          <div className="routine-content">
            <h3>A Balanced Day for Every Learner</h3>
            <p>Our timetable balances rigorous classroom study with sports periods, library sessions, and club meets every single day.</p>
          </div>
          <div className="routine-highlights">
            <div className="routine-pill">🕒 8:45 AM — Assembly & Thought of the Day</div>
            <div className="routine-pill">🏃 3:30 PM — Sports & Remedial Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Studentlife;