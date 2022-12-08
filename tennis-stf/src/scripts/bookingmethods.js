import { retrieveBookings } from "./datahandling";

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

//Gives us both the Start / End time as Date() bundled together
function getBookingDateSpan(booking) {
  const start = parseBookingDate(booking.timeDate, booking.timeSlot, true);
  const end = parseBookingDate(booking.timeDate, booking.timeSlot, false);
  return { start: start, end: end };
}

//Parses our date / time into a Date(), either the start or finish time depending on the compareStart parameter
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

function getWeekSpan() {
  let weekStart = new Date();
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - (weekStart.getDay() - 1));
  let weekEnd = new Date();
  weekEnd.setHours(0, 0, 0, 0);
  weekEnd.setDate(weekStart.getDate() + 7);

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

//Wraps getDailyOverview for each court / room / the bastu bookings
function getAllOverviews(date = new Date()) {

  let overview = {};
  
  //Load our bookings for the news-part
  const courtBookings = retrieveBookings("courts");
  const bastuBookings = retrieveBookings("bastu");
  const omklBookings = retrieveBookings("omkl");

  //add bastu first because it's easy
  overview["bastu"] = getDailyOverview(bastuBookings, null, date);
  if(overview["bastu"] === ""){
    overview["bastu"] = "Alla tider lediga."
  }
  
  //Two omklädningsrum to consider so we need to pass them their sub-filter
  for (let index = 0; index < 2; index++) {
    let id = (index === 0 ? "herr" : "dam");
    overview[`omkl${id}`] = getDailyOverview(omklBookings, {name: "omklRoom", value: id}, date);
    if(overview[`omkl${id}`] === ""){
      overview[`omkl${id}`] = "Alla tider lediga.";
    }
  }

  //And four courts
  for (let index = 0; index < 4; index++) {
    //Remember - courts are saved 1-4, index is 0-3
    let id = index + 1;
    overview[`court${id}`] = getDailyOverview(courtBookings, {name: "court", value: `court-${id}`}, date);
    if(overview[`court${id}`] === "" ){
      overview[`court${id}`] = "Alla tider lediga."
    }
  }

  return overview;
}



function getDailyOverview(booking, propertyFilter = null, date = new Date()) {
  //Based on the loaded booking-array, filter for entries with the given date and construct the overview based on that
  let filteredBookings = booking;
  let overview = "";

  //Get our yyyy-mm-dd for the provided date / today
  const checkedDate = formatDate(date);

  //Filter our bookings to only match today
  filteredBookings = filteredBookings.filter((entry) => {
    if (entry.timeDate === checkedDate) {
      return true;
    }
    return false;
  });

  //Also providing the possibility to subfilter for a property {name, value} to be able to access specific rooms / courts
  if (propertyFilter !== null) {
    filteredBookings = filteredBookings.filter((entry) => {
      if (entry[propertyFilter.name] === propertyFilter.value) {
        return true;
      }
      return false;
    });
  }

  //Finally, time to get a represenation of our times remaining in the filteredBookings
  let splitTimes = [];
  filteredBookings.forEach((entry) => {
    //Split our time x - y and parse each part back into an int
    let split = entry.timeSlot.split("-");
    splitTimes.push(parseInt(split[0]), parseInt(split[1]));
  });

  //One final step, sort our times into segments and remove any duplicates (e.g  8, 10, 10, 12, 16, 18 should parse into [8,12][16, 18])
  splitTimes = splitTimes.sort((a, b) => a - b);
  let segments = [];
  let startElement = 0;
  let prevElement = 0;
  console.log("starting a new split now")
  for (let index = 0; index < splitTimes.length; index++) {
    const element = splitTimes[index];
    if (startElement === 0) {
      startElement = element;
    } else if (prevElement !== element && prevElement !== startElement) {
      segments.push([startElement, element]);
      startElement = 0;
    }
    prevElement = element;
  }



  //If no times have been found, return "" and handle it on the other end;
  if (segments.length === 0) {
    return "";
  }

  //Otherwise, build our printout
  for (let index = 0; index < segments.length; index++) {
    const segment = segments[index];
    overview = overview + segment[0].toString() + " - " + segment[1].toString();
    if (index + 1 !== segments.length) {
      overview = overview + ", ";
    }
  }

  return overview;
}

// VALIDITY CHECKS
//For courts, check if it's the same court and intersection
function checkCourt(booking, bookings) {
  let valid = true;
  bookings.forEach((element) => {
    if (element.court === booking.court && intersects(element, booking)) {
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

export {
  intersects,
  getBookingDateSpan,
  getCurrentWeek,
  getWeekSpan,
  parseBookingDate,
  checkBastu,
  checkOmkl,
  checkCourt,
  formatDate,
  getAllOverviews,
  getDailyOverview,
};
