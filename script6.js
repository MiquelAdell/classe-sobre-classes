//ho fiquem tot dins d'una classe. Ja queda més endreçadet
//però encara hi ha coses que podem fer millor…
class Cotxe {

    constructor() {
        var canvas = document.getElementById('canvas')
        canvas.innerHTML = "";
    
        //aquí seleccionem la imatge
        var imatge = document.createElement('img');
        imatge.src = 'cotxe.webp';
        canvas.appendChild(imatge);
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
