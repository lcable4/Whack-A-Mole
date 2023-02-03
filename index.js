let score = 0;
const scoreDisplay = document.getElementById('score');
const holes = document.getElementsByClassName("hole");
const gameArea = document.getElementById('whack-a-mole');

// Targets a random hole and toggles the mole in that specific div
setInterval(function () {
    let holeIndex = Math.floor(Math.random() * holes.length);
    holes[holeIndex].classList.toggle("mole")
}, 300);
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDisplay.innerText = score;    
    // we hit a mole!
  }
});