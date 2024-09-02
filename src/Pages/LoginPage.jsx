import React, { useState } from 'react';
import './LoginPage.css';
import login from '../assets/Login-image.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can handle the login logic, such as sending the data to an API.
    console.log('Username:', username);
    console.log('Password:', password);
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='login-button2'>
          <button onClick={handleLogin}>Login</button>
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
