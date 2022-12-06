
//Checks if two bookings intersect each other
function intersects(bookingA, bookingB) {
  //First, if the bookings are on different days, they're not gonna intersect
  if (bookingA.timeDate !== bookingB.timeDate) {
    return false;
  }
  //Same date and time, return true
  if (bookingA.timeSlot === bookingB.timeSlot) {
    return true;
  }

  //The reason this function looks like this is because I messed up if it should
  //return true or false and spent 1 hour writing 4-5 different versions of it
  const bookingATimes = bookingA.timeSlot.split("-");
  const bookingBTimes = bookingB.timeSlot.split("-");

  //Parse all of our times to int to make this a lot easier
  bookingATimes[0] = parseInt(bookingATimes[0]);
  bookingATimes[1] = parseInt(bookingATimes[1]);
  bookingBTimes[0] = parseInt(bookingBTimes[0]);
  bookingBTimes[1] = parseInt(bookingBTimes[1]);

  if (
    (bookingATimes[0] > bookingBTimes[0] &&
      bookingATimes[0] < bookingBTimes[1]) ||
    (bookingATimes[1] > bookingBTimes[0] && bookingATimes[1] < bookingBTimes[1])
  ) {
    //Intersect 1 - first is within second
    return true;
  } else if (
    (bookingBTimes[0] > bookingATimes[0] &&
      bookingBTimes[0] < bookingATimes[1]) ||
    (bookingBTimes[1] > bookingATimes[0] && bookingBTimes[1] < bookingATimes[1])
  ) {
    //Intersect 2 - second is within first
    return true;
  }

  //If no intersection- return false
  return false;
}

//Gives us both the Start / End time as Date() for the given booking
function getBookingDateSpan(booking) {
  const start = parseBookingDate(booking.timeDate, booking.timeSlot, true);
  const end = parseBookingDate(booking.timeDate, booking.timeSlot, false);
  //Return the start and end times of the provided booking
  return { start: start, end: end };
}

//Parses our date / time into a Date() (either the end or start of the provided time)
function parseBookingDate(bookingDate, bookingTime, compareStart = true) {
  //Since all of our times are formatted like 8 - 10 etc,
  //we can split to get our start / end times
  const times = bookingTime.split("-");
  const date = new Date(bookingDate);
  date.setHours(times[0]);
  if (!compareStart) {
    date.setHours(times[1]);
  }
  return date;
}

function getWeekSpan(){
    let weekStart =  new Date();
    weekStart.setHours(0,0,0,0);
    weekStart.setDate(weekStart.getDate() - (weekStart.getDay() - 1));
    let weekEnd = new Date();
    weekEnd.setHours(0,0,0,0);
    weekEnd.setDate(weekStart.getDate() + 7);
    
    return {weekStart: weekStart, weekEnd: weekEnd}
}

function getCurrentWeek(){
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


// VALIDITY CHECKS
//For courts, check if it's the same court and intersection
function checkCourt(booking, bookings) {
    let valid = true;
    bookings.forEach((element) => {
      if (element.omklRoom === booking.omklRoom && intersects(element, booking)) {
        valid = false;
      }
    });
    return valid;
  }
  
  //Bastu is a simple intersects check, if any of the times intersect the bastu is booked
  function checkBastu(booking, bookings) {
    let valid = true;
    bookings.forEach((element) => {
      if (intersects(element, booking)) {
        valid = false;
      }
    });
    return valid;
  }
  
  //For omkl, we need to also check if the room is the same before our time check
  function checkOmkl(booking, bookings) {
    let valid = true;
    bookings.forEach((element) => {
      if (element.omklRoom === booking.omklRoom && intersects(element, booking)) {
        valid = false;
      }
    });
    return valid;
  }
  //I am aware that the [] property syntax would have let me do this in a single method if I wanted to :P
  

export { intersects, getBookingDateSpan, getCurrentWeek, getWeekSpan, parseBookingDate, checkBastu, checkOmkl, checkCourt };
