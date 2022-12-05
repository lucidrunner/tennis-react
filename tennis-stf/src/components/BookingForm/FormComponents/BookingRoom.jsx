import React, {useState} from "react";
import "./BookingRoom.scss";

const BookingRoom = (props) => {

    //Same state pattern as the others, define our internal and pass it
    //to the parent
    const [value, setValue] = useState("herr");
    const [firstSet, setFirstSet] = useState("");

    const handleChange = (event) => {
      setValue(event.target.value);
      props.handleChange({name: "omklRoom", value: event.target.value});
    };
  
    if(firstSet === "")
    {
        setFirstSet("set");
        props.handleChange({name: "omklRoom", value: value});
    }


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
    )

} 

export default BookingRoom;