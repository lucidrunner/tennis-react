import React from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";
import "./styles/booking.scss";
import "./styles/bastu.scss";
import headerImage from "./pool-g5e265735a_1920.jpg";

const Bastu = () => {
  //Note to self- this doesn't work
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);
  //Second note to self ^ useEffect for this, page needs to finish loading

  return (
    <section className="bastu booking page-container">
      <img
        src={headerImage}
        alt="En bild på en bastu"
        className="banner-image"
      />
      <section className="content-container">
        <article>
          <h1>Bastu</h1>
          <p>
            Som en del av vår nyrenovering erbjuder vi nu även bastu via
            <a href="#booking">bokningssformuläret</a>.
          </p>
        </article>

        <BookingForm
          title="Boka Bastu"
          components={[
            <BookingTime key="0" />,
            <BookingPersonalInfo key="1" />,
            <BookingExtraInfo key="2" />,
          ]}
        />
        {/* Dagens bokningar före bokningsformuläret här också */}
      </section>
    </section>
  );
};

export default Bastu;
