import React from "react";
import { useState } from "react";
import WeeklyCalendar from "../components/WeeklyCalendar/WeeklyCalendar.jsx";
import WeekSelector from "../components/WeekSelector/WeekSelector.jsx";
import { parseBookingDate } from "../scripts/bookingmethods.js";
import { retrieveBookings } from "../scripts/datahandling.js";
import { getCurrentWeek, getWeekSpan, incrementDay } from "../scripts/utilities.js";
import "./styles/booking.scss";

const Bookings = () => {
  const [selectedWeek, setselectedWeek] = useState(getCurrentWeek());

  //Get our different bookings
    let courts = retrieveBookings("courts");
    let bastu = retrieveBookings("bastu");
    let omkl = retrieveBookings("omkl");

    const currentWeekSpan = getWeekSpan(getReferenceDateInWeek(selectedWeek));
    filterBookings();

    function filterBookings() {
    courts = courts.filter(filterForWeek);
    bastu = bastu.filter(filterForWeek);
    omkl = omkl.filter(filterForWeek);
  }

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

  //This breaks for year differences atm obviously
  function getReferenceDateInWeek(weekNumber){
      const currentWeekNumber = getCurrentWeek();
      if(weekNumber === currentWeekNumber){
        return new Date();
      }
      
      let refDate = new Date();

      //This * abs(yearDiff) to get our full diff
      let weekDifference = weekNumber - currentWeekNumber;
      console.log(weekDifference);
      refDate = incrementDay(refDate, (weekDifference * 7));
      return refDate; 
  }


  function handleWeekChange(changes) {
    setselectedWeek(changes.week);
  }

  const refDate = new Date();

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
                <div key={court.id}>
                  <p>{court.bookerName} - {court.timeDate} - {court.timeSlot}</p>
                  <p>{court.type}</p>
                </div>
              );
            })}
            {/* Split by color, legend at top */}
            <WeeklyCalendar referenceDate={refDate} referenceWeek={selectedWeek} />
          </article>
          <article>
            <h2>Omklädningsrum</h2>
            {omkl.map((room) => {
              return (
                <div key={room.id}>
                  <p>{room.bookerName} - {room.timeDate} - {room.timeSlot}</p>
                  <p>{room.type} - {room.omklRoom}</p>
                </div>
              );
            })}
            
            <WeeklyCalendar referenceDate={refDate} referenceWeek={selectedWeek} />
          </article>
          <article>
            <h2>Bastu</h2>
            {bastu.map((bast) => {
              return (
                <div key={bast.id}>
                  <p>{bast.bookerName} - {bast.timeDate} - {bast.timeSlot}</p>
                  <p>{bast.type}</p>
                </div>
              );
            })}
            
            <WeeklyCalendar referenceDate={refDate} referenceWeek={selectedWeek} />
          </article>
        </section>
      </section>
    </section>
  );
};

export default Bookings;
