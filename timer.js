//25 Minute Timer
const startingMinutes1 = 25;
let time1 = startingMinutes1 * 60;
const initial1 = startingMinutes1 * 60;
var button1 = document.getElementById("startbtn1");
var title1 = document.getElementById("timer1");
var reset1 = document.getElementById("resetbtn1");
var myInterval1 = -1;

const countdownEl1 = document.getElementById('countdown1');

button1.addEventListener("click", function(event) {
  //if paused, start
  if (myInterval1 == -1) {
    button1.innerHTML = "Pause";
    myInterval1 = setInterval(function updateCountdown() {
      const minutes1 = Math.floor(time1 / 60);
      let seconds1 = time1 % 60;

      seconds1 = seconds1 < 10 ? '0' + seconds1 : seconds1;
      time1 = time1 < 0 ? 0:time1;

      countdownEl1.innerHTML = `${minutes1}:${seconds1}`;
      time1 !== 0 ? time1-- : time1;
    }, 1000);
  }
  //if started, pause
  else {
    button1.innerHTML = "Start";
    clearInterval(myInterval1);
    myInterval1 = -1;
  }
});

reset1.addEventListener("click", function(event) {
    clearInterval(myInterval1);
    countdownEl1.innerHTML = `${initial1 / 60}`+ ':00';
    time1 = initial1;
    button1.innerHTML = "Start";
});






//5 Minute Timer
const startingMinutes2 = 5;
let time2 = startingMinutes2 * 60;
const initial2 = startingMinutes2 * 60;
var button2 = document.getElementById("startbtn2");
var title2 = document.getElementById("timer2");
var reset2 = document.getElementById("resetbtn2");
var myInterval2 = -2;

const countdownEl2 = document.getElementById('countdown2');

button2.addEventListener("click", function(event) {
  //if paused, start
  if (myInterval2 == -2) {
    button2.innerHTML = "Pause";
    myInterval2 = setInterval(function updateCountdown() {
      const minutes2 = Math.floor(time2 / 60);
      let seconds2 = time2 % 60;

      seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
      time2 = time2 < 0 ? 0:time2;

      countdownEl2.innerHTML = `${minutes2}:${seconds2}`;
      time2 !== 0 ? time2-- : time2;
    }, 1000);
  }
  //if started, pause
  else {
    button2.innerHTML = "Start";
    clearInterval(myInterval2);
    myInterval2 = -2;
  }
});

reset2.addEventListener("click", function(event) {
    clearInterval(myInterval2);
    countdownEl2.innerHTML = `${initial2 / 60}`+ ':00';
    time2 = initial2;
    button2.innerHTML = "Start";
});