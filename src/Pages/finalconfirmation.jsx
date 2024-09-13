import React, { useState } from "react";
import axios from "axios";

const FinalConfirmation = ({ formData, handleSubmit }) => {
  const {
    departureDate,
    flyFrom,
    packageType,
    passengers,
    stayDuration,
    transportation,
  } = formData;

  // Create local state to handle the form inputs
  const [formDetails, setFormDetails] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    comments: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  // Modified handleSubmit to include new form details
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Combine all form data (including final page inputs)
    const completeFormData = {
      basicForm: {
        departureDate,
        flyFrom,
        packageType,
        passengers,
      },
      stayDuration,
      transportation,
      onlineSupport: formDetails,
    };

    try {
      // Send the form data to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/v1/cumrah/create-custm-Umrah",
        completeFormData
      );

      // Log the response data (optional)
      console.log("Response from server:", response.data);

      // Alert the user of success
      alert("Form data submitted successfully! Check the console for details.");
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <>
      <section className="fina-confirmation">
        <h3>Your Package</h3>
        <div className="package-details">
          <div>
            <strong>Departure Date:</strong> {departureDate}
          </div>
          <div>
            <strong>Fly From:</strong> {flyFrom}
          </div>
          <div>
            <strong>Package Type:</strong> {packageType}
          </div>
          <div>
            <strong>Passengers:</strong> {passengers}
          </div>
          <div>
            <strong>First Entry In:</strong> {stayDuration.firstEntry} -{" "}
            <span>Nights:</span> {stayDuration.nightsFirstPlace}
          </div>
          <div>
            <strong>Second Entry In:</strong> {stayDuration.secondEntry} -{" "}
            <span>Nights:</span> {stayDuration.nightsSecondPlace}
          </div>
          <div>
            <strong>Third Entry In:</strong> {stayDuration.thirdEntry} -{" "}
            <span>Nights:</span> {stayDuration.nightsThirdPlace}
          </div>
          <div>
            <strong>Ziaraat :</strong> {transportation.choice}{" "}
            <span>| Makkah:</span> {transportation.zayaratMakkah}{" "}
            <span>| Madina:</span> {transportation.zayaratMadina}
          </div>
        </div>
      </section>

      <section className="final-confirmation">
        <h3>Online Support</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formDetails.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Your City</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formDetails.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments (Optional)</label>
            <textarea
              id="comments"
              name="comments"
              value={formDetails.comments}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default FinalConfirmation;
