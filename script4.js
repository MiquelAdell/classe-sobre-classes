//però no volem repetir codi
function inicialitzaVehicle(nom){
    netejaCarretera();

    var imatge = document.createElement('img');
    imatge.src = nom+'.webp';
    carretera.appendChild(imatge);
}

function clickBotoCotxe(){
    inicialitzaVehicle('cotxe');
}

function clickBotoMoto(){
    inicialitzaVehicle('moto');
}