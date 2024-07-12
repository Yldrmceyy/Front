
//Bir button elementi oluşturun ve bu butona tıklandığında arka plan rengini değiştiren bir olay ekleyin.
//Bir input alanı oluşturun ve bu alana bir şeyler yazıldığında girilen değeri konsola yazdırın.


//Selecting Elements
const btnClick = document.getElementById("myButton");
const textInput = document.getElementById("myText");

//Adding button click event
btnClick.addEventListener("click", function (e) {
  btnClick.style.backgroundColor = "#373837";
});

//Adding event input
textInput.addEventListener('keydown',function(e){
    console.log(e.target.value);
})