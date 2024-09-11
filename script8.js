class Vehicle {

    constructor(nom) {
        this.nom = nom;
        this.canvas = document.getElementById('canvas')
        this.canvas.innerHTML = "";
    
        this.imatge = document.createElement('img');
        this.imatge.src = this.nom+'.webp';
        this.canvas.appendChild(this.imatge);
    }

    encenMotor(){
        this.imatge.classList.add("ences");
    }

}


function ready(){
    document.getElementById('cotxe').addEventListener('click',function(){
        var cotxe = new Vehicle('cotxe');
        cotxe.encenMotor();
    });

    document.getElementById('moto').addEventListener('click',function(){
        var moto = new Vehicle('moto');
        moto.encenMotor();
    });
}
