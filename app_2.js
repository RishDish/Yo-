var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
}
var CheckDeath = setInterval(function(){
    var CharTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var BlockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(BlockLeft<20 && BlockLeft>0 && CharTop>=130){
        block.style.display = "none";
        block.style.animation = "none";
        alert("Game Over Refresh to try again");
    }
}, 10); 