import React, { useState } from "react";
import { cloneElement } from "react";
import "./BookingForm.scss";

const BookingForm = (props) => {
  

  //Not a fan of the double state here but since I abstracted my components I
  //haven't really figured out yet how to also pull up their state so it's only in here

  //We keep track of all of our components state via a state object and a callback method
  const [formState, setFormState] = useState({});

  //The callback adds the changes to our child states
  //This is also called at startup for all form components to create default values
  const handleChildStateChange = (change) => {
    let copy = formState;
    copy[change.name] = change.value;
    setFormState(copy);
  };

  //When submitting, we validate our current formstate and either save or 
  //display an error message
  const handleSubmit = (event) => {
    event.preventDefault();
    const passedValidation = true;

    //All validation goes here

  };

  

  return (
    <section className="booking-form">
      <h2 className="form-title">{props.title ?? "Boka"}</h2>
      <form name={props.formName ?? "form"} onSubmit={handleSubmit}>
        {props.components.map((component) => {
          const mappedComponent = cloneElement(component, {
            handleChange: handleChildStateChange,
          });
          return mappedComponent;
        })}
        <input type="submit" id="submit" value="Boka" />
      </form>
    </section>
  );
};

export default BookingForm;
