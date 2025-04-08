"use strict";

const elP = document.querySelector("p");

function countdownTimer(seconds) {
  let minute = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  const interval = setInterval(() => {
    if (minute < 0) {
      clearInterval(interval);
      return;
    }

    elP.textContent = `${minute < 10 ? "0" : ""}${minute}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;

    --remainingSeconds;

    if (remainingSeconds < 0) {
      remainingSeconds = 59;
      --minute;
    }
  }, 1000);
}
countdownTimer(87);
