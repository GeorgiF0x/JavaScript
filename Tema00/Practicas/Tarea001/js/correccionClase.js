const MAX = 100;
const MIN = 1;
 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
 
function adivinarNum(){
    let conta=1; //contador de veces
    const aleatorio = getRandomInt(MIN,MAX);
    console.log("Número oculto: "+aleatorio);
    
    let opcion = window.prompt("Adivina un número entre "+MIN+" y "+MAX);
    while( opcion != aleatorio && opcion != null) {
        if (opcion > aleatorio ) {
            window.alert("Te has pasado, pon un valor menor");
        } else {
            window.alert("Corto, pon un valor MAYOR");
        }
 
        conta++;
        opcion = window.prompt(`Van ${conta} intentos. Escribe número:`);
    }
       
    if (opcion==aleatorio) {
        window.alert("ENHORABUENA, EL NÚMERO ES CORRECTO!");
        window.alert("Número acertado: "+aleatorio+"   Intentos: "+conta);
    }
    if (opcion==null) {
        window.alert("Final. Has cancelado el juego.");
        window.alert("Número buscado: "+aleatorio+"   Intentos: "+conta);
    }
 
}
 
adivinarNum();