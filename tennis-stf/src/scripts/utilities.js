
//Formats the date in the format html / react / the actual Date() class likes
function formatDate(date) {
    const formatDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate().toString().padStart(2, "0");
    return formatDate;
  }
  
  function formatShortDate(date){
    const formatDate =
    date.getDate() +
      "/" +
      (date.getMonth() + 1);
    return formatDate;
  }
  
  function getWeekSpan(referenceDate) {
    let weekStart = new Date(referenceDate);
    weekStart.setHours(0, 0, 0, 0);
    weekStart = incrementDay(weekStart, -(weekStart.getDay() - 1));
    let weekEnd = incrementDay(weekStart, 7);
  
    return { weekStart: weekStart, weekEnd: weekEnd };
  }
  
  function getCurrentWeek() {
    //Taken from https://stackoverflow.com/questions/7765767/show-week-number-with-javascript
    //This is the jQuery-UI implementation
    // Create a copy of the current date, we don't want to mutate the original
    const date = new Date();
  
    // Find Thursday of this week starting on Monday
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const thursday = date.getTime();
  
    // Find January 1st
    date.setMonth(0); // January
    date.setDate(1); // 1st
    const jan1st = date.getTime();
  
    // Round the amount of days to compensate for daylight saving time
    const days = Math.round((thursday - jan1st) / 86400000); // 1 day = 86400000 ms
    const defaultWeek = Math.floor(days / 7) + 1;
    return defaultWeek;
  }

  
  //This breaks for year differences atm obviously
  function getReferenceDateInWeek(weekNumber){
    const currentWeekNumber = getCurrentWeek();
    if(weekNumber === currentWeekNumber){
      return new Date();
    }
    
    let refDate = new Date();

    //This should do * abs(yearDiff) to get our full diff
    let weekDifference = weekNumber - currentWeekNumber;
    refDate = incrementDay(refDate, (weekDifference * 7));
    return refDate; 
}


  
  function incrementDay(day, increments){
    return new Date(day.getTime() + (increments * 86400000));
  }

  export{incrementDay, getCurrentWeek, getWeekSpan, getReferenceDateInWeek, formatDate, formatShortDate}