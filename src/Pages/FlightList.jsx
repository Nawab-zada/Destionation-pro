import React from 'react';
import './Flights.css';


const FlightSearchResults = ({ flights }) => {
  return (
    <div className="flight-search-container">
      {flights.map((flight, index) => (
        <div key={index} className="flight-card">
          <h3>Trip Type: {flight.tripType}</h3>

          {/* Flight Segments */}
          <div className="flight-segments">
            {flight.flights.map((segment, i) => (
              <div key={i} className="flight-segment">
                <p>
                  <strong>From:</strong> {segment.from}
                </p>
                <p>
                  <strong>To:</strong> {segment.to}
                </p>
                <p>
                  <strong>Departure Date:</strong> {new Date(segment.departureDate).toLocaleDateString()}
                </p>
                {segment.returnDate && (
                  <p>
                    <strong>Return Date:</strong> {new Date(segment.returnDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Travelers Info */}
          <div className="travelers-info">
            <p>
              <strong>Adults:</strong> {flight.travelers.adults}
            </p>
            <p>
              <strong>Children:</strong> {flight.travelers.children}
            </p>
            <p>
              <strong>Infants:</strong> {flight.travelers.infants}
            </p>
          </div>

          {/* Cabin Class */}
          <p>
            <strong>Cabin Class:</strong> {flight.cabinClass}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlightSearchResults;
