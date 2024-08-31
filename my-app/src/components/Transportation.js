import React, { useState } from 'react';

function Transportation({ nextStep, prevStep, formData, setFormData }) {
  const [confirmPopup, setConfirmPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(name)(e); // Directly use the setFormData handler passed from App.js
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmPopup(true);
  };

  const confirm = () => {
    setConfirmPopup(false);
    nextStep();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transport-choice">Transport Choice</label>
          <select
            id="transport-choice"
            name="transportChoice"
            value={formData.transportChoice}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Shared Bus">🚍 Shared Bus (Low Cost)</option>
            <option value="Private Vehicle">🚗 Private Vehicle (High Cost)</option>
            <option value="Semi-Private Bus">🚐 Semi-Private Bus (Medium Cost)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ziaraat-makkah">Ziaraat Tour In Makkah</label>
          <select
            id="ziaraat-makkah"
            name="ziaraatMakkah"
            value={formData.ziaraatMakkah}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="No Tour">No Tour</option>
            <option value="Basic Tour">Basic Tour</option>
            <option value="Comprehensive Tour">Comprehensive Tour</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ziaraat-madina">Ziaraat Tour In Madina</label>
          <select
            id="ziaraat-madina"
            name="ziaraatMadina"
            value={formData.ziaraatMadina}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="No Tour">No Tour</option>
            <option value="Basic Tour">Basic Tour</option>
            <option value="Comprehensive Tour">Comprehensive Tour</option>
          </select>
        </div>

        <div className="form-group">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>

      {confirmPopup && (
  <div className="popup-overlay">
    <div className="confirm-popup">
      <p>Are you sure to confirm?</p>
      <button onClick={confirm}>Yes</button>
      <button onClick={() => setConfirmPopup(false)}>Cancel</button>
    </div>
  </div>
)}

    </section>
  );
}

export default Transportation;
