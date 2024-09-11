//ara fem que es moguin. 
//Encés funciona perquè seleccionem la primera imatge
//que trobem però no en sabem res més
function inicialitzaVehicle(nom){
    netejaCarretera();

    var imatge = document.createElement('img');
    imatge.src = nom+'.webp';
    carretera.appendChild(imatge);
}

function encenMotor(){
    //això selecciona la primera imatge que tenim al carretera
    //ja sigui moto o cotxe
    var imatge = document.querySelectorAll('#carretera img')[2];
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