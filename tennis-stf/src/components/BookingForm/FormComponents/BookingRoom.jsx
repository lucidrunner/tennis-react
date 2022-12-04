import React from "react";
import "./BookingRoom.scss";

const BookingRoom = () => {

    return(
        <fieldset name="room" className="booking-room">
            <h3>Rum</h3>
            <div id="radio-container">
            <label htmlFor="herr">
                  Herr
                  <input
                    type="radio"
                    id="herr"
                    name="herr-dam"
                    defaultChecked
                  />
                </label>
                <label htmlFor="dam">
                  Dam
                  <input
                    type="radio"
                    id="dam"
                    name="herr-dam"
                  />
                </label>
            </div>
        </fieldset>
    )

} 

export default BookingRoom;