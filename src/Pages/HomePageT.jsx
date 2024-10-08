// import React, { useRef, useState } from "react"; 

// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";
// import image1 from "../assets/TRAVAL_IMAGE2.jpeg";
// import image2 from "../assets/TRAVAL_IMAGE4.jpg";
// import image3 from "../assets/TRAVAL_IMAGE3.jpg";
// import image4 from "../assets/TRAVAL_IMAGE1.jpg";
// import whatsapp from '../assets/whatsapp-img.jpeg'; 
// import axios from "axios";
// import "./HomePageT.css";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// const HomePage = () => {
//   const [flightData, setFlightData] = useState({
//     fromLoca: '',
//     toLoca: '',
//     depart: '',
//     return: '',
//     cabin: '',
//   });



//   const form = useRef();

//   const images = [
//     image1, image2, image3, image4,
//     image1, image2, image3, image4,
//     image1, image2, image3, image4,
//     image1, image2, image3, image4,
//   ];

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setFlightData({
//       ...flightData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         // Sending data to the backend
//         const response = await axios.post('http://localhost:5000/api/send-query', {
//             fromLoca: flightData.fromLoca, // sending data matching the backend structure
//             toLoca: flightData.toLoca,
//             departure: flightData.departure,
//             return: flightData.return,  // Ensure 'return' is not a reserved word in your backend
//             cabin: flightData.cabin,
//             contact: flightData.contact
//         });
//         alert("Flight query sent successfully!");
//     } catch (error) {
//         console.error("There was an error sending the flight query!", error);
//         alert("Error sending query, please try again later.");
//     }
// };


//   return (
//     <>
  

//       <div className="main-div">
       
//         <p className="paragraph">
//           Delivering World-Class Travel Experiences Since 1973.
//         </p>
//         <form className="Fly-form" onSubmit={handleSubmit}>
//           <div className="formSection">
//             <label htmlFor="from">From</label>
//             <select onChange={handlechange} value={flightData.fromLoca} name="fromLoca">
//               <option value="">Country, City, Airport</option>
//               <option value="new_york">New York</option>
//               <option value="london">London</option>
//               <option value="paris">Paris</option>
//               <option value="tokyo">Tokyo</option>
//             </select>
//           </div>
//           <div className="formSection">
//             <label htmlFor="to">To</label>
//             <select onChange={handlechange} value={flightData.toLoca} name="toLoca">
//               <option value="">Country, City, Airport</option>
//               <option value="new_york">New York</option>
//               <option value="london">London</option>
//               <option value="paris">Paris</option>
//               <option value="tokyo">Tokyo</option>
//             </select>
//           </div>
//           <div className="formSection">
//             <label htmlFor="departure">Departure</label>
//             <input
//               onChange={handlechange} value={flightData.departure}
//               type="date"
//               name="departure"
//               placeholder="ADD date"
//             />
//           </div>
//           <div className="formSection">
//             <label htmlFor="return">Return</label>
//             <input
//               onChange={handlechange} value={flightData.return}
//               type="date"
//               name="return"
//               placeholder="ADD date"
//             />
//           </div>
//           <div className="formSection">
//             <label htmlFor="cabin">Travelers & Cabin Class</label>
//             <select onChange={handlechange} value={flightData.cabin} name="cabin">
//               <option value="">1 Adult, Economy</option>
//               <option value="economy">Economy</option>
//               <option value="business">Business</option>
//               <option value="first">First</option>
//               <option value="standard">Standard</option>
//             </select>
//           </div>
          
//           {/* New Contact Info Field */}
//           <div className="formSection">
//             <label htmlFor="contact">Contact (Email/Phone)</label>
//             <input
//               onChange={handlechange} value={flightData.contact}
//               type="text"
//               name="contact"
//               placeholder="Your Email or Phone Number"
//               required
//             />
//           </div>

//           <button type="submit">Send Query</button>
//         </form>
//         <div className="firstSection-checkBox">
//           <input type="checkbox" />
//           <p>Show direct flight only.</p>
//           <input type="checkbox" />
//           <p>Add Nearby Airports</p>
//         </div>
        
//       </div>
     

     
//       <div className="whatsapp-button">
//         <a
//           href="https://wa.me/923456301298"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={whatsapp} alt="WhatsApp" />
//         </a>
//       </div>

//       <div className="ExperienceSection">
//         <div className="experienceTag">Experience</div>
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={30}
//           slidesPerGroup={4}
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img src={image} alt={`Travel ${index + 1}`} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default HomePage;
import React, { useRef, useState } from "react"; 

import image1 from "../assets/experience1.png";
import image2 from "../assets/experience2.png";
import image3 from "../assets/experience3.png";
import image4 from "../assets/experience4.png";
import whatsapp from '../assets/whatsapp-img.jpeg'; 
import axios from "axios";
import "./HomePageT.css";
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
    fromLoca: '',
    toLoca: '',
    depart: '',
    return: '',
    cabin: '',
    contact: '',
  });

  const form = useRef();

  const images = [
    image1, image2, image3, image4,
    image1, image2, image3, image4,
    image1, image2, image3, image4,
    image1, image2, image3, image4,
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Sending data to the backend
        const response = await axios.post('http://localhost:5000/api/send-query', {
            fromLoca: flightData.fromLoca,
            toLoca: flightData.toLoca,
            departure: flightData.departure,
            return: flightData.return,
            cabin: flightData.cabin,
            contact: flightData.contact
        });
        alert("Flight query sent successfully!");
    } catch (error) {
        console.error("There was an error sending the flight query!", error);
        alert("Error sending query, please try again later.");
    }
  };

  return (
    <div className="wrapper">
      <div className="main-div">
        <p className="paragraph">
          Delivering World-Class Travel Experiences Since 1973.
        </p>
        <form className="Fly-form" onSubmit={handleSubmit}>
          <div className="formSection">
            <label htmlFor="from">From</label>
            <select onChange={handleChange} value={flightData.fromLoca} name="fromLoca">
              <option value="">Country, City, Airport</option>
              <option value="gilgit">Gilgit Airport</option>
            <option value="islamabad">Islamabad Airport</option>
            <option value="karachi">Karachi Airport</option>
            <option value="lahore">Lahore Airport</option>
            <option value="faisalabad">Faisalabad Airport</option>
            <option value="multan">Multan Airport</option>
            <option value="peshawar">Peshawar Airport</option>
            <option value="sialkot">Sialkot Airport</option>
            <option value="quetta">Quetta Airport</option>
            <option value="bahawalpur">Bahawalpur Airport</option>
            <option value="chitral">Chitral Airport</option>
            <option value="dalbandin">Dalbandin Airport</option>
            <option value="dera-ghazi-khan">Dera Ghazi Khan Airport</option>
            <option value="dera-ismail-khan">Dera Ismail Khan Airport</option>
            <option value="gwadar">Gwādar Airport</option>
            <option value="hyderabad">Hyderabad Airport</option>
            <option value="kadanwari">Kadanwari Airport</option>
            <option value="skardu">Skardu Airport</option>
            <option value="mohenjodaro">Mohenjodaro Airport</option>
            <option value="panjgur">Panjgur Airport</option>
            <option value="zhob">Zhob Airport</option>
            <option value="rahim-yar-khan">Rahim Yar Khan Airport</option>
            <option value="sawan">Sawan Airport</option>
            <option value="sukkur">Sukkur Airport</option>
            <option value="turbat">Turbat Airport</option>
            <option value="nawabshah">Nawabshah Airport</option>
            <option value="dadu">Dadu Airport</option>
            <option value="saidu-sharif">Saidu Sharif Airport</option>
            <option value="kalat">Kalat Airport</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="to">To</label>
            <select onChange={handleChange} value={flightData.toLoca} name="toLoca">
              <option value="">Country, City, Airport</option>
              <option value="gilgit">Gilgit Airport</option>
            <option value="islamabad">Islamabad Airport</option>
            <option value="karachi">Karachi Airport</option>
            <option value="lahore">Lahore Airport</option>
            <option value="faisalabad">Faisalabad Airport</option>
            <option value="multan">Multan Airport</option>
            <option value="peshawar">Peshawar Airport</option>
            <option value="sialkot">Sialkot Airport</option>
            <option value="quetta">Quetta Airport</option>
            <option value="bahawalpur">Bahawalpur Airport</option>
            <option value="chitral">Chitral Airport</option>
            <option value="dalbandin">Dalbandin Airport</option>
            <option value="dera-ghazi-khan">Dera Ghazi Khan Airport</option>
            <option value="dera-ismail-khan">Dera Ismail Khan Airport</option>
            <option value="gwadar">Gwādar Airport</option>
            <option value="hyderabad">Hyderabad Airport</option>
            <option value="kadanwari">Kadanwari Airport</option>
            <option value="skardu">Skardu Airport</option>
            <option value="mohenjodaro">Mohenjodaro Airport</option>
            <option value="panjgur">Panjgur Airport</option>
            <option value="zhob">Zhob Airport</option>
            <option value="rahim-yar-khan">Rahim Yar Khan Airport</option>
            <option value="sawan">Sawan Airport</option>
            <option value="sukkur">Sukkur Airport</option>
            <option value="turbat">Turbat Airport</option>
            <option value="nawabshah">Nawabshah Airport</option>
            <option value="dadu">Dadu Airport</option>
            <option value="saidu-sharif">Saidu Sharif Airport</option>
            <option value="kalat">Kalat Airport</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="departure">Departure</label>
            <input
              onChange={handleChange} value={flightData.departure}
              type="date"
              name="departure"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="return">Return</label>
            <input
              onChange={handleChange} value={flightData.return}
              type="date"
              name="return"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="cabin">Travelers & Cabin Class</label>
            <select onChange={handleChange} value={flightData.cabin} name="cabin">
              <option value="">1 Adult, Economy</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="contact">Contact (Email/Phone)</label>
            <input
              onChange={handleChange} value={flightData.contact}
              type="text"
              name="contact"
              placeholder="Your Email or Phone Number"
              required
            />
          </div>
          <button type="submit">Send Query</button>
        </form>
       
      </div>


      <div className="ExperienceSection">
        <div className="experienceTag">Experiences</div>
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
    </div>
  );
};

export default HomePage;
