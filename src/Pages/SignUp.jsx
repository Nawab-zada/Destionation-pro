
import './SignUp.css';
import React, { useState } from 'react';


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [currency, setCurrency] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(true); // Ensure modal is visible initially

  const validateForm = () => {
    // Basic validation checks for required fields
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill out all required fields (First name, Last name, Email, and Password).');
      return false;
    }
    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      // If validation passes, log the data in the console
      console.log('Sign-up form submitted with the following details:');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Organization Name:', organizationName);
      console.log('Country Code:', countryCode);
      console.log('Currency:', currency);
      console.log('Email:', email);
      console.log('Password:', password);

      // Create the alert to show entered data
      alert(
        `First Name: ${firstName}\nLast Name: ${lastName}\nOrganization Name: ${organizationName}\nCountry Code: ${countryCode}\nCurrency: ${currency}\nEmail: ${email}\nPassword: ${password}`
      );

      // Optionally, you can send the data to an API here
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal
  };

  return (
    <>
      {showModal && (
        <div className='modal-overlay'>
          <div className='sign-up-modal'>
            <span className='close-modal' onClick={handleCloseModal}>&times;</span>
            <div className='sign-up-page'>
              <div className='heading'>
                <p>Destination Travel & Tours</p>
              </div>
              <div className='input'>
                <input
                  type="text"
                  placeholder='First name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Last name'
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
              <div className='para'>
                <p>Already have an Account? Just <span><a href=".">Login</a></span></p>
              </div>
              <div className='sign-up-button'>
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




