import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Experiences from './Pages/Experiences';

import ServicesPage from './Pages/ServicesPage';
import HomePageT from './Pages/HomePageT';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import Navbar from './Pages/Navbar';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
         <Navbar/>
      <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/" element={<HomePageT />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePageT />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/experiences" element={<Experiences />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
