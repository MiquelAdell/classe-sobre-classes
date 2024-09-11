function inicialitzaVehicle(nom){
    canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    var imatge = document.createElement('img');
    imatge.src = nom+'.webp';
    canvas.appendChild(imatge);
}

function encenMotor(){
    var imatge = document.querySelectorAll('#canvas img')[0]
    imatge.classList.add("ences");
}

function clickBotoCotxe(){
    inicialitzaVehicle('cotxe');
    encenMotor();
}

function clickBotoMoto(){
    inicialitzaVehicle('moto');
    encenMotor();
}

function ready(){
    // buit    
}
