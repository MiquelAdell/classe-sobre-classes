class Cotxe {

    constructor() {
        this.canvas = document.getElementById('canvas')
        this.canvas.innerHTML = "";
    
        var imatge = document.createElement('img');
        imatge.src = 'cotxe.webp';
        this.canvas.appendChild(imatge);
    }

    encenMotor(){
        //hem de tornar a seleccionar la imatge
        var imatge = document.querySelectorAll('#canvas img')[0];
        imatge.classList.add("ences");
    }

}


function ready(){
    //explicar que "new cotxe ja fa la incialització"
    var cotxe = new Cotxe();
    cotxe.encenMotor();
}
