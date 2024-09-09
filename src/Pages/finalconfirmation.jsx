import React from 'react';

const FinalConfirmation = ({ formData, handleSubmit }) => {
    const { departureDate, flyFrom, packageType, passengers, stayDuration, transportation } = formData;
  
    return (
      <><section className="fina-confirmation">
            <h3>Your Package</h3>
            <div className="package-details">
                <div>
                    <strong>Departure Date:</strong> {departureDate}
                </div>
                <div>
                    <strong>Fly From:</strong> {flyFrom}
                </div>
                <div>
                    <strong>Package Type:</strong> {packageType}
                </div>
                <div>
                    <strong>Passengers:</strong> {passengers}
                </div>
                <div>
                    <strong>First Entry In:</strong> {stayDuration.firstEntry} - <text>Nights:</text> {stayDuration.nightsFirstEntry}
                </div>
                <div>
                    <strong>Second Entry In:</strong> {stayDuration.secondEntry} - <text>Nights:</text> {stayDuration.nightsSecondEntry}
                </div>
                <div>
                    <strong>Third Entry In:</strong> {stayDuration.thirdEntry} - <text>Nights:</text> {stayDuration.nightsThirdEntry}
                </div>
                <div>
                    <strong>Ziaraat :</strong>  <text>Makkah :</text>  {transportation.ziaraatMakkah} <text> | </text><text>Madina :</text> {transportation.ziaraatMadina}
                </div>
                
            </div>
        </section>
        <section className="final-confirmation">
                <h3>Online Support</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Your City</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments (Optional)</label>
                        <textarea id="comments" name="comments"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section></>
    );
  };
  

export default FinalConfirmation;
