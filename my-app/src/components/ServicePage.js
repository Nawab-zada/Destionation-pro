import React from 'react';
import './App.css'; // Make sure to create this CSS file
import { useHistory } from 'react-router-dom';

function ServicePage() {
  const history = useHistory();

  const redirectToForm = () => {
    history.push('/form'); // Adjust the route as per your application
  };

  return (
    <div className="service-page-container">
      <section className="about-umrah-package">
        <h2>The Best Umrah Deals in Pakistan</h2>
        <p>
          Welcome to our exclusive Umrah package from Pakistan, where we offer you a transformative and deeply spiritual pilgrimage experience to the blessed cities of Makkah and Madinah. Embark on a journey of a lifetime as you fulfill your spiritual obligations and seek blessings from the divine in the holiest sites of Islam.
        </p>
        <ul>
          <li>Fastest Umrah visa processing</li>
          <li>Greater services at lowest cost</li>
          <li>Comfortable hotels in Economy</li>
          <li>Best customer support during your journey</li>
          <li>Most of all – No false commitments!</li>
        </ul>
        <p>
          You can get your customized Umrah package in Economy or Star from our customer support team. Your required dates, duration, and choice of stay will give you the best price.
        </p>
      </section>

      <section className="make-package">
        <button onClick={redirectToForm} className="make-package-btn">
          Make Your Own Package
        </button>
      </section>

      <section className="ongoing-packages">
        <h2>Current Umrah Packages Going On!</h2>
        <div className="packages-grid">
          <div className="package-card"></div>
          <div className="package-card"></div>
          <div className="package-card"></div>
          <div className="package-card"></div>
          <div className="package-card"></div>
          <div className="package-card"></div>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
