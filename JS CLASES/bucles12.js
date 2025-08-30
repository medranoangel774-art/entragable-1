//FOR//
//for (let i = 1; i <= 10; i++)  {
   // console.log("repite repite",i);                          // imprimir numeros del 1 al 10 (ciclo)
//} 


//for (let i = 2; i <= 20; i += 2) {
   //console.log(i) ;                       // ciclo numeros pares del 2 al 20
//}



//for (let i = 10; i >= 1 ; i--) {
//    console.log("estas en la repe", i)     //ciclo de numeros del 10 al 1
//}


// let suma = 0
//for (let i = 1; i <= 100 ; i ++) {
//   suma += i;                               //ciclo de cuando sumas todos los numeros del 1 al 100
//}

//console.log ("la suma es", + suma)


//WHILE//
//let j = 1
//while (j<4){
//   console.log(j)
//j++}  


//recorrer un arreglo
//let array = ["casa","pintura","sol"]
//for (let i =0; i < array.length; i++) {
   //console.log (array[i])
//}


//Contraseña
let contra = "123"
let Contraseña ="123"

do {
contra = prompt ("digite su contraseña por favor")
}

while (contra !== Contraseña);


//otro
array=[4,5,3,2,4,5]
suma = 0
for (let i =0; i < array.length; i++) {

   suma =suma+array[i]
}
console.log("la suma es", suma)
promedio= suma /array.length
console.log("el promedio es", promedio)