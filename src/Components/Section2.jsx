import React from 'react';
import icon1 from '../Images/course-category-icon-1.png';
import icon2 from '../Images/course-category-icon-2.png';
import icon3 from '../Images/course-category-icon-3.png';
import icon4 from '../Images/course-category-icon-4.png';
import icon5 from '../Images/course-category-icon-5.png';
import icon6 from '../Images/course-category-icon-6.png';

const Section2 = () => {
  return (
    <div>
      <section className="category">
        <p className="section-subtitle">Provide You The Best Service</p>
        <h2 className="section-title">Our Results In Numbers</h2>
        <ul className="course-item-group">
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon1}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-1-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">99% </a>
              </h3>
              <p className="category-subtitle">Happy Customers</p>
            </div>
          </li>
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon2}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-2-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">15 thousand+</a>
              </h3>
              <p className="category-subtitle">Online Patients</p>
            </div>
          </li>
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon3}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-3-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Best Testing Lab's</a>
              </h3>
              <p className="category-subtitle">Across The Country </p>
            </div>
          </li>
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon4}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-4-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">12 thousand+ </a>
              </h3>
              <p className="category-subtitle">Patient Recovered</p>
            </div>
          </li>
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon5}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-5-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn about Health</a>
              </h3>
              <p className="category-subtitle">Improve Your Health</p>
            </div>
          </li>
          <li className="course-category-item">
            <div className="wrapper">
              <img
                src={icon6}
                alt="category icon"
                className="category-icon default"
              />
              <img
                src="./img/course-category-icon-6-w.png"
                alt="category icon white"
                className="category-icon hover"
              />
            </div>
            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn </a>
              </h3>
              <p className="category-subtitle">Worth to Learn</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Section2;

