import React from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import "./styles/booking.scss";
import "./styles/omkl.scss";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingRoom from "../components/BookingForm/FormComponents/BookingRoom";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";
import headerImage from "./yellow-g0806552c1_1920.jpg";

const Omkl = () => {
  return (
    <section className="omkl booking page-container">
      <img
        src={headerImage}
        className="banner-image"
        alt="En serie skåp i ett omklädningsrum."
      />
      <section className="content-container">
        <article>
          <h1>Omklädningsrum</h1>
          <p>
            Vi erbjuder bokningsbara omklädningsrum via{" "}
            <a href="#booking">bokningssformuläret</a>.
          </p>
        </article>

        <BookingForm
          title="Boka Omklädningsrum"
          components={[
            <BookingRoom key="0" />,
            <BookingTime key="1" />,
            <BookingPersonalInfo key="2" />,
            <BookingExtraInfo key="3" />,
          ]}
        />
      </section>
    </section>
  );
};

export default Omkl;
