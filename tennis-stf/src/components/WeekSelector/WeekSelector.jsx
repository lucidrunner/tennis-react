import React from "react";
import { useState } from "react";
import { getCurrentWeek } from "../../scripts/utilities";
import "./WeekSelector.scss";

const WeekSelector = (props) => {
  
  const [currentWeek, setCurrentWeek] = useState(props.week ?? getCurrentWeek());

  function changeWeek(direction) {
    let newWeek = currentWeek;
    let yearChange = "";
    if (direction === "down") {
        newWeek--;
        if(newWeek <= 0){
            newWeek = 52;
            yearChange = "down";
        }
    } else {
        newWeek++;
        if(newWeek >= 53){
            newWeek = 1;
            yearChange = "up";
        }
    }
    setCurrentWeek(newWeek);
    props.handleChange({week: newWeek, change: direction, yearChange: yearChange});
  }

  return (
    <div className="week-selector">
      <button  onClick={() => changeWeek("down")} className="button-left">❰</button>
      <span className="week">Vecka {currentWeek}</span>
      <button  onClick={() => changeWeek("up")} className="button-right">❱</button>
    </div>
  );
};

export default WeekSelector;
