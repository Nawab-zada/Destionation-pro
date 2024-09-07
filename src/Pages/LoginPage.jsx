import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';
import login from '../assets/Login-image.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleLogin();
  };

  const handleLogin = () => {
    // Handle the login logic here, such as sending the data to an API.
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Example validation check
    if (username === 'validUser' && password === 'validPass') { // Replace with your actual validation
      navigate('/home'); // Redirect to the homepage
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className='container-div'>
      <div className='login-page'>
        <div className='heading'>
          <p>Destination Travel & Tours</p>
        </div>
        <div className='input-login'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='login-button2'>
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className='paragraph'>
          <p>Don’t have an Account? No worries <span><a href=".">Create Account</a></span></p>
        </div>
      </div>
      <div className='bg-color'>
        <img src={login} alt="Login" />
      </div>
    </div>
  );
}

export default LoginPage;
