//ara fem que es moguin. 
//Encés funciona perquè seleccionem la primera imatge
//que trobem però no en sabem res més

function inicialitzaVehicle(nom){
    canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    var imatge = document.createElement('img');
    imatge.src = nom+'.webp';
    canvas.appendChild(imatge);
}

function encenMotor(){
    //això selecciona la primera imatge que tenim al canvas
    //ja sigui moto o cotxe
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