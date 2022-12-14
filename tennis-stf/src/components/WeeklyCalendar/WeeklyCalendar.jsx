import React from "react";
import {
  getCurrentWeek,
  getWeekSpan,
  incrementDay,
} from "../../scripts/utilities";
import DailyTab from "./DailyTab";
import "./WeeklyCalendar.scss";
import "./DailyTab.scss";

//Our 7 day vertical calendar, which will consist of a series of daily tabs that prints their relevant bookings
const WeeklyCalendar = (props) => {
  const { referenceDate, weeklyBookings, columns } = props;
  let monday = getWeekSpan(referenceDate).weekStart;

  //First we need to split our bookings by our days
  let splitBookings = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

  //We do this by checking their .getDay() since it goes via an index of 0-6
  for (let index = 0; index < 7; index++) {
    let filteredByDay = weeklyBookings.filter((booking) => {
      let bookingDay = new Date(booking.timeDate).getDay();
      return bookingDay === index;
    });
    if (filteredByDay.length > 0) {
      //[] accessing properties is genuinely my favorite part of javascript
      //Doing this is hell in c#
      //We also do ...filteredByDay here to get them out of their array and directly into the inner array
      splitBookings[index].push(...filteredByDay);
    }
  }

  //Each daily tab needs to know their day, the bookings they should fill with
  //and the columns they should split those bookings by (which we just keep passing down from above)
  return (
    <section className="weekly-calendar-container">
      <article className="weekly-calendar-colors">
        {columns.map((column) => {
          const { color, label } = column;
          const columnStyle = {
            backgroundColor: `${color}`,
          };
          return (
            <div key={color + label} className="color-label">
              <div className="color-dot" style={columnStyle}></div>
              <div>{label}</div>
            </div>
          );
        })}
      </article>
      <section className="weekly-calendar">
        <Legend referenceWeek={getCurrentWeek(referenceDate)} />
        <DailyTab
          tabDate={monday}
          bookings={splitBookings[1]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 1)}
          bookings={splitBookings[2]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 2)}
          bookings={splitBookings[3]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 3)}
          bookings={splitBookings[4]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 4)}
          bookings={splitBookings[5]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 5)}
          bookings={splitBookings[6]}
          columns={columns}
        />
        <DailyTab
          tabDate={incrementDay(monday, 6)}
          bookings={splitBookings[0]}
          columns={columns}
        />
      </section>
    </section>
  );
};

const Legend = (props) => {
  const { referenceWeek } = props;
  return (
    <div id="legend" className="daily-tab">
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
      <div
        className="tab-cell"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        20
      </div>
    </div>
  );
};

export default WeeklyCalendar;
