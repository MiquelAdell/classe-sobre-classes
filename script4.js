function inicialitzaVehicle(nom){
    canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    var imatge = document.createElement('img');
    imatge.src = nom+'.webp';
    canvas.appendChild(imatge);
}

function clickBotoCotxe(){
    inicialitzaVehicle('cotxe');
}

function clickBotoMoto(){
    inicialitzaVehicle('moto');
}

function ready(){
    // buit    
}
