"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //Selecting Elements
  const nameInput = document.getElementById("nameInput");
  const submitNameButton = document.getElementById("submitName");
  const inputSection = document.querySelector(".input-section");
  const greeting = document.getElementById("greeting");
  const myNameSpan = document.getElementById("myName");
  const myClock = document.getElementById("myClock");
  const infoText = document.getElementById("infoText");

  submitNameButton.addEventListener("click", function () {
    const name = nameInput.value;
    if (name) {
      myNameSpan.textContent = name;
      inputSection.style.display = "none"; //hide content and button divs
      greeting.style.display = "block";
      myClock.style.display = "block";
      infoText.style.display = "block";
      updateTime();
    }
  });

  function updateTime() {
    var date = new Date();
    var day = date.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    var time = date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    myClock.setAttribute("class", "clock");
    myClock.innerText = day + " " + time;
  }
  setInterval(updateTime, 1000);
});
