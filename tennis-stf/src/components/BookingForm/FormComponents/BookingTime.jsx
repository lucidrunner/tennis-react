import React, { useState } from "react";
import "./BookingTime.scss";

const BookingTime = (props) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [firstSet, setFirstSet] = useState("");

  const setValue = {
    timeSlot: setSelectedTime,
    timeDate: setSelectedDate,
  };

  const handleChange = (event) => {
    setValue[event.target.name](event.target.value);
    props.handleChange({ name: event.target.name, value: event.target.value });
  };
  
  if (firstSet === "") {
    setFirstSet("set");
    props.handleChange({ name: "timeDate", value: "" });
    props.handleChange({ name: "timeSlot", value: "" });
  }

  //Set up our minimum / maximum booking dates
  const currentDate = new Date();
  const formatDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate().toString().padStart(2, "0");
  const maxYear = currentDate.getFullYear() + 1;
  const formatMaxDate =
    maxYear +
    "-" +
    (currentDate.getMonth() + 5) +
    "-" +
    currentDate.getDate().toString().padStart(2, "0");

  return (
    <fieldset name="time" className="booking-time">
      <h3>Tid</h3>
      <div id="time-container">
        <label htmlFor="time-date">
          Datum
          <input
            type="date"
            min={formatDate}
            max={formatMaxDate}
            id="time-date"
            name="timeDate"
            value={selectedDate}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="time-slot">
          Tidslag
          <select
            id="time-slot"
            value={selectedTime}
            onChange={handleChange}
            name="timeSlot"
            required
          >
            <option value="">(select one)</option>
            <option value="8 - 10">8 - 10</option>
            <option value="10 - 12">10 - 12</option>
            <option value="12 - 14">12 - 14</option>
            <option value="14 - 16">14 - 16</option>
            <option value="16 - 18">16 - 18</option>
            <option value="18 - 20">18 - 20</option>
            <option value="8 - 13">Förmiddag (8-13)</option>
            <option value="13 - 20">Eftermiddag (13-20)</option>
          </select>
        </label>
      </div>
    </fieldset>
  );
};

export default BookingTime;
