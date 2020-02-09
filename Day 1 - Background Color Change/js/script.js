
// Rahaf Albogami 
// Day1 JavaScript Projects for beginners Challenge 
var colors = ['blue','red','purple','yellow','pink'];
document.body.style.background = colors[4];

document.getElementById('ClickButton').addEventListener('click', function(){

    var i = (Math.floor(Math.random() * 5));
    document.body.style.background = colors[i];
})