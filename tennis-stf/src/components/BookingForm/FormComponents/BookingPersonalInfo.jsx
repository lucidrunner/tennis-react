import React, { useState } from "react";
import { useEffect } from "react";
import "./BookingPersonalInfo.scss";

const BookingPersonalInfo = (props) => {
  //Taking advantage of the ability to access objects via the []-syntax to 
  //avoid having a handleChange for each input

  //Define our actual state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");


  //Helper class with the same names as the inputs for setValue[name](value)-access
  const setValue = {
    bookerName: setName,
    bookerEmail: setEmail,
    bookerPhoneNumber: setNumber,
  };

  //Keep track on if we should send our default values to the parent
  const [firstSet, setFirstSet] = useState("");

  //On change, update our and the parent state
  const handleChange = (event) => {
    setValue[event.target.name](event.target.value);
    props.handleChange({ name: event.target.name, value: event.target.value });
  };

  if (firstSet === "") {
    setFirstSet("set");
    props.handleChange({ name: "bookerName", value: "" });
    props.handleChange({ name: "bookerEmail", value: "" });
    props.handleChange({ name: "bookerPhoneNumber", value: "" });
    props.handleChange({name: "bookerInfo_valid", value: false});
  }


  
  useEffect(() => {
    let validState = true;
    //Regex for name validation)
    const validName = new RegExp('^[A-ZÅÄÖa-zåäö ]*$');

    if(name === "" || email === "" || number === ""){
      validState = false;
    }
    else if(!validName.test(name)){
      validState = false;
    }

    props.handleChange({name: "bookerInfo_valid", value: validState});
}, [props, name, email, number])





  return (
    <fieldset name="personal-info" className="booking-personal">
      <h3>Personlig Information</h3>
      <div id="personal-container">
        <label htmlFor="booker-name">
          Namn
          <input
            id="booker-name"
            name="bookerName"
            value={name}
            onChange={handleChange}
            type="text"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="bookerEmail"
            value={email}
            onChange={handleChange}
            type="email"
            required
          />
        </label>
        <label htmlFor="phone-number">
          Telefonnummer
          <input
            id="phone-number"
            name="bookerPhoneNumber"
            value={number}
            onChange={handleChange}
            type="tel"
            required
          />
        </label>
      </div>
    </fieldset>
  );
};

export default BookingPersonalInfo;
