const container = document.querySelector('.container');
let selectedSeats = [];
let header = document.getElementById(message)
//


function updateSelectedCount() {
  
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  

//

  const selectedSeatsCount = selectedSeats.length;
  

  count.innerText = selectedSeatsCount;
  // total.innerText = selectedSeatsCount;
  
  
}

//

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
//
function selected(clicked_id)
  { 
    console.log(selectedSeats)
     selectedSeats.push(clicked_id)
     header.textContent = selectedSeats
      
      
  }





