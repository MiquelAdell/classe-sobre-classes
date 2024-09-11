function clickBotoCotxe(){
}

function clickBotoMoto(){
}

function ready(){
}

function say(what){
    const element = document.getElementById("balloon");
    element.innerHTML = what;
}


document.addEventListener("DOMContentLoaded", function(e) {
    
    document.body.innerHTML = `<div class="holder">
            <div id="canvas"></div> 
            <div class="buttons">
                <button id="cotxe">Cotxe</button>
                <button id="moto">Moto</button>
            </div>
            <div id="balloon"></div>
        </div>`;
    
    if(false == botoCotxeEnabled){
        document.getElementById('cotxe').classList.add("disabled");    
    }
    if(false == botoMotoEnabled){
        document.getElementById('moto').classList.add("disabled");    
    }
    ready();
    document.getElementById('cotxe').addEventListener('click',function(){
        clickBotoCotxe();
    });
    
    document.getElementById('moto').addEventListener('click',function(){
        clickBotoMoto();
    });
});