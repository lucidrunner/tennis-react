import React from "react";
import { formatShortDate } from "../../scripts/utilities";
import {getTimeSlotAsNumbers} from "../../scripts/bookingmethods";
import "./DailyTab.scss";

const DailyTab = (props) => {

  const { bookings, columns, tabDate } = props;

  //Get the title (aka day) of our column 
  const title = getTitle(tabDate);

  //Next step, based on each filter, repackage our bookings and columns together
  let splitColumns = [];
  for (let index = 0; index < columns.length; index++) {

    const column = columns[index];
    //Filter for all that have the specific column value
    const columnBookings = bookings.filter((booking) => {
      return Object.values(booking).includes(column.name);
    }) 

    //And add them wrapped with their color
    splitColumns.push({columnBookings: columnBookings, color: column.color})
  }

  //Now that we have them bundled, we need to actually create all of our different entries in the grid
  //The basic idea is loop through all of our columns, and all of our rows
  //For each row, check if we have a booking that starts there on the corresponding splitColumn
  //IF YES - add that as a TabEntry with the length set to the booking length, the booking supplied and the x / y position (row / column)
  //THEN move our row-index by length so we bypass all spaces that should take up
  //IF NO -same deal, length is 1, booking is null and the x / y pos is the same
  
  //Columns For
  const entries = [];
  for (let columnIndex = 0; columnIndex < splitColumns.length; columnIndex++) {
    const column = splitColumns[columnIndex];

    
    //Row For
    //12 because we're doing 8-20
    for(let rowIndex = 0; rowIndex < 12; rowIndex++){
      //For each here, we need to start by looking at at their start in comparison to
      //which row we're at
      let time = rowIndex + 8;
      let match = column.columnBookings.find((booking) => {
          return getTimeSlotAsNumbers(booking).start === time;
      })

      //We need to have
      if(match !== undefined){
        //Add it and increase our row index by the length of it
        let timeSlot = getTimeSlotAsNumbers(match);
        timeSlot = timeSlot.end - timeSlot.start;
        
        let bookingEntry = <TabEntry key={`${column.color}${rowIndex}${columnIndex}`} booking={match} color={column.color} position={{row: rowIndex + 2, column: columnIndex + 1}} length={timeSlot}  />
        entries.push(bookingEntry);
        rowIndex+=timeSlot - 1;

        //We need to do + 1 in our col and + 2 in our row position to account for the header and grid positioning starting at 1

      }else{
        //Add an empty entry
        let emptyEntry = <TabEntry key={`${column.color}${rowIndex}${columnIndex}`} booking={null} color={column.color} position={{row: rowIndex + 2, column: columnIndex + 1}} length={1}  />
        entries.push(emptyEntry);
      }



    }

    
  }

  //And also set our styling to be able to contain our columns
  let tabStyle = {
    gridTemplateColumns: `repeat(${columns.length} 1fr)`
  }

  let headerStyle = {
    gridColumn: `span ${columns.length}`
  }


  return (
    <article className="daily-tab" style={tabStyle}>
        <div className="tab-header" style={headerStyle}>
        <span className="tab-day">{title}</span><br/>
        <span className="tab-date">{formatShortDate(tabDate)}</span>
        </div>
        {entries.map((entry) => entry)}
    </article>
  );
};

const TabEntry = (props) => {
  const {booking, color, position, length} = props;
  const empty = booking === null;

  const emptyColor = position.row % 2 ? "white" : "grey";

  let tabStyle = {
  backgroundColor: empty ? emptyColor : color,
  gridColumn: position.column,
  gridRowStart: position.row,
  gridRowEnd: `span ${length}`
  }

  const classList = "tab-cell " + (empty ? "tab-empty" : "tab-set");

  return(
    <div className={classList} style={tabStyle}>

    </div>
  )
}

function getTitle(date) {
  switch (date.getDay()) {
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsday";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
    case 0:
      return "Söndag";
      default: return "Den"
  }
}



export default DailyTab;
