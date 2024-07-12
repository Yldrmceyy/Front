// Div elementlerini seçme
const outerDiv = document.querySelector('.outer');
const middleDiv = document.querySelector('.middle');
const innerDiv = document.querySelector('.inner');

// Her div elementine tıklama olayı ekleme
outerDiv.addEventListener('click', function(event) {
    console.log('Outer Div clicked');
});

middleDiv.addEventListener('click', function(event) {
    console.log('Middle Div clicked');
});

innerDiv.addEventListener('click', function(event) {
    console.log('Inner Div clicked');
    // Olay yayılımını durdurma
    event.stopPropagation();
});