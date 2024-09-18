import React, { useEffect, useState } from 'react';
import FlightList from './FlightList';
import axios from "axios";
import './Flights.css';
const FlightSearchPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlightSearches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/flights/getFlights');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flight searches:', error);
      }
    };

    fetchFlightSearches();
  }, []);

  return (
    <div className="flight-search-page">
    <h1 className="page-heading">Airline Packages Available</h1>
    <p className="sub-heading">Contact us for exclusive deals and personalized travel plans!</p>
      <FlightList flights={flights} />
    </div>
  );
};

export default FlightSearchPage;
