//DOM fully loaded before the script runs
document.addEventListener("DOMContentLoaded", () => {
  //Current date and time
  const now = new Date();

  //Load the alarm sound
  const alarmSound = new Audio("alarm.mp3");

  //Clock constructor
  function Clock(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.alarmHours = null;
    this.alarmMinutes = null;
  }

  //Time format
  Clock.prototype.getFormattedTime = function () {
    let hours = this.hours % 12 || 12;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    let minutes = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    let seconds = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
    let ampm = this.hours >= 12 ? "PM" : "AM";
    return { hours, minutes, seconds, ampm };
  };

  //Set the alarm
  Clock.prototype.setAlarm = function (alarmHours, alarmMinutes) {
    this.alarmHours = alarmHours;
    this.alarmMinutes = alarmMinutes;
    alert(`Alarm set for ${alarmHours}:${alarmMinutes}`);
  };

  //Check the alarm
  Clock.prototype.checkAlarm = function () {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    //Check the current time matches the alarm time
    if (
      this.alarmHours !== null &&
      currentHours === this.alarmHours &&
      currentMinutes === this.alarmMinutes &&
      currentTime.getSeconds() === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Function to display time
  function displayClock(clock) {
    const formattedTime = clock.getFormattedTime();
    document.getElementById("hours").textContent = formattedTime.hours;
    document.getElementById("minutes").textContent = formattedTime.minutes;
    document.getElementById("seconds").textContent = formattedTime.seconds;
    document.getElementById("ampm").textContent = formattedTime.ampm;
  }

  //clock instance creation
  const clock = new Clock(now.getHours(), now.getMinutes(), now.getSeconds());

  //Set the alarm button
  document.getElementById("set-alarm").addEventListener("click", function () {
    const alarmHours = parseInt(
      document.getElementById("alarm-hours").value,
      10
    );
    const alarmMinutes = parseInt(
      document.getElementById("alarm-minutes").value,
      10
    );
    clock.setAlarm(alarmHours, alarmMinutes);
  });

  //Function to update clock every seconds
  function updateClock() {
    const currentTime = new Date();
    clock.hours = currentTime.getHours();
    clock.minutes = currentTime.getMinutes();
    clock.seconds = currentTime.getSeconds();
    displayClock(clock);

    // Check if the alarm should go off
    if (clock.checkAlarm()) {
      alarmSound.play();
      alert("Wake up!!!");
    }

    setTimeout(updateClock, 1000);
  }

  updateClock();
});
