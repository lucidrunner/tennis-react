import React, {useRef, useEffect} from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import "./styles/booking.scss";
import "./styles/omkl.scss";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingRoom from "../components/BookingForm/FormComponents/BookingRoom";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";
import headerImage from "./yellow-g0806552c1_1920.jpg";

const Omkl = () => {

  const refForm = useRef(null);
  const scrollToForm = () => {
    //One way to do it, get our y-pos and calculate a manual - can't get smooth to work with this though
    // const scrollTo  =refForm.current.getBoundingClientRect().top + window.pageYOffset - 100;
    // window.scrollTo({top: scrollTo, behaviour: 'smooth'});
    //Other way, scroll to our ref and use some styling trickery on the div to get account for our header
    refForm.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };
  
  
  //One time scroll to our form if we're coming via the booking menu
  let {booking} = useParams();
  let refBooking = useRef(booking)
  useEffect(() => {
    if(refBooking.current !== undefined)
    {
      //Remove this and we'll always scroll on page reload
      refBooking.current = undefined;
      scrollToForm();
    }
  })
  

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
            <a href="#booking" onClick={scrollToForm}>bokningssformuläret</a>.
          </p>
        </article>

        {/* Due to our sticky header we can't scroll directly to the form, instead
        we use some style magic to create an anchor we can scroll to instead */}
        <div id="scrollAnchor" style={{position: "relative"}}>
          <div ref={refForm} style={{position: "absolute", top:"-75px"}}/>
        </div>
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
