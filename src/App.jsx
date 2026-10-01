import React from 'react';
import Title from './Component/Title/Title';
import Navbar from './Component/Navbar/Navbar';
import Aboutus from './Component/Aboutus/Aboutus';
import Studentlife from './Component/Studentlife/Studentlife';
import Facilites from './Component/Facilites/Facilites';
import Gallery from './Component/Gallery/Gallery';
import Admission from './Component/Admission/Admission';
import Admissionenquiry from './Component/AdmissionEnquiry/Admissionenquiry';
import Footer from './Component/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app" id="home"> {/* 👈 Added id="home" here */}
      <Title />
      <Navbar />
      <main className="main-content">
        <Aboutus />
        <Studentlife />
        <Facilites />
        <Gallery />
        <Admission />
        <Admissionenquiry />
      </main>
      <Footer />
    </div>
  );
};

export default App;