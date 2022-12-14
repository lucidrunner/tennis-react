import React from "react";
import { useState } from "react";
import WeeklyCalendar from "../components/WeeklyCalendar/WeeklyCalendar.jsx";
import WeekSelector from "../components/WeekSelector/WeekSelector.jsx";
import { filterForWeek } from "../scripts/bookingmethods.js";
import { retrieveBookings } from "../scripts/datahandling.js";
import {
  getWeekSpan,
  incrementDay,
} from "../scripts/utilities.js";
import "./styles/booking.scss";
import "./styles/bookings.scss";


//Our current booking page, mostly just a wrapper
const Bookings = () => {
  //The whole booking system works by having a reference date (orginially set to the current day) that is manipulated by the selector
  //The reference date is then used to find the corresponding week it's in, which is then used to filter bookings & display the calendars
  //Note that this might break 
  const [refDate, setRefDate] = useState(new Date());

  //Get our different bookings
  let courts = retrieveBookings("courts");
  let bastu = retrieveBookings("bastu");
  let omkl = retrieveBookings("omkl");

  //Get the currently selected week's start / end (and in turn, get that via getting a reference date inside our selected week)
  const currentWeekSpan = getWeekSpan(refDate);
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
    let newDate = refDate;
    if(changes.change === "up"){
      newDate = incrementDay(newDate, 7);
    }else if(changes.change === "down"){
      newDate = incrementDay(newDate, -7);
    }
    setRefDate(newDate);
  }

  //We need to tell our calendar days how many columns they should have
  //, and what they should look for when splitting the bookings into their columns
  //For the first two we're giving the values of the sub-categories
  const courtColumns = [
    { label: "Gr??s 1", name: "court-1", color: "#FFBD35" },
    { label: "Gr??s 2", name: "court-2", color: "#502064" },
    { label: "Lera", name: "court-3", color: "#3FA796" },
    { label: "Inne", name: "court-4", color: "#8267BE" },
  ];

  const omklColumns = [
    { label: "Herr", name: "herr", color: "#FFBD35" },
    { label: "Dam", name: "dam", color: "#3FA796" },
  ];

  //There's only one bastu, so it gets the main category property instead
  const bastuColumns = [{label: "Bastu", name: "bastu", color: "#8267BE" }];

  //This way we can just check all properties for each booking and if any of them match the given
  //value we put it in that column, allowing us to filter all bookings with the same method
  return (
    <section className="bookings booking page-container">
      <section className="content-container">
        <h1>Bokningar</h1>
        {/* Week Selector */}
        <section className="bookings-display">
          <WeekSelector handleChange={handleWeekChange} />
          <article>
            <h2>Banor</h2>
            <WeeklyCalendar
              referenceDate={refDate}
              weeklyBookings={courts}
              columns={courtColumns}
            />
          </article>
          <article>
            <h2>Omkl??dningsrum</h2>
            <WeeklyCalendar
              referenceDate={refDate}
              weeklyBookings={omkl}
              columns={omklColumns}
            />
          </article>
          <article>
            <h2>Bastu</h2>
            <WeeklyCalendar
              referenceDate={refDate}
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
