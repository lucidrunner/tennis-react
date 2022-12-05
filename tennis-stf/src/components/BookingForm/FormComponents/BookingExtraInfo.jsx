import React, {useState} from "react";
import "./BookingExtraInfo.scss";

const BookingExtraInfo = (props) => {

  const [value, setValue] = useState("");
  const [firstSet, setFirstSet] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleChange({name: "extraInfo", value: event.target.value});
  };

  if(firstSet === "")
  {
      setFirstSet("set");
      props.handleChange({name: "extraInfo", value: value});
  }

    return(
        <fieldset name="extraInfo" className="booking-extra">
            <label htmlFor="add-info" className="large-label">
              Ytterligare Information
              <textarea
                id="add-info"
                name="add-info"
                rows="5"
                value = {value}
                onChange = {handleChange}
                placeholder="t.ex. sällskapsstorlek för större grupper, om racket behöver lånas eller andra särskilda omständigheter"
              ></textarea>
            </label>
        </fieldset>
    )

} 

export default BookingExtraInfo;