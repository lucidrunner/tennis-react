import React, { useState } from "react";
import { cloneElement } from "react";
import "./BookingForm.scss";
import appendBooking from "../../datahandling";




const BookingForm = (props) => {
  
  //Not a fan of the double state here but since I abstracted my components I
  //haven't really figured out yet how to also pull up their state so it's only in here

  //We keep track of all of our components state via a state object and a callback method
  const [formState, setFormState] = useState({id : props.id !== undefined ? props.id : "form"});

  //The callback adds the changes to our child states
  //This is also called at startup for all form components to create default values
  const handleChildStateChange = (change) => {
    let copy = formState;
    copy[change.name] = change.value;
    console.log(copy);
    setFormState(copy);
  };

  //When submitting, we validate our current formstate and either save or 
  //display an error message
  const handleSubmit = (event) => {
    //Stop the form from firing
    event.preventDefault();
    let state = formState;

    //Since we've let all of our components tell our state if they're valid or not
    //we can just iterate the state and check if any fails
    let passedValidation = true;
    for(const property in state){
      console.log(property);
      if(property.includes("_valid")){

        //We fail validation whenever a single property is invalid
        //(Easiest to test by including a number in your name atm)
        if(state[property] === false){
          passedValidation = false;
        }

        //Clean the validity-states from the property
        delete state[property];
      }
    }

    console.log(state);

    //If any of our components fail, stop the event from firing
    if(!passedValidation){
      return;
    }


    //Otherwise, save the form data to our localstorage
    appendBooking(state);
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
