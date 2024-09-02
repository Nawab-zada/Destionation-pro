import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import List from '../Pages/list.json';

const ServicesPage = () => {
  return (
    <div className='main'>
      <div className='bar'>
        <p>Our Services</p>
      </div>
      <div className='image-container'>
        {List.map((item, index) => (
          <div key={index} className='image-item'>
            <img src={require(`${item.image}`)} alt={`Service ${index + 1}`} />
            <div className='handing'>
              <Link to='/loginpage'>
                <p>{item.handing}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='down-hader'>
      </div>   
    </div>
  );
};

export default ServicesPage;