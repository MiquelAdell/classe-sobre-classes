class Cotxe {

    constructor() {
        this.canvas = document.getElementById('canvas')
        this.canvas.innerHTML = "";
    
        this.imatge = document.createElement('img');
        this.imatge.src = 'cotxe.webp';
        this.canvas.appendChild(this.imatge);
    }

    encenMotor(){
        this.imatge.classList.add("ences");
    }

}


function ready(){
    document.getElementById('cotxe').addEventListener('click',function(){
        var cotxe = new Cotxe();
        cotxe.encenMotor();
    });
}
