//TODO move these to their own script
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

function getBookingDateSpan(booking) {
  const start = parseBookingDate(booking.timeDate, booking.timeSlot, true);
  const end = parseBookingDate(booking.timeDate, booking.timeSlot, false);
  //Return the start and end times of the provided booking
  return { start: start, end: end };
}

function parseBookingDate(bookingDate, bookingTime, compareStart = true) {
  //Since all of our times are formatted like 8 - 10 etc,
  //we can split to get our start / end times
  const times = bookingTime.split("-");
  const date = new Date(bookingDate);
  date.setHours(times[0]);
  if (!compareStart) {
    date.setHours(times[1]);
  }
  console.log(date);
  return date;
}

export { intersects, getBookingDateSpan, parseBookingDate };
