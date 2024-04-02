import React from 'react';
import ins1 from '../Images/instructor-1.jpg';
import ins2 from '../Images/instructor-2.jpg';
import ins3 from '../Images/instructor-3.jpg';
import ins4 from '../Images/instructor-4.jpg';
const Section3 = () => {
  return (
    <div>
      <section className="instructor">
        <p className="section-subtitle">Best Doctors</p>
        <h2 className="section-title">Meet our team members</h2>

        <div className="instructor-grid">
          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src={ins1} alt="instructor" />
            </div>
            <h4 className="instructor-name">James King</h4>
            <p className="instructor-title">CEO &amp; CO-FOUNDER</p>
          </div>

          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src={ins2} alt="instructor" />
            </div>
            <h4 className="instructor-name">Mark Henry</h4>
            <p className="instructor-title">DENTAL SPECIALIST</p>
          </div>

          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src={ins3} alt="instructor" />
            </div>
            <h4 className="instructor-name">Moona Lisa</h4>
            <p className="instructor-title">ORTHOPEDIC</p>
          </div>

          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src={ins4} alt="instructor" />
            </div>
            <h4 className="instructor-name">Marina John</h4>
            <p className="instructor-title">BRAIN SURGEON</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;

