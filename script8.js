//la classe vehicle ens serveix per cotxes i motos
//què pass amb nom?
class Vehicle {

    constructor(nom) {
        this.nom = nom;
        netejaCarretera();
    
        this.imatge = document.createElement('img');
        this.imatge.src = this.nom+'.webp';
        this.carretera.appendChild(this.imatge);
    }

    encenMotor(){
        this.imatge.classList.add("ences");
    }

}

function clickBotoCotxe(){
    var cotxe = new Vehicle('cotxe');
    cotxe.encenMotor();
}

function clickBotoMoto(){
    var moto = new Vehicle('moto');
    moto.encenMotor();
}