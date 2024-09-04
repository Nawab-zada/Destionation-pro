import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import List from '../Pages/list.json';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const ServicesPage = () => {
  return (
    <div className='main'>
      <div className='bar'>
        <p>Our Services</p>
      </div>
      <div className='image-container'>
        {List.map((item, index) => (
          <div key={index} className='image-item'>
          <img src={item.image} alt={`Service ${index + 1}`} />

            <div className='handing'>
              <Link to='/loginpage'>
                <p>{item.handing}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-[#213639]'>
            <div className='px-10 lg:grid lg:grid-cols-2 flex justify-between flex-wrap'>

                <div className='py-8 text-white flex flex-col gap-5'>
                    <h1 className='font-semibold text-xl'>Follow us Here</h1>
                    <span className='flex gap-3'>
                        <LinkedInIcon sx={{ color: 'white' }} />
                        <WhatsAppIcon sx={{ color: 'white' }} />
                        <InstagramIcon sx={{ color: 'white' }} />
                        <FacebookIcon sx={{ color: 'white' }} />
                    </span>
                    <div className='max-w-[15rem] text-sm leading-5 tracking-widest'>
                        <h1>Address</h1>
                        <p>Office No.10, Block 51 Chaudhry Plaza, Jinnah Avenue, Blue Area Islamabad</p>
                    </div>
                    <section className='tracking-widest'>
                        <p>Phone 051-2274080 / 2274341</p>
                    </section>
                </div>

                <div className='text-white py-8'>
                    <h1 className='font-semibold text-xl pb-5'>Services</h1>
                    <div className='grid grid-cols-2 gap-10 leading-8 tracking-widest text-sm'>
                        <ul>
                            <li>Airline Reservations</li>
                            <li>Ticketing of all the major airlines</li>
                            <li>Worldwide Hotel accommodations</li>
                            <li>Tour Packages & Car rentals</li>
                            <li>Visa Assistance</li>
                            <li>Travel Insurance</li>
                        </ul>
                        <ul>
                            <li>Ticket Deleivery at Door step</li>
                            <li>24 hours answering capability</li>
                            <li>Visa/Master Card Acceptance</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:items-end sm:justify-center font-semibold px-20 text-white'>
                <div className='text-center'>
                    <h1>Drop us a Line</h1>
                    <p>sales@travelairintl.com</p>
                </div>
            </div>
            <div className='text-center text-white font-semibold text-sm py-5'>
                Powered by Structures ltd. @2024
            </div>
        </div>  
    </div>
  );
};

export default ServicesPage;
