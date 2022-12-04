import React from "react";
import "./BookingExtraInfo.scss";

const BookingExtraInfo = () => {

    return(
        <fieldset name="time" className="booking-extra">
            <label htmlFor="add-info" className="large-label">
              Ytterligare Information
              <textarea
                id="add-info"
                name="add-info"
                rows="5"
                placeholder="t.ex. sällskapsstorlek för större grupper, om racket behöver lånas eller andra särskilda omständigheter"
              ></textarea>
            </label>
        </fieldset>
    )

} 

export default BookingExtraInfo;