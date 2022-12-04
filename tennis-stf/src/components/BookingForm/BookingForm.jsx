import React from "react";
import "./BookingForm.scss";

const BookingForm = (props) => {

  return (
    <section className="booking-form">
      <h2 className="form-title">{props.title ?? "Boka"}</h2>
      <form name={props.formName ?? "form"}>
        {
          props.components.map((component) => {
            return component;
          })
        }
        <input type="submit" id="submit" value="Boka" />
      </form>
    </section>
  );
};

export default BookingForm;
