// Global Seat counter
let seatCounter = 0;
let remainingSeats = 0;

// Add Seat
function addSeat() {
    seatCounter += 1;   // Update Seat Counter
    remainings = 60 - seatCounter;      // Count remaining seats

    document.getElementById("bookings").innerText = seatCounter;        // Update Booked seats

    let remainingSeats = document.getElementById("remainings");
    remainingSeats.innerText = remainings;      // Update remainings seats

    document.getElementById("text").innerText = "Total Seat Selected: " + seatCounter;
};

// Cancel Seat
function cancelSeat() {
    seatCounter -= 1;
    remainings = 60 - seatCounter;      // Count remaining seats

    document.getElementById("bookings").innerText = seatCounter;        // Update Booked seats

    let remainingSeats = document.getElementById("remainings");
    remainingSeats.innerText = remainings;      // Update remainings seats

    document.getElementById("text").innerText = "Total Seat Selected: " + seatCounter;
};

// Select Seat
function seatSelect(seatNo) {
    let seatCheckbox = document.getElementById(seatNo);     // Select the seat from seat no.

    // If Seat is checked
    if (seatCheckbox.checked == true) {
        console.log(`Seat Added: ${seatNo}`);
        addSeat();
    }

    // If Seat is not checked
    if (seatCheckbox.checked == false) {
        console.log(`Seat Cancelled ${seatNo}`);
        cancelSeat();
    }
}