import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Homepage from './Pages/Homepage';
import Experiences from './Pages/Experiences';
import ContactForm from './Pages/ContactForm';
import ServicesPage from './Pages/ServicesPage';
import HomePageT from './Pages/HomePageT';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePageT />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
