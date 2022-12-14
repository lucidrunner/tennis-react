import React, { useState } from "react";
import { useEffect } from "react";
import "./BookingCourt.scss";

//All the subcomponents of the form follows the same basic pattern:
// Keep track of their own state while also sending any changes upwards.
// The reason for this is validation, since they also re-evaluate if their own total state is valid and 
// send validation messages upwards after a new value has been set
const BookingCourt = (props) => {
  const [value, setValue] = useState("court-1");
  const [firstSet, setFirstSet] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleChange({name: "court", value: event.target.value});
  };

  if(firstSet === "")
  {
      setFirstSet("set");
      props.handleChange({name: "court", value: value});
      props.handleChange({name: "court_valid", value: true});
  }

  useEffect(() => {
      let validState = true;
      if(value === undefined || value === null){
        validState = false;
      }
      props.handleChange({name: "court_valid", value: validState});
      if(validState === false){
        props.handleChange({name: "court_valid_message", value: "En bana måste vara vald."});
      }
  }, [props, value])
  


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
            className="inline"
            value="court-1"
            checked={value === "court-1"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="court-2">
          2 (Gräs)
          <input
            type="radio"
            id="court-2"
            name="court-select"
            value="court-2"
            checked={value === "court-2"}
            onChange={handleChange}
            className="inline"
          />
        </label>
        <label htmlFor="court-3">
          3 (Lera)
          <input
            type="radio"
            id="court-3"
            name="court-select"
            className="inline"
            value="court-3"
            checked={value === "court-3"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="court-4">
          4 (Inomhus)
          <input
            type="radio"
            id="court-4"
            name="court-select"
            className="inline"
            value="court-4"
            checked={value === "court-4"}
            onChange={handleChange}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default BookingCourt;
