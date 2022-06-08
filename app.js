const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYears = "1 Jan " + (currentYear + 1);

function  countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
};

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
