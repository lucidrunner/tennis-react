
function saveToLocalStorage(key, item){
    localStorage.setItem(key, JSON.stringify(item));
}

function retrieveFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

function appendBooking(booking){
    console.log("saving booking")
    const bookingKey = "bookings";
    let bookings = retrieveFromLocalStorage(bookingKey);

    if(bookings === "" || bookings === undefined || bookings === null){
        bookings = [];
    }
    bookings.push(booking);
    saveToLocalStorage(bookingKey, bookings);
    console.log("saving booking")
}

export default appendBooking;