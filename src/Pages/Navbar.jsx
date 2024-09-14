// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageT.css'; // Create this CSS file for styles

const Navbar = () => {
  return (
    <div  >
    <div className="NavbarSection">
          <div className="handingSection">
            <p>Destination Travel & Tours</p>
          </div>
          <div className="buttonSection">
           <Link to="/Login"> <button>Login</button></Link>
          <Link to="/signup"><button>Register</button></Link>
          </div>
        </div>
        <div className="manu-button">
        <Link to="/home"><button >Home</button></Link>
        <Link to="/flights"><button>Airline</button></Link>
         <Link to="/aboutus"><button>About Us</button></Link>
         <Link to="/services" ><button>Services</button></Link>
         <Link to="/umrah" ><button>Umrah </button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
        </div>
    </div>
  );
};

export default Navbar;
