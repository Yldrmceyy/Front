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

  // Listening for click event on submit button
  submitNameButton.addEventListener("click", function () {
    const name = nameInput.value;
    if (name) {
      myNameSpan.textContent = name;
      inputSection.style.display = "none"; // Hiding the input section
      greeting.style.display = "block";
      myClock.style.display = "block";
      infoText.style.display = "block";
      updateTime();
    }
  });
  // Function to update the time
  function updateTime() {
    const date = new Date();
    const day = date.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const time = date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    myClock.setAttribute("class", "clock");
    myClock.innerText = `${day} ${time}`;
  }
  setInterval(updateTime, 1000); // Calling updateTime function every second to update the clock
});
