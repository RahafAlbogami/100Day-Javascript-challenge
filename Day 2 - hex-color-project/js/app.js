var alphabet = ['a','b','c','d','e','f','1','2','3','4','5','6','7'
,'8','9','0'];

document.getElementById('btn').addEventListener('click', function(){

    var i, str ="#";
    for(i = 0; i< 6; i++){
        str += alphabet[Math.floor(Math.random()* 16)];
    }

    document.getElementById('hex-value').innerHTML = str;
    document.body.style.background = str;

})