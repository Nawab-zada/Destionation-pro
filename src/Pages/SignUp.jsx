import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(true); // Ensure modal is visible initially

  const validateForm = () => {
    // Basic validation checks for required fields
    if (!firstName || !lastName || !email || !password) {
      alert(
        "Please fill out all required fields (First name, Last name, Email, and Password)."
      );
      return false;
    }
    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      // Collect the form data into an object
      const formData = {
        firstName,
        lastName,
        organizationName,
        countryCode,
        currency,
        email,
        password,
      };

      try {
        // Send a POST request to the API
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json", // Set content type to JSON
            },
          }
        );

        // Log the response from the server

        // Show success message
        if (response.status >= 200 && response.status < 300) {
          alert("Registration successful!");
          console.log("API Response:", response.data);

          // Reset form fields after successful registration
          setFirstName("");
          setLastName("");
          setCurrency("");
          setCountryCode("");
          setOrganizationName("");
          setEmail("");
          setPassword("");
        } else {
          console.error("Unexpected response status:", response.status);
          alert("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        // Handle any errors
        console.error(
          "Error during sign-up:",
          error.response ? error.response.data : error.message
        );
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="sign-up-modal">
            <span className="close-modal" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="sign-up-page">
              <div className="heading">
                <p>Destination Travel & Tours</p>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Country Code (Optional)"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Currency (Optional)"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="para">
                <p>
                  Already have an Account? Just{" "}
                  <span>
                    <a href=".">Login</a>
                  </span>
                </p>
              </div>
              <div className="sign-up-button">
                <button onClick={handleSignUp}>Create Account</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
