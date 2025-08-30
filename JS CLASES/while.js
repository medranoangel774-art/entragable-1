function numeroaleatorio(min, max ) {

return Math.floor(Math.random() *(max - min + 1)) + min;
}
let Numero = prompt("Adivina un numero del 1 al 10")

let aleatorio=numeroaleatorio (1, 10);

while (Numero != aleatorio) {

alert ("perdon el numero era " + aleatorio)
Numero = prompt("Adivina un numero del 1 al 10")

}

alert ("ganaste")
