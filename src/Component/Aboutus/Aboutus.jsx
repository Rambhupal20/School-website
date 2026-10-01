import React, { useState, useEffect, useRef } from 'react';
import './Aboutus.css';

// Reusable CountUp sub-component
const CountUpNumber = ({ end, duration = 2000, suffix = '', prefix = '', startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out cubic formula for a smooth deceleration effect
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * end);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure exact final number
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startCounting]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsSectionRef = useRef(null);

  // Trigger the count-up only when the stats section enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.25 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="about-header">
          <span className="about-badge">About Mourya High School</span>
          <h2 className="about-title">Nurturing Minds, Building Futures</h2>
          <p className="about-description">
            Established with a commitment to academic excellence and character development, 
            Mourya High School provides a balanced blend of traditional values and 
            modern educational practices to prepare students for tomorrow's challenges.
          </p>
        </div>

        {/* Quick Highlights / Animated Stats */}
        <div className="about-stats-grid" ref={statsSectionRef}>
          <div className="stat-card">
            <h3>
              <CountUpNumber end={25} suffix="+" startCounting={isVisible} />
            </h3>
            <p>Years of Legacy</p>
          </div>
          <div className="stat-card">
            <h3>
              <CountUpNumber end={100} suffix="%" startCounting={isVisible} />
            </h3>
            <p>Board Exam Pass Rate</p>
          </div>
          <div className="stat-card">
            <h3>
              <CountUpNumber end={1500} suffix="+" startCounting={isVisible} />
            </h3>
            <p>Happy Students</p>
          </div>
          <div className="stat-card">
            <h3>
              <CountUpNumber end={50} suffix="+" startCounting={isVisible} />
            </h3>
            <p>Dedicated Faculty</p>
          </div>
        </div>

        {/* Pillars: Vision, Mission, Values */}
        <div className="about-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>
              To be a beacon of quality education that inspires young learners to explore their passions, 
              think critically, and become compassionate global citizens.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To cultivate an inclusive and engaging learning environment supported by 
              strong curricular fundamentals, sports, and co-curricular pursuits.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">⭐</div>
            <h3>Core Values</h3>
            <p>
              Integrity, curiosity, discipline, and respect form the bedrock of everything 
              we cultivate inside and outside our classrooms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutus;