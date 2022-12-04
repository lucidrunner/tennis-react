import React from "react";
import "./BookingPersonalInfo.scss";

const BookingPersonalInfo = () => {

    return(
        <fieldset name="time" className="booking-personal">
            <h3>Personlig Information</h3>
            <div id="personal-container">
              <label htmlFor="booker-name">
                Namn
                <input id="booker-name" name="booker-name" type="text" required />
              </label>
              <label htmlFor="email">
                Email
                <input id="email" name="email" type="email" required />
              </label>
              <label htmlFor="phone-number">
                Telefonnummer
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  required
                />
              </label>
            </div>
        </fieldset>
    )

} 

export default BookingPersonalInfo;