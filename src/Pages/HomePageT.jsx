import React, { useRef, useState } from "react"; 
import "./HomePageT.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import image1 from "../assets/TRAVAL_IMAGE2.jpeg";
import image2 from "../assets/TRAVAL_IMAGE4.jpg";
import image3 from "../assets/TRAVAL_IMAGE3.jpg";
import image4 from "../assets/TRAVAL_IMAGE1.jpg";
import whatsapp from '../assets/whatsapp-img.jpeg'; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  const [flightData, setFlightData] = useState({
    from: '',
    to: '',
    depart: '',
    return: '',
    cabin: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value
    });
  };

  const form = useRef();

  const images = [
    image1, image2, image3, image4,
    image1, image2, image3, image4,
    image1, image2, image3, image4,
    image1, image2, image3, image4,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id", 
        form.current,
        "your_public_key"  
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="main-div">
        <div className="NavbarSection">
          <div className="handingSection">
            <p>Destination <br />Travel & Tours</p>
          </div>
          <div className="buttonSection">
           <Link to="/"> <button>Login</button></Link>
          <Link to="/signup"><button>Create account</button></Link>
          </div>
        </div>
        <div className="manu-button">
        <Link to="/home"><button >Home</button></Link>
        <Link ><button>Airline</button></Link>
         <Link to=""><button>About Us</button></Link>
         <Link to="/services" ><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
        </div>
        <p className="paragraph">
          Delivering World-Class Travel Experiences Since 1973.
        </p>
        <form className="Fly-form" ref={form} onSubmit={handleSubmit}>
          <div className="formSection">
            <label htmlFor="from">From</label>
            <select onChange={handlechange} value={flightData.from} name="from">
              <option value="">Country, City, Airport</option>
              <option value="new_york">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="to">To</label>
            <select onChange={handlechange} value={flightData.to} name="to">
              <option value="">Country, City, Airport</option>
              <option value="new_york">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="departure">Departure</label>
            <input
              onChange={handlechange} value={flightData.depart}
              type="date"
              name="departure"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="return">Return</label>
            <input
              onChange={handlechange} value={flightData.return}
              type="date"
              name="return"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="travelers">Travelers & Cabin Class</label>
            <select onChange={handlechange} value={flightData.cabin} name="cabin">
              <option value="">1 Adult, Economy</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <button type="submit">Send Query</button>
        </form>
        <div className="firstSection-checkBox">
          <input type="checkbox" />
          <p>Show direct flight only.</p>
          <input type="checkbox" />
          <p>Add Nearby Airports</p>
        </div>
        <div className="secondSection-checkBox">
          <input type="checkbox" />
          <p>Show direct flight only.</p>
        </div>
      </div>
      <div className="whatsapp-button">
        <a
          href="https://wa.me/923456301298"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <div className="ExperienceSection">
        <div className="experienceTag">Experience</div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Travel ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
