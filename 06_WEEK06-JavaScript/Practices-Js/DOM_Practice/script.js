'use strict';

//Selecting Elements 
const btnClick=document.getElementById('myButton');
const div=document.getElementById('myDiv');

//Manipulations and Functionality
btnClick.addEventListener('click',function(){
    alert("You Clicked the Button! ");
    div.innerHTML="Div Content Changed 🤸🏽‍♀️ "; 
} );


