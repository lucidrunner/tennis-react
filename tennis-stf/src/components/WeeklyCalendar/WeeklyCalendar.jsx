import React from "react";
import { getWeekSpan, incrementDay } from "../../scripts/utilities";
import DailyTab from "./DailyTab";
import "./WeeklyCalendar.scss";
import "./DailyTab.scss";


const WeeklyCalendar = (props) => {
  const { referenceDate, referenceWeek, weeklyBookings, columns } = props;
  let monday = getWeekSpan(referenceDate).weekStart;

  //First we need to split our bookings by our days
  let splitBookings = {0: [],1: [],2: [], 3:[], 4:[], 5:[],6:[]};

  //We do this by checking their .getDay() since it goes via an index of 0-6
  for (let index = 0; index < 7; index++) {
    let filteredByDay = weeklyBookings.filter((booking) => {
        let bookingDay = new Date(booking.timeDate).getDay();
        return bookingDay === index;
    })
    if(filteredByDay.length > 0){
        //[] accessing properties is genuinely my favorite part of javascript
        //Doing this is hell in c#
        //We also do ...filteredByDay here to get them out of their array and directly into the inner array
        splitBookings[index].push(...filteredByDay);
    }
    
  }

  //Each daily tab needs to know their day, the bookings they should fill with
  //and the columns they should split those bookings by (which we just keep passing down from above)
  return (
    <section className="weekly-calendar">
      <Legend referenceWeek={referenceWeek} />
      <DailyTab tabDate={monday} bookings={splitBookings[1]} columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 1)} bookings={splitBookings[2]}  columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 2)} bookings={splitBookings[3]}  columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 3)} bookings={splitBookings[4]}  columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 4)} bookings={splitBookings[5]}  columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 5)} bookings={splitBookings[6]}  columns = {columns}/>
      <DailyTab tabDate={incrementDay(monday, 6)} bookings ={splitBookings[0]}  columns = {columns}/>
    </section>
  );
};


const Legend = (props) => {
    const { referenceWeek } = props;
    return (
      <div className="daily-tab">
        <span className="week tab-header">{referenceWeek}</span>
        <div className="tab-cell">8</div>
        <div className="tab-cell"></div>
        <div className="tab-cell">10</div>
        <div className="tab-cell"></div>
        <div className="tab-cell">12</div>
        <div className="tab-cell"></div>
        <div className="tab-cell">14</div>
        <div className="tab-cell"></div>
        <div className="tab-cell">16</div>
        <div className="tab-cell"></div>
        <div className="tab-cell">18</div>
        <div className="tab-cell" style={{display: "flex", justifyContent: "center", alignItems: "flex-end"}}>20</div>
      </div>
    );
  };

export default WeeklyCalendar;

//Layout Idea for this

/*
    | MON | TIS | ONS | TOR | FRE | LÖR | SÖN |
  8 |X Z O|     |     |     |     |     |     |
  9 |X Z O|     |     |     |     |     |     |
 10 |X H B|     |     |     |     |     |     |
 11 |X H B|     |     |     |     |     |     |
 12 |X Y B|     |     |     |     |     |     |
 13 |X Y B|     |     |     |     |     |     |
 14 |  B  |     |     |     |     |     |     |
etc
x = lång bokning, court 1
BASICALLY
Vi splittar varje i så många grids-kolumner vi behöver (4 + 2 för varje kolumn
    i det här fallet) - Varje kolumn är auto
    Varje översta är ett span 4 block och bestämmer bredden på hela 
    EN Alternativ idé skulle vara att göra varje kolumn till en grid och ha en topp-grid / flex för att hantera det
    Varje timme är en row och 4 bred, använd border för att... ge border :P
    Om saker är fyllda lägger vi till en fill-klass på de så att de får färg
*/
