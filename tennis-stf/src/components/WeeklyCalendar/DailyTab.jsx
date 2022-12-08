import React from "react";
import { formatShortDate } from "../../scripts/utilities";
import "./DailyTab.scss";

const DailyTab = (props) => {
  //Deconstruct our booking
  const { bookings, columns, tabDate } = props;
  //[TITEL FÖR DAGEN]
  //rows 8-20 dvs 12 rows
  //kolumner är inpassade baserat på dataobjektet
  //Datan är i formen {bokingstider, [{identifierare, färg}], date} - vi fixar vår overview baserad på den här inne hellre än i förälder

  const title = getTitle(tabDate);



  return (
    <article className="daily-tab">
        <div className="tab-header">
        <span className="tab-day">{title}</span><br/>
        <span className="tab-date">{formatShortDate(tabDate)}</span>
        </div>
    </article>
  );
};

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
