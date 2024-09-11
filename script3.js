function inicialitzaMoto(){
    canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    var imatge = document.createElement('img');
    imatge.src = 'moto.webp';
    canvas.appendChild(imatge);
}

function inicialitzaCotxe(){
    canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    var imatge = document.createElement('img');
    imatge.src = 'cotxe.webp';
    canvas.appendChild(imatge);
}

function clickBotoCotxe(){
    inicialitzaCotxe();
}

function clickBotoMoto(){
    inicialitzaMoto();
}