import React, {useRef} from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";
import "./styles/booking.scss";
import "./styles/bastu.scss";
import headerImage from "./pool-g5e265735a_1920.jpg";
import { useEffect } from "react";

const Bastu = () => {

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
            Som en del av vår nyrenovering erbjuder vi nu även bastu via {" "}
            <a onClick={scrollToForm} href="#booking">bokningssformuläret</a>.
          </p>
        </article>


        {/* Due to our sticky header we can't scroll directly to the form, instead
        we use some style magic to create an anchor we can scroll to instead */}
        <div id="scrollAnchor" style={{position: "relative"}}>
          <div ref={refForm} style={{position: "absolute", top:"-75px"}}/>
        </div>
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
