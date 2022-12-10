import React, { useState } from "react";
import { cloneElement } from "react";
import "./BookingForm.scss";
import { appendBooking } from "../../scripts/datahandling";

const BookingForm = (props) => {
  //Not a fan of the double state here but since I abstracted my components I
  //haven't really figured out yet how to also pull up their state so it's only in here

  //We keep track of all of our components state via a state object and a callback method
  const [formState, setFormState] = useState({
    type: props.id !== undefined ? props.id : "form",
  });
  const [modalInfo, setModalInfo] = useState({message: "", callback: "", class: "form-modal"});

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
    //Stop the form from firing
    event.preventDefault();

    let state = {...formState};

    //Since we've let all of our components tell our state if they're valid or not
    //we can just iterate the state and check if any fails
    let passedValidation = true;
    let failedMessage = "";

    //Note - I'm using a for in here for clarity, all major browsers iterate in definition order (mostly, any starting with a number will be read first in chrome - definition order prop, 1prop = reverse read order)
    //The reason I'm making this note is that I later added in the _message, but _valid is always defined before _valid_message so I don't have to worry about accidentally deleting the _message before the _valid 
    //To futureproof against bugs another method of iterating over the properties should be used instead (but I'm not changing it atm)
    for (const property in state) {
      if (property.includes("_valid")) {
        //We fail validation whenever a single property is invalid
        //(Easiest to test by including a number in your name atm)
        if (state[property] === false) {
          passedValidation = false;
          //Later on, we also added a message which follows the same naming pattern, so we can reach it easily
          failedMessage = state[property + "_message"];
        }

        //Clean the validity-states from the property
        delete state[property];
      }
    };

    //If any of our components fail, don't attempt to save from and inform the user
    if (!passedValidation) {
      openModal("Validering misslyckades.\nSkäl: " + failedMessage, "")
      return;
    }

    //Otherwise, save the form data to our localstorage
    if (appendBooking(state)) {
      openModal("Tid Bokad.", 
      "reload");
    } else {
      openModal("Tiden var redan bokad i systemet.", "");
    }
  };

  function openModal(modalMessage, modalCallback){
    setModalInfo({message: modalMessage, callback: modalCallback, class: "form-modal modal-show"});
  }

  //Handle
  function closeModal() {

    //Previously when I've done const / let x = a react state variable it has created a value copy (aka, if I mess with copy I don't modify the modalInfo)
    //In this case it became a reference instead, and react didn't re-render based on my changes
    //Looking into it, this is the expected js behaviour. In the other case I also set other values outside the object at the same time which probably forced the re-render
    let copy = {message: modalInfo.message, callback: modalInfo.callback, class: modalInfo.class};

    //Don't do anything if we've tried calling this on a closed modal somehow
    if(copy.class === "form-modal"){
      return;
    }
    
    //Reset
    copy.class = "form-modal";
    copy.message = "";
    copy.callback = "";


    //But fire the callback first
    if(modalInfo.callback === "reload"){
      window.location.reload();
    }

    //Then reset our modal state
    //If we don't create a new object rather than copy here react refused to re-render the component, thinking instead
    //copy was still the same object (or re-rendering but using the same state, it was all a bit weird)
    setModalInfo(copy);
  }

  window.onclick = function (event) {
    if (event.target.id === "formModal") {
      closeModal();
    }
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
      <div id="formModal" className={modalInfo.class}>
        <div className="form-modal-content">
          <p>{modalInfo.message}</p>
          <button className="form-modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
