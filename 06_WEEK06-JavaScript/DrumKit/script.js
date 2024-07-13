const kits = ["kick", "openhat", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  //created buttons
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerHTML = kit;
  containerEl.appendChild(btnEl);

  //created audio
  const audioEl = document.createElement("audio");
  containerEl.appendChild(audioEl);
  audioEl.src = "./sounds/" + kit + ".wav";

  //Adding event listener
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  //adding event listener for keys
  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform="scale(0.9)";
      

      setTimeout(()=>{
        btnEl.style.transform="scale(1)";
      },100);
    }
  });
});
