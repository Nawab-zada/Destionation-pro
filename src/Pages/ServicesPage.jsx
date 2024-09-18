// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ServicesPage.css';
// import List from '../Pages/list.json';

// const ServicesPage = () => {
//   return (
//     <div className='main'>
//       <div className='bar'>
//         <h1 className="page-heading">Our Services</h1>
//       </div>
//       <div className='image-container'>
//         {List.map((item, index) => (
//           <div key={index} className='image-item'>
//             <img src={item.image} alt={`Service ${index + 1}`} />
//             <div className='handing'>
//               <Link to='/loginpage'>
//                 <p>{item.handing}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import List from '../Pages/list.json';

// Import images
import Ticketing from '../assets/Ticketingforallmajorairline.jpeg';
import AirlineReservation from '../assets/Airline Resersation.jpeg';
import HotelReservation from '../assets/Hotal Reservation.jpeg';
import TourismCarRentals from '../assets/Tourism and Car Rentals.jpeg';
import VisaAssistance from '../assets/Visa assistance.jpeg';
import TravelInsurance from '../assets/Travel insurance.jpeg';
import TicketDelivery from '../assets/Ticket delivery.jpeg';
import TwentyFourHours from '../assets/24_hoursservices.jpeg';
import VisaCard from '../assets/VIsa card.jpeg';

// Create a mapping of handlings to images
const imageMap = {
  "Ticketing for all major Airline": Ticketing,
  "Airline Reservation": AirlineReservation,
  "Hotel Reservation": HotelReservation,
  "Tourism and Car Rentals": TourismCarRentals,
  "Visa Assistance": VisaAssistance,
  "Travel Insurance": TravelInsurance,
  "Ticket Delivery at Doorstep": TicketDelivery,
  "24 Hours Services": TwentyFourHours,
  "Visa Card": VisaCard
};

const ServicesPage = () => {
  return (
    <div className='main'>
      <div className='bar'>
        <h1 className="page-heading">Our Services</h1>
      </div>
      <div className='image-container'>
        {List.map((item, index) => (
          <div key={index} className='image-item'>
            <img src={imageMap[item.handing]} alt={`Service ${index + 1}`} />
            <div className='handing'>
              <Link to='/loginpage'>
                <p>{item.handing}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
