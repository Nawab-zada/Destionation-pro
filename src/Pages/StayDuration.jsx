import React, { useState, useEffect } from "react";

function StayDuration({ nextStep, prevStep, formData, setFormData }) {
  const [showSecondEntry, setShowSecondEntry] = useState(false);
  const [showThirdEntry, setShowThirdEntry] = useState(false);

  useEffect(() => {
    if (formData.firstEntry) {
      setShowSecondEntry(true);
    } else {
      setShowSecondEntry(false);
      setShowThirdEntry(false);
    }

    if (formData.secondEntry) {
      setShowThirdEntry(true);
    } else {
      setShowThirdEntry(false);
    }
  }, [formData.firstEntry, formData.secondEntry]);

  const handleFirstEntryChange = (e) => {
    setFormData("firstEntry")(e);
  };

  const handleSecondEntryChange = (e) => {
    setFormData("secondEntry")(e);
  };

  const handleThirdEntryChange = (e) => {
    setFormData("thirdEntry")(e);
  };

  const handleNightsChange = (e, entry) => {
    setFormData(entry)(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-entry">First Entry In</label>
          <select
            id="first-entry"
            value={formData.firstEntry}
            onChange={handleFirstEntryChange}
            required
          >
            <option value="">Select</option>
            <option value="Mecca">Mecca</option>
            <option value="Medina">Medina</option>
            <option value="Jeddah">Jeddah</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nights-first-entry">Nights</label>
          <select
            id="nights-first-entry"
            value={formData.nightsFirstEntry || ""}
            onChange={(e) => handleNightsChange(e, "nightsFirstEntry")}
            required
          >
            <option value="">Select</option>
            {[...Array(30).keys()].map((n) => (
              <option key={n} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>

        {showSecondEntry && (
          <>
            <div className="form-group">
              <label htmlFor="second-entry">Second Entry In</label>
              <select
                id="second-entry"
                value={formData.secondEntry}
                onChange={handleSecondEntryChange}
                required
              >
                <option value="">Select</option>
                <option value="Mecca">Mecca</option>
                <option value="Medina">Medina</option>
                <option value="Jeddah">Jeddah</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nights-second-entry">Nights</label>
              <select
                id="nights-second-entry"
                value={formData.nightsSecondEntry || ""}
                onChange={(e) => handleNightsChange(e, "nightsSecondEntry")}
                required
              >
                <option value="">Select</option>
                {[...Array(30).keys()].map((n) => (
                  <option key={n} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {showThirdEntry && (
          <>
            <div className="form-group">
              <label htmlFor="third-entry">Third Entry In</label>
              <select
                id="third-entry"
                value={formData.thirdEntry}
                onChange={handleThirdEntryChange}
                required
              >
                <option value="">Select</option>
                <option value="Mecca">Mecca</option>
                <option value="Medina">Medina</option>
                <option value="Jeddah">Jeddah</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nights-third-entry">Nights</label>
              <select
                id="nights-third-entry"
                value={formData.nightsThirdEntry || ""}
                onChange={(e) => handleNightsChange(e, "nightsThirdEntry")}
                required
              >
                <option value="">Select</option>
                {[...Array(30).keys()].map((n) => (
                  <option key={n} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="form-group">
          <button type="button" onClick={prevStep}>
            Back
          </button>

          <button type="submit">Next</button>
        </div>
      </form>
    </section>
  );
}

export default StayDuration;
