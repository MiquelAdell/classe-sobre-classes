//fem servir les variables de la classe
class Cotxe {

    constructor() {
        this.canvas = document.getElementById('canvas')
        this.canvas.innerHTML = "";
    
        this.imatge = document.createElement('img');
        this.imatge.src = 'cotxe.webp';
        this.canvas.appendChild(this.imatge);
    }

    encenMotor(){
        //d'on ha sortit aquest "this.imatge"? perquè s'en recorda?
        this.imatge.classList.add("ences");
    }

}


function ready(){
    var cotxe = new Cotxe();
    cotxe.encenMotor();
}
