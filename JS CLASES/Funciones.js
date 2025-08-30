//funciones declaradas//

//function saludar(nombre){
//     alert("Hola, "+ nombre)
//}

//nombre= prompt("Ingresa tu nombre");

//saludar(nombre);

//funciones expresadas//

//const saludar = function saludar(nombre){
//    console.log ("hola " + nombre)
  //  alert ("hola " + nombre)
//}

//nombre=prompt ("ingrese su nombre");

//saludar(nombre);

//FUNCION SUMA//

//function suma(a , b){
//    return  a + b;
//}

// a = parseInt ( prompt ("ingresa el valor a"))
// b = parseInt (prompt ("ingrese el valor b"))

 //console.log (suma (a , b))


 //FUNCION OPERACIONES CON SWITCH//



 function realizaroperacion (a , b, operacion) {
    switch (operacion) {
      
        case "sumar":
            return  a + b
            
        break;
        case "restar":
            return  a - b
            
        break;

        case "multiplicar":
            return  a * b
            
        break;
        case "dividir":
            if (b !== 0) {
                return a / b;
            } else {
                return "No se puede dividir por cero";
            }
        break;

        default:
           console.log ("operacion no valida");
    }
 }   

let operacion = prompt ("que operacion desea utilizar,(sumar , restar, multiplicar o dividir) si deseas salir escribe salir")  //siempre usa let cuando vas a definir una NUEVA VARIABLE

    let a = parseInt (prompt ("ingrese el valor a"))
    let b = parseInt (prompt ("ingrese el valor b"))

while (operacion !== "salir") {
    console.log ("el resultado de la operacion es " + realizaroperacion (a , b, operacion))
    operacion = prompt ("que operacion desea utilizar,(sumar , restar, multiplicar o dividir) si deseas salir escribe salir")
    a = parseInt (prompt ("ingrese el valor a"))
    b = parseInt (prompt ("ingrese el valor b"))
}