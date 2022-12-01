import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import "./styles/omkl.scss";

const Omkl = () => {
  // let {bookingDestination} = useParams();
  // let location = useLocation();
  // console.log(location);
  // const {room} = location.state;
  // console.log("Rum " + room);

  // console.log("Destination " + bookingDestination);
  // console.log(useParams());
  return (
    <section className="omkl booking page-container">
      <img
        src="resources/yellow-g0806552c1_1920.jpg"
        className="banner-image"
        alt="En serie skåp i ett omklädningsrum."
      />
      <article className="padded-container">
        <h1 className="centered">Omklädningsrum</h1>
        <p className="centered">
          Vi erbjuder bokningsbara omklädningsrum via{" "}
          <a href="#booking">bokningssformuläret</a>.
        </p>
      </article>

      <BookingForm />

      <section className="padded-container">
        <h2 id="booking">Boka Omklädningsrum</h2>
        <form name="omkl">
          <fieldset>
            <section className="room">
              <h3>Rum</h3>
              <div className="flex-row">
                <label for="herr">
                  Herr
                  <input
                    type="radio"
                    id="herr"
                    name="herr-dam"
                    checked
                    className="inline"
                  />
                </label>
              </div>
              <div className="flex-row">
                <label for="dam">
                  Dam
                  <input
                    type="radio"
                    id="dam"
                    name="herr-dam"
                    className="inline"
                  />
                </label>
              </div>
            </section>
          </fieldset>
          <fieldset>
            <section className="time">
              <h3>Tid</h3>
              <div className="flex-row">
                <label for="time-date">
                  Datum
                  <input type="date" id="time-date" name="time-date" required />
                </label>
              </div>
              <div className="flex-row">
                <label for="time-slot">
                  Tidslag
                  <select id="time-slot" name="time-slot" required>
                    <option value="">(select one)</option>
                    <option value="1">8 - 10</option>
                    <option value="2">10 - 12</option>
                    <option value="3">12 - 14</option>
                    <option value="4">14 - 16</option>
                    <option value="5">16 - 18</option>
                    <option value="6">18 - 20</option>
                    <option value="7">Förmiddag (8-13)</option>
                    <option value="8">Eftermiddag (13-20)</option>
                  </select>
                </label>
              </div>
            </section>
          </fieldset>
          <fieldset>
            <h3>Personlig Information</h3>
            <label for="booker-name">
              Namn
              <input id="booker-name" name="booker-name" type="text" required />
            </label>
            <label for="email">
              Email
              <input id="email" name="email" type="email" required />
            </label>
            <label for="phone-number">
              Telefonnummer
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label for="add-info" className="large-label">
              Ytterligare Information
              <textarea
                id="add-info"
                name="add-info"
                rows="4"
                placeholder="t.ex. sällskapsstorlek för större grupper, om racket behöver lånas eller andra särskilda omständigheter"
              ></textarea>
            </label>
          </fieldset>
          <input type="submit" id="submit" value="Boka" />
        </form>
      </section>
    </section>
  );
};

export default Omkl;
