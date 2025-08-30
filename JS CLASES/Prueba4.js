//EJERCICIO 4//


function numeroaleatorio(min, max ) {

return Math.floor(Math.random() *(max - min + 1)) + min;
}
let Numero = prompt("Adivina un numero del 1 al 10")

let aleatorio=numeroaleatorio (1, 10);

if (Numero == aleatorio)
{
alert ("Ganaste joaa")
}
    
else {
 alert ("Perdiste el numero era " + aleatorio)
}
    