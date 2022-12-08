import { checkBastu, checkOmkl, checkCourt } from "./bookingmethods";

function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function retrieveFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function retrieveBookings(bookingsKey){
  let bookings = retrieveFromLocalStorage(bookingsKey);
  if (bookings === "" || bookings === undefined || bookings === null) {
    bookings = [];
  }
  return bookings;
}

function appendBooking(booking) {
  //Splitting our "database" based on type, making subsequent checks a lot easier
  let bookings = retrieveBookings(booking.type);

  let bookable = canBook(booking);
  console.log(bookable);

  if(canBook(booking) === true)
  {
    console.log("saving to local")
    booking.id = "id" + Math.random().toString(16).slice(2);
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


export { appendBooking, canBook, retrieveBookings};
