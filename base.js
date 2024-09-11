function clickBotoCotxe(){
}

function clickBotoMoto(){
}

function ready(){
}


document.addEventListener("DOMContentLoaded", function(e) {
    ready();
    document.getElementById('cotxe').addEventListener('click',function(){
        clickBotoCotxe();
    });
    
    document.getElementById('moto').addEventListener('click',function(){
        clickBotoMoto();
    });
});