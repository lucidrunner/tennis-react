import { intersects } from "./bookingmethods";

function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function retrieveFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function appendBooking(booking) {
  //Splitting our "database" based on type, making subsequent checks a lot easier
  let bookings = retrieveFromLocalStorage(booking.type);

  if (bookings === "" || bookings === undefined || bookings === null) {
    bookings = [];
  }

  let bookable = canBook(booking);
  console.log(bookable);

  if(canBook(booking) === true)
  {
    console.log("saving to local")
    bookings.push(booking);
    saveToLocalStorage(booking.type, bookings);
    return true;
  }
  return false;
}

function canBook(booking) {
  let bookings = retrieveFromLocalStorage(booking.type);
  if (bookings === "" || bookings === undefined || bookings === null) {
    bookings = [];
  }

  //Our types
  //courts (court 1 - 4)
  //bastu
  //omkl (herr / dam)
  //Each has to check if their type & rooms/court are the same
  //and if the time matches
  switch (booking.type) {
    case "courts":
      return checkCourt(booking, bookings);
    case "bastu":
      return checkBastu(booking, bookings);
    case "omkl":
      return checkOmkl(booking, bookings);
    default:
      return false;
  }
}

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


export { appendBooking, canBook };
