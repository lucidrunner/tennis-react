import React from "react";
import { useState } from "react";
import WeekSelector from "../components/WeekSelector/WeekSelector.jsx";
import { getWeekSpan, parseBookingDate } from "../scripts/bookingmethods.js";
import { retrieveBookings } from "../scripts/datahandling.js";
import "./styles/booking.scss";

const Bookings = () => {
  const [selectedWeek, setselectedWeek] = useState("");
  
  //Get our different bookings
  let courts = retrieveBookings("courts");
  let bastu = retrieveBookings("bastu");
  let omkl = retrieveBookings("omkl");

  const currentWeekSpan = getWeekSpan();
  
  function filterForWeek(booking) {
    const bookingDate = parseBookingDate(booking.timeDate, booking.timeSlot);
    if (
      bookingDate > currentWeekSpan.weekStart &&
      bookingDate < currentWeekSpan.weekEnd
    ) {
      return true;
    }
    return false;
  }

  courts = courts.filter(filterForWeek);
  bastu = bastu.filter(filterForWeek);
  omkl = omkl.filter(filterForWeek);

  //Filter to this week only

  function handleWeekChange(changes) {
    setselectedWeek(changes.week);
  }

  return (
    <section className="bookings booking page-container">
      <section className="content-container">
        <h1>Bokningar</h1>
        {/* Week Selector */}
        <section className="bookings-display">
          <WeekSelector handleChange={handleWeekChange} />
          <article>
            <h2>Banor</h2>
            {courts.map((court) => {
              return (
                <div>
                  <p>{court.bookerName} - {court.timeDate} - {court.timeSlot}</p>
                  <p>{court.type}</p>
                </div>
              );
            })}
            {/* Split by color, legend at top */}
          </article>
          <article>
            <h2>Omklädningsrum</h2>
            {omkl.map((room) => {
              return (
                <div>
                  <p>{room.bookerName} - {room.timeDate} - {room.timeSlot}</p>
                  <p>{room.type} - {room.omklRoom}</p>
                </div>
              );
            })}
          </article>
          <article>
            <h2>Bastu</h2>
            {bastu.map((bast) => {
              return (
                <div>
                  <p>{bast.bookerName} - {bast.timeDate} - {bast.timeSlot}</p>
                  <p>{bast.type}</p>
                </div>
              );
            })}
          </article>
        </section>
      </section>
    </section>
  );
};

export default Bookings;
