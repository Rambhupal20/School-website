import React from "react";
import title from '../../assets/Title.jpg';
import './Title.css';

const Title = () => {
  return (
    <header className="title-card">
      <div className="title-brand">
        <img src={title} alt="School Logo" className="title-logo" />
        <div className="title-text-group">
          <h1 className="title-heading">Mourya Em/Tm High School</h1>
          <p className="title-subheading">Excellence in Education • Est. 1995</p>
        </div>
      </div>
    </header>
  );
};

export default Title;