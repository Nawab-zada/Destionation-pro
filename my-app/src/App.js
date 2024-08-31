import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import BasicInformation from './components/BasicInformation';
import StayDuration from './components/StayDuration'; // Make sure this import matches your component name
import Transportation from './components/Transportation';
import FinalConfirmation from './components/finalconfirmation';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    departureDate: '',
    flyFrom: '',
    packageType: '',
    passengers: '',
    stayDuration: {
      firstEntry: '',
      secondEntry: '',
      thirdEntry: '',
      nightsFirstEntry: '',
      nightsSecondEntry: '',
      nightsThirdEntry: ''
    },
    transportation: {
      transportChoice: '',
      ziaraatMakkah: '',
      ziaraatMadina: ''
    },
    name: '',
    phone: '',
    city: '',
    email: '',
    comments: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleStayDurationChange = (input) => (e) => {
    setFormData({
      ...formData,
      stayDuration: { ...formData.stayDuration, [input]: e.target.value }
    });
  };

  const handleTransportationChange = (input) => (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      transportation: {
        ...prevFormData.transportation,
        [input]: e.target.value
      }
    }));
  
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle final submission, e.g., sending data to a server
    console.log("Final data submitted: ", formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicInformation nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 2:
        return (
          <StayDuration
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.stayDuration}
            setFormData={handleStayDurationChange}
          />
        );
      case 3:
        return (
          <Transportation
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.transportation}
            setFormData={handleTransportationChange}
          />
        );
      case 4:
        return (
          <FinalConfirmation
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <BasicInformation nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    }
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <h1>Custom Umrah</h1>
      </div>
      <Header />
      <div className="heading-container">
        <h2>Customize Umrah Package</h2>
        <p>Choose your preferences to create a personalized Umrah experience</p>
      </div>
      <main>
        {step === 4 ? (
          <div className="final-confirmation-container">
            <FinalConfirmation formData={formData} handleSubmit={handleSubmit} />
          </div>
        ) : (
          <div className="content-container">
            <aside className="steps-sidebar">
              <Sidebar step={step} />
            </aside>
            <section className="form-section">
              {renderStep()}
            </section>
            <aside className="image-section">
              <img src="2.jpg" alt="Umrah" />
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
  
}

export default App;
