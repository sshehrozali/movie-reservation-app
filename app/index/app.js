// Global Seat counter
let seatCounter = 0;

// Add Seat
function addSeat() {
    seatCounter += 1;
    document.getElementById("text").innerText = "Total Seat Selected: " + seatCounter;
};

// Cancel Seat
function cancelSeat() {
    seatCounter -= 1;
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