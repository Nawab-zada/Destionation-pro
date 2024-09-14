import React, { useEffect, useState } from 'react';
import FlightList from './FlightList';
import axios from "axios";

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
    <div>
      <h1>Flight Search Results</h1>
      <FlightList flights={flights} />
    </div>
  );
};

export default FlightSearchPage;
