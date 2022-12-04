import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import "./styles/omkl.scss";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingRoom from "../components/BookingForm/FormComponents/BookingRoom";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";

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
  );
};

export default Omkl;
