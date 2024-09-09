import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './UmrahServicePage.css'

function Services() {
    const [flip, setFlip] = useState(false);

  const handleMouseOver = () => {
    setFlip(true);
  };

  const handleMouseOut = () => {
    setFlip(false);
  };
  return (
    <div className="services-container">
      <div className="heading-container">
        <h2>Our Services</h2>
        <p>Explore our exclusive Umrah services and packages tailored just for you.</p>
      </div>

      <div className="about-umrah-package">
        <div className="text-box">
        <h2>The Best Umrah Deals in Pakistan</h2>
        <p>
          Welcome to our exclusive Umrah package from Pakistan, where we offer you a transformative and deeply spiritual pilgrimage experience to the blessed cities of Makkah and Madinah. Embark on a journey of a lifetime as you fulfill your spiritual obligations and seek blessings from the divine in the holiest sites of Islam.
        </p>
        <ul className="umrah-benefits-list">
          <li>Fastest Umrah visa processing</li>
          <li>Greater services at the lowest cost</li>
          <li>Comfortable hotels in Economy</li>
          <li>Best customer support during your journey</li>
          <li>Most of all – No false commitments!</li>
        </ul>
        <p>
          Get your customized Umrah package in Economy or Star from our customer support team. Your required dates, duration, and choice of stay will give you the best price.
        </p>
        <Link to="/services/form" className="customize-button">
          Customize Your Umrah Package
        </Link>
      </div>
      </div>

      <section className="ongoing-packages">
        <h2>Current Umrah Packages Going On!</h2>
        <div className="packages-grid">
          <div className="package-card">
            <img src="pk8.jpg" />
            <div className="back">
              <h3>Package Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="package-card">
            <img src="pk9.jpg" />
            <div className="back">
              <h3>Package Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="package-card">
            <img src="pk4.jpg" />
            <div className="back">
              <h3>Package Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="package-card">
            <img src="pk5.jpg" />
            <div className="back">
              <h3>Package Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="package-card">
            <img src="pk6.jpg" />
            <div className="back">
              <h3>30 DAYS PACKAGE</h3>
        <ul className="umrah-benefits">
          <li>Fastest Umrah visa processing</li>
          <li>Greater services at the lowest cost</li>
          <li>Comfortable hotels in Economy</li>
          <li>Best customer support during your journey</li>
          <li>Most of all – No false commitments!</li>
        </ul></div>
          </div>
          <div
      className={`package-card ${flip ? 'flip' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src="pk9.jpg" />
      <div className="back">
        <h3>30 DAYS PACKAGE</h3>
        <ul className="umrah-benefits">
          <li>Fastest Umrah visa processing</li>
          <li>Greater services at the lowest cost</li>
          <li>Comfortable hotels in Economy</li>
          <li>Best customer support during your journey</li>
          <li>Most of all – No false commitments!</li>
        </ul>
      </div>
    </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
