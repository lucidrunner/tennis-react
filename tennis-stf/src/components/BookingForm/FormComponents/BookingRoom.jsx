import React, { useState } from "react";
import { useEffect } from "react";
import "./BookingRoom.scss";

const BookingRoom = (props) => {
  //Same state pattern as the others, define our internal and pass it
  //to the parent
  //Slightly ugly solution but - if we have a default value set to dam we use that, otherwise herr
  //Using it as a catch all if we somehow send null or undefined down
  const [value, setValue] = useState((props.defaultVal === "dam" ? "dam" : "herr"));
  const [firstSet, setFirstSet] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleChange({ name: "omklRoom", value: event.target.value });
  };

  if (firstSet === "") {
    setFirstSet("set");
    props.handleChange({ name: "omklRoom", value: value });
    props.handleChange({ name: "omklRoom_valid", value: true });
  }

  useEffect(() => {
    let validState = true;
    if (value === undefined || value === null) {
      validState = false;
    }
    props.handleChange({ name: "omklRoom_valid", value: validState});
    if(validState === false){
      props.handleChange({ name: "omklRoom_valid_message", value: "Herr / Dam-rummet måste vara valt."});
    }
  }, [props, value]);

  return (
    <fieldset name="room" className="booking-room">
      <h3>Rum</h3>
      <div id="radio-container">
        <label htmlFor="herr">
          Herr
          <input
            type="radio"
            id="herr"
            name="herr-dam"
            value="herr"
            checked={value === "herr"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="dam">
          Dam
          <input
            type="radio"
            id="dam"
            name="herr-dam"
            value="dam"
            checked={value === "dam"}
            onChange={handleChange}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default BookingRoom;
