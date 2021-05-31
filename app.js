const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;

// Update total and count
const updateSelectedCount = () =>{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// Movie selection event
movieSelect.addEventListener('change', (e)=>{
    ticketPrice = e.target.value;
    updateSelectedCount();

})



// Seat selection event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && e.target.classList.contains('occupied')) {
        console.log('seat is occupied');
    } else {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }

})