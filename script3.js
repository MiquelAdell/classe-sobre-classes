//ho hem endreçat una mica però encara estic duplicant el codi
function inicialitzaMoto(){
    netejaCarretera();
    
    var imatge = document.createElement('img');
    imatge.src = 'moto.webp';
    carretera.appendChild(imatge);
}

function inicialitzaCotxe(){
    netejaCarretera();

    var imatge = document.createElement('img');
    imatge.src = 'cotxe.webp';
    carretera.appendChild(imatge);
}

function clickBotoCotxe(){
    inicialitzaCotxe();
}

function clickBotoMoto(){
    inicialitzaMoto();
}