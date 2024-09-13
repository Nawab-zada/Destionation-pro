import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import StayDuration from "./StayDuration";
import Transportation from "./Transportation";
import FinalConfirmation from "./finalconfirmation";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    departureDate: "",
    flyFrom: "",
    packageType: "",
    passengers: "",
    stayDuration: {
      firstEntry: "",
      secondEntry: "",
      thirdEntry: "",
      nightsFirstEntry: "",
      nightsSecondEntry: "",
      nightsThirdEntry: "",
    },
    transportation: {
      transportChoice: "",
      ziaraatMakkah: "",
      ziaraatMadina: "",
    },
    name: "",
    phone: "",
    city: "",
    email: "",
    comments: "",
  });

  // Logic to go to the next step
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Update the formData for basic information
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Update the formData for stay duration
  const handleStayDurationChange = (input) => (e) => {
    setFormData({
      ...formData,
      stayDuration: { ...formData.stayDuration, [input]: e.target.value },
    });
  };

  // Update the formData for transportation
  const handleTransportationChange = (input) => (e) => {
    setFormData({
      ...formData,
      transportation: { ...formData.transportation, [input]: e.target.value },
    });
  };

  // Submit and log all form data to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form data submitted successfully! Check the console for details.");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <BasicInformation
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
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
        return (
          <BasicInformation
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
    }
  };

  return (
    <div className="app-container">
      <div className="heading-container">
        <h2>Customize Umrah Package</h2>
        <p>Choose your preferences to create a personalized Umrah experience</p>
      </div>
      <main>
        {step === 4 ? (
          <div className="final-confirmation-container">
            <FinalConfirmation
              formData={formData}
              handleSubmit={handleSubmit}
            />
          </div>
        ) : (
          <div className="content-container">
            <aside className="steps-sidebar">
              <Sidebar step={step} />
            </aside>
            <section className="form-section">{renderStep()}</section>
            <aside className="image-section">
              <img src="/2.jpg" alt="Umrah" />
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default MultiStepForm;
