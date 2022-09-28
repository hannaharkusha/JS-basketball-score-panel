//timer
const timeMin = 90
let timeSec = timeMin*60

let display = document.getElementById('countdown')

myInterval = setInterval(timeUpdate,1000)

function timeUpdate(){
  let minutes = Math.floor(timeSec/60)
  let seconds = timeSec % 60
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  display.innerHTML =`${minutes}:${seconds}`
  timeSec--;
}

//stopper-restarter
const stopRestartButton = document.getElementById('stopRestart');
stopRestartButton.addEventListener("click", stop);

function stop(){
  stopRestartButton.textContent = 'RESTART';
  stopRestartButton.style = "width: 144px;";
  clearInterval(myInterval);
  stopRestartButton.removeEventListener("click", stop);
  stopRestartButton.addEventListener("click", restart);
}

function restart(){
  stopRestartButton.textContent = 'STOP';
  stopRestartButton.style = "width: 86px;";
  stopRestartButton.removeEventListener("click", restart);
  stopRestartButton.addEventListener("click", stop);
  myInterval = setInterval(timeUpdate,1000);
}

//buttonsHome
let displayHome = document.getElementById('homescore')
let countHome=0

function plusOneHome(){
  countHome+=1
  document.getElementById('homescore').textContent = countHome
}
function plusTwoHome(){
    countHome+=2
  document.getElementById('homescore').textContent = countHome
}
function plusThreeHome(){
    countHome+=3
  document.getElementById('homescore').textContent = countHome
}

//buttonsGuest
let displayGuest = document.getElementById('guestscore')
let countGuest=0

function plusOneGuest(){
  countGuest+=1
  document.getElementById('guestscore').textContent = countGuest
}
function plusTwoGuest(){
  countGuest+=2
  document.getElementById('guestscore').textContent = countGuest
}
function plusThreeGuest(){
  countGuest+=3
  document.getElementById('guestscore').textContent = countGuest
}
//times, styling
