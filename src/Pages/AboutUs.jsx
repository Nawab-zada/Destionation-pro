// import React from 'react';
// import './AboutUs.css';
// import footaboutus from '../assets/aboutusfoot.jpg';

// const TravelAboutPage = () => {
//   return (
//     <div className="about-page">
//       <header className="header-section">
//         <section className="hero-section">
//           <div className="hero-text">
//             <h1>Wherever You Want To Go, We'll Help You Get There</h1>
//             <p>All great journeys begin with a dream...</p>
//             <p>Welcome to Charm & Awe Travel Co. My name is Amy Goldman, and I would love to be your travel advisor.</p>
//             <button className="plan-button">Plan Your Trip</button>
//           </div>
//           <div className="hero-images">
//             <img
//               src="https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-trees-7VnWYbT6JPk"
//               alt="Scenic View"
//             />
//             <img
//               src="https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-trees-7VnWYbT6JPk"
//               alt="Happy Travelers"
//             />
//             <img
//               src="https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-trees-7VnWYbT6JPk"
//               alt="Nature View"
//             />
//           </div>
//         </section>
//       </header>

//       <section className="about-section" id="about">
//         <h2>About Us</h2>
//         <div className="about-container">
//           <img src={footaboutus} alt="Mountain View" className="about-image" />
//           <div className="about-overlay">
//             <p className="quote">"Life is short and the world is wide..."</p>
//             <p className="about-text">
//               Welcome to Charm & Awe Travel Co. My name is Amy Goldman and I have had a love for travel since studying abroad in college. 
//               During that time, I traveled to many areas in Europe and I fell in love with the planning, researching, and organizing of travel. 
//               I love nothing more than helping others book their dream trips and seeing the world. 
//             </p>
//             <a href="#read-more" className="read-more">Read More</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TravelAboutPage;
import React from 'react';
import './AboutUs.css';
import aboutusimage from '../assets/aboutus.png';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1 className="page-heading">About Us</h1>
            <p>Discover Your Next Adventure with Us</p>
          </div>
          <div className="content">
            <h2>Who We Are</h2>
            <p>
              Welcome to Destinations Travel and Tours! Based in Pakistan, we offer tailored travel experiences, including custom Umrah packages, hotel bookings, and flight queries. Whether you're planning a spiritual journey or a leisure trip, our expert team is here to assist you every step of the way.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to make your travel experience smooth and memorable. We provide personalized Umrah packages, help with hotel reservations, and manage flight queries to ensure your journey is seamless.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>Custom Umrah packages</li>
              <li>Hotel booking assistance</li>
              <li>Flight query support</li>
              <li>24/7 customer service</li>
            </ul>
          </div>
        
        </div>
        <div className="image-section">
          <img src={aboutusimage} alt="Travel" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



// import React from 'react';
// import './AboutUs.css';
// const AboutSection = () => {
//   return (
//     <section className="about-section">
//       <div className="container">
//         <div className="row">
//           <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
//             <div className="inner-column">
//               <div className="sec-title">
//                 <span className="title">About Css3transition</span>
//                 <h2>We are Creative Tech Enthusiast working since 2015</h2>
//               </div>
//               <div className="text">
//                 I am Rahul Yaduvanshi, working at Css3 Transition for the past 3 years. We provide top-notch solutions for your website or web application that help make your website look attractive and efficient by creating useful plugins.
//               </div>
//               <div className="text">
//                 We serve next-level tutorials to match your expertise. Css3 Transition is a learning website where you can find quality content related to web development, tutorials, HTML, CSS, JavaScript, and more.
//               </div>
//               <div className="btn-box">
//                 <a href="#" className="theme-btn btn-style-one">Contact Us</a>
//               </div>
//             </div>
//           </div>

//           {/* Image Column */}
//           <div className="image-column col-lg-6 col-md-12 col-sm-12">
//             <div className="inner-column wow fadeInLeft">
//               <div className="author-desc">
//                 <h2>Rahul Kumar Yadav</h2>
//                 <span>Web Developer</span>
//               </div>
//               <figure className="image-1">
//                 <a href="#" className="lightbox-image" data-fancybox="images">
//                   <img
//                     title="Rahul Kumar Yadav"
//                     src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
//                     alt="Rahul Kumar Yadav"
//                   />
//                 </a>
//               </figure>
//             </div>
//           </div>
//         </div>

//         <div className="sec-title">
//           <span className="title">Our Future Goal</span>
//           <h2>We want to lead in innovation & Technology</h2>
//         </div>
//         <div className="text">
//           We work on UI/UX and functionality to create well-structured, visually stunning plugins that fit your web app or website.
//         </div>
//         <div className="text">
//           We take small toolkits and optimize them for performance and aesthetics.
//         </div>
//         <div className="text">
//           We provide all kinds of technical content related to design and functionality. The content is free to use and accessible without hassle.
//         </div>
//         <div className="text">
//           You can also share content you've created, and if our team likes it, we will feature it on our blog.
//         </div>
//         <div className="text">
//           Keep visiting our website for quality content.
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
