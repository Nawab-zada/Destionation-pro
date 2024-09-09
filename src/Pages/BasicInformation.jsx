import React from 'react';

function BasicInformation({ nextStep, handleChange, formData }) {
  return (
    <section>
      <form onSubmit={nextStep}>
        <div className="form-group">
          <label htmlFor="departure-date">Departure Date</label>
          <input
            type="date"
            id="departure-date"
            required
            value={formData.departureDate}
            onChange={handleChange('departureDate')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fly-from">Fly From</label>
          <select
            id="fly-from"
            value={formData.flyFrom}
            onChange={handleChange('flyFrom')}
          >
            <option value="">Select your city</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="package-type">Package Type</label>
          <select
            id="package-type"
            value={formData.packageType}
            onChange={handleChange('packageType')}
          >
            <option value="">Select package type</option>
            <option value="Economy">Economy</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <input
            type="number"
            id="passengers"
            placeholder="Enter number of passengers"
            required
            value={formData.passengers}
            onChange={handleChange('passengers')}
          />
        </div>
        <div className="form-group">
          <button type="submit">Next</button>
        </div>
      </form>
    </section>
  );
}

export default BasicInformation;
