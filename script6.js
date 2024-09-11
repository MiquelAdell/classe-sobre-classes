//ho fiquem tot dins d'una classe. Ja queda més endreçadet
//però encara hi ha coses que podem fer millor…
class Cotxe {

    constructor() {
        netejaCarretera();
    
        //aquí seleccionem la imatge
        var imatge = document.createElement('img');
        imatge.src = 'cotxe.webp';
        carretera.appendChild(imatge);
    }

    encenMotor(){
        //hem de tornar a seleccionar la imatge
        var imatge = document.querySelectorAll('#carretera img')[0];
        imatge.classList.add("ences");
    }

}


function ready(){
    //explicar que "new cotxe ja fa la incialització"
    var cotxe = new Cotxe();
    cotxe.encenMotor();
}
