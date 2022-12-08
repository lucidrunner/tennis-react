import React from "react";
import { getWeekSpan, incrementDay } from "../../scripts/utilities";
import DailyTab from "./DailyTab";
import "./WeeklyCalendar.scss";
import "./DailyTab.scss";


const WeeklyCalendar = (props) => {
  const { referenceDate, referenceWeek } = props;
  let monday = getWeekSpan(referenceDate).weekStart;


  return (
    <section className="weekly-calendar">
      <Legend referenceWeek={referenceWeek} />
      <DailyTab tabDate={monday} />
      <DailyTab tabDate={incrementDay(monday, 1)} />
      <DailyTab tabDate={incrementDay(monday, 2)} />
      <DailyTab tabDate={incrementDay(monday, 3)} />
      <DailyTab tabDate={incrementDay(monday, 4)} />
      <DailyTab tabDate={incrementDay(monday, 5)} />
      <DailyTab tabDate={incrementDay(monday, 6)} />
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
        <div className="tab-cell"></div>
        <div className="tab-cell">20</div>
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
