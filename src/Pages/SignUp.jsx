import './SignUp.css';
import React, { useState } from 'react';
import login from '../assets/Login-image.png';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [currency, setCurrency] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle the signup logic, such as sending the data to an API.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Organization Name:', organizationName);
    console.log('Country Code:', countryCode);
    console.log('Currency:', currency);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='container-div'>
      <div className='login-page'>
        <div className='heading'>
          <p>Destination Travel & Tours</p>
        </div>
        <div className='double-input'>
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
        </div>
        <div className='input'>
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
        <div className='paragraph'>
          <p>Already have an Account? Just <span><a href=".">Login</a></span></p>
        </div>
        <div className='login-button'>
          <button onClick={handleSignUp}>Create account</button>
        </div>
      </div>
      <div className='bg-color'>
        <img src={login} alt="Login" />
      </div>
    </div>
  );
}

export default SignUp;
