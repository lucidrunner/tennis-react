import React, { Component } from "react";
import "./BookingForm.scss";

const BookingForm = (props) => {
  return (
    <section>
      <h2 className="form-title">{props.title ?? "Boka"}</h2>
      <form name={props.formName ?? "form"}>
        <input type="submit" id="submit" value="Boka" />
      </form>
    </section>
  );
};

export default BookingForm;