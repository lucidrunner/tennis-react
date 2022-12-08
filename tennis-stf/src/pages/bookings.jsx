import React from "react";
import { useState } from "react";
import WeeklyCalendar from "../components/WeeklyCalendar/WeeklyCalendar.jsx";
import WeekSelector from "../components/WeekSelector/WeekSelector.jsx";
import { filterForWeek } from "../scripts/bookingmethods.js";
import { retrieveBookings } from "../scripts/datahandling.js";
import {
  getCurrentWeek,
  getReferenceDateInWeek,
  getWeekSpan,
} from "../scripts/utilities.js";
import "./styles/booking.scss";

const Bookings = () => {
  const [selectedWeek, setselectedWeek] = useState(getCurrentWeek());

  //Get our different bookings
  let courts = retrieveBookings("courts");
  let bastu = retrieveBookings("bastu");
  let omkl = retrieveBookings("omkl");

  //Get the currently selected week's start / end (and in turn, get that via getting a reference date inside our selected week)
  const currentWeekSpan = getWeekSpan(getReferenceDateInWeek(selectedWeek));
  filterBookings();

  //Filter our bookings to only show the currently selected week
  function filterBookings() {
    courts = courts.filter((booking) => {
      return filterForWeek(booking, currentWeekSpan);
    });
    bastu = bastu.filter((booking) => {
      return filterForWeek(booking, currentWeekSpan);
    });
    omkl = omkl.filter((booking) => {
      return filterForWeek(booking, currentWeekSpan);
    });
  }

  function handleWeekChange(changes) {
    setselectedWeek(changes.week);
  }

  //We need to tell our calendar days how many columns they should have
  //, and what they should look for when splitting the bookings into their columns
  //For the first two we're giving the values of the sub-categories
  const courtColumns = [
    { name: "court-1", color: "green" },
    { name: "court-2", color: "yellow" },
    { name: "court-3", color: "brown" },
    { name: "court-4", color: "blue" },
  ];

  const omklColumns = [
    { name: "herr", color: "green" },
    { name: "dam", color: "blue" },
  ];

  //There's only one bastu, so it gets the main category property instead
  const bastuColumns = [{ name: "bastu", color: "aquamarine" }];

  //This way we can just check all properties for each booking and if any of them match the given
  //value we put it in that column, allowing us to filter all bookings with the same method

  //TODO Reflect week here
  const refDate = getReferenceDateInWeek(selectedWeek);

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
                  <p>
                    {court.bookerName} - {court.timeDate} - {court.timeSlot}
                  </p>
                  <p>{court.type}</p>
                </div>
              );
            })}
            {/* Split by color, legend at top */}
            <WeeklyCalendar
              referenceDate={refDate}
              referenceWeek={selectedWeek}
              weeklyBookings={courts}
              columns={courtColumns}
            />
          </article>
          <article>
            <h2>Omklädningsrum</h2>
            {omkl.map((room) => {
              return (
                <div key={room.id}>
                  <p>
                    {room.bookerName} - {room.timeDate} - {room.timeSlot}
                  </p>
                  <p>
                    {room.type} - {room.omklRoom}
                  </p>
                </div>
              );
            })}

            <WeeklyCalendar
              referenceDate={refDate}
              referenceWeek={selectedWeek}
              weeklyBookings={omkl}
              columns={omklColumns}
            />
          </article>
          <article>
            <h2>Bastu</h2>
            {bastu.map((bast) => {
              return (
                <div key={bast.id}>
                  <p>
                    {bast.bookerName} - {bast.timeDate} - {bast.timeSlot}
                  </p>
                  <p>{bast.type}</p>
                </div>
              );
            })}

            <WeeklyCalendar
              referenceDate={refDate}
              referenceWeek={selectedWeek}
              weeklyBookings={bastu}
              columns={bastuColumns}
            />
          </article>
        </section>
      </section>
    </section>
  );
};

export default Bookings;
