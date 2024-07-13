const kits=["kick", "openhat", "snare", "tom"];

const containerEl=document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEl= document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerHTML=kit;
    containerEl.appendChild(btnEl);

    
});