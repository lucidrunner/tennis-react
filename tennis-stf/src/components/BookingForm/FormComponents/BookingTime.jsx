import React from "react";
import "./BookingTime.scss";

const BookingTime = () => {

    return(
        <fieldset name="time" className="booking-time">
            <h3>Tid</h3>
            <div id="time-container">
              <label htmlFor="time-date">
                  Datum
                  <input type="date" id="time-date" name="time-date" required />
              </label>
              <label htmlFor="time-slot">
                Tidslag
                <select id="time-slot" name="time-slot" required>
                  <option value="">(select one)</option>
                  <option value="1">8 - 10</option>
                  <option value="2">10 - 12</option>
                  <option value="3">12 - 14</option>
                  <option value="4">14 - 16</option>
                  <option value="5">16 - 18</option>
                  <option value="6">18 - 20</option>
                  <option value="7">Förmiddag (8-13)</option>
                  <option value="8">Eftermiddag (13-20)</option>
                </select>
              </label>
            </div>
        </fieldset>
    )

} 

export default BookingTime;