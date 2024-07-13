const kits=["kick", "openhat", "snare", "tom"];

const containerEl=document.querySelector(".container");

kits.forEach((kit)=>{

    //created buttons
    const btnEl= document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerHTML=kit;
    containerEl.appendChild(btnEl);

    //created audio 
    const audioEl=document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src="sounds/" + kit + ".wav";
});