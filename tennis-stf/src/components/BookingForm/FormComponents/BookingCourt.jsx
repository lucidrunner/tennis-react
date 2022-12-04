import React from "react";
import "./BookingCourt.scss";

const BookingCourt = () => {
  return (
    <fieldset name="court" className="booking-court">
      <h3>Bana</h3>
      <div id="court-container">
        <label htmlFor="court-1">
          1 (Gräs)
          <input
            type="radio"
            id="court-1"
            name="court-select"
            defaultChecked
            className="inline"
          />
        </label>
        <label htmlFor="court-2">
          2 (Gräs)
          <input type="radio" id="court-2" name="court-select" className="inline" />
        </label>
        <label htmlFor="court-3">
          3 (Lera)
          <input type="radio" id="court-3" name="court-select" className="inline" />
        </label>
        <label htmlFor="court-4">
          4 (Inomhus)
          <input type="radio" id="court-4" name="court-select" className="inline" />
        </label>
      </div>
    </fieldset>
  );
};

export default BookingCourt;
