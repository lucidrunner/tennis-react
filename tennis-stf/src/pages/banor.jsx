import React from "react";
import { useParams } from "react-router-dom";

import "./styles/booking.scss";
import "./styles/banor.scss";
import BookingExtraInfo from "../components/BookingForm/FormComponents/BookingExtraInfo";
import BookingPersonalInfo from "../components/BookingForm/FormComponents/BookingPersonalInfo";
import BookingCourt from "../components/BookingForm/FormComponents/BookingCourt";
import BookingTime from "../components/BookingForm/FormComponents/BookingTime";
import BookingForm from "../components/BookingForm/BookingForm";
import headerImage from "./sport-g3724c55be_1920.jpg";
import { useEffect, useRef } from "react";

const Banor = () => {
  const refForm = useRef(null);
  const scrollToForm = () => {
    //One way to do it, get our y-pos and calculate a manual - can't get smooth to work with this though
    // const scrollTo  =refForm.current.getBoundingClientRect().top + window.pageYOffset - 100;
    // window.scrollTo({top: scrollTo, behaviour: 'smooth'});
    //Other way, scroll to our ref and use some styling trickery on the div to get account for our header
    refForm.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
    <section className="courts booking page-container">
      <img
        src={headerImage}
        alt="En bild på en tennisbana"
        className="banner-image"
      />

      <section className="content-container">
        <article className="title-section">
          <h1>Våra Banor</h1>
          <p>
            Vi erbjuder en serie olika bantyper, från utomhusbanor på gräs och
            lera, till inomhusbanor. Alla våra banor är öppna för bokning via{" "}
            <a href="#booking" onClick={scrollToForm}>
              bokningssformuläret
            </a>
            .
          </p>
        </article>
        <article>
          <h2>Gräsbanor</h2>
          <p>
            Grass courts are the fastest type of courts in common use.[7] They
            consist of grass grown on very hard-packed soil, which adds
            additional variables: bounces depend on how healthy the grass is,
            how recently it has been mowed, and the wear and tear of recent
            play. Points are usually very quick where fast, low bounces keep
            rallies short, and the serve plays a more important role than on
            other surfaces. Grass courts tend to favour serve-and-volley tennis
            players. Grass courts were once among the most common tennis
            surfaces, but are now rare due to high maintenance costs, as they
            must be watered and mown often, and take a longer time to dry after
            rain than hard courts. Historically for the Grand Slams grass courts
            have been used at Wimbledon since 1877, the US Open from 1881 to
            1974, and the Australian Open from 1905 to 1987.
          </p>
        </article>
        <article>
          <h2>Lerbanor</h2>
          <p>
            Clay courts are made of crushed shale, stone or brick.[7] The French
            Open is the only Grand Slam tournament to use clay courts. Clay
            courts slow down the ball and produce a high bounce in comparison to
            grass or hard courts.[7] For this reason, the clay court takes away
            many of the advantages of big serves, which makes it hard for
            serve-based players to dominate on the surface. Clay courts are
            cheaper to construct than other types of tennis courts, but a clay
            surface costs more to maintain. Clay courts need to be rolled to
            preserve flatness. The clay's water content must be balanced; green
            clay courts generally require the courts to be sloped to allow water
            run-off. Clay courts are more common in Europe and Latin America
            than in North America, and tend to heavily favour baseline players.
            Historically for the Grand Slams clay courts have been used at the
            French Open since 1891 and the US Open from 1975 to 1977.
          </p>
        </article>
        <article>
          <h2>Inomhusbanor</h2>
          <p>
            Some tennis courts are indoors, which allows play regardless of
            weather conditions and is more comfortable for spectators. Different
            court surfaces have been used indoors. Hard courts are most common
            indoors, as they are the easiest to install and maintain. If the
            installation is permanent, they are constructed on an asphalt or
            concrete base, as with outdoor courts. Temporary indoor hard courts
            are typically constructed using wooden floor panels topped with
            acrylic which are installed over the venue's standard floor. This is
            the system used for modern indoor professional events such as the
            ATP Finals. Clay courts can be installed indoors with subsurface
            watering systems to keep the clay from drying out, and have been
            used for Davis Cup matches. Carpet courts were once the most
            prominent of indoor surfaces, especially in temporary venues, but
            have largely been replaced by removable hard courts. They were used
            on both the ATP World Tour and World Championship Tennis circuits,
            though no events currently use them. Historically, other surfaces
            have been used indoors such as hardwood flooring at the defunct
            World Covered Court Championships and London Indoor Professional
            Championships.
          </p>
        </article>

        {/* Due to our sticky header we can't scroll directly to the form, instead
        we use some style magic to create an anchor we can scroll to instead */}
        <div id="scrollAnchor" style={{ position: "relative" }}>
          <div ref={refForm} style={{ position: "absolute", top: "-75px" }} />
        </div>
        <BookingForm
          title="Boka Tennisbana"
          id="booking"
          components={[
            <BookingCourt key="0" />,
            <BookingTime key="1" />,
            <BookingPersonalInfo key="2" />,
            <BookingExtraInfo key="3" />,
          ]}
        />
      </section>
    </section>
  );
};

export default Banor;
