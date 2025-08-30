function Operacioncalculadora (a , b, Operacion){
    if  (operacion === "sumar"){
        return a + b;
    }
    else if (operacion === "restar"){
        return a - b ;
    }
    else if (operacion === "multiplicar"){
        return a * b ;
    }
    else if (operacion === "dividir") {
        if (b !==o) {
            return a / b ;

        } else {
            return "esta operacion no se puede realizar";
        }
        }
       else {
        return "operacion no valida" ;
       }
    }
    
    let operacion = prompt ( "que operacion desea utilizar, (sumar ,restar, multiplicar o dividir)")
    let a = parseInt (prompt ("ingrese el valor a"))
    let b = parseInt (prompt ("ingrese el valor b"))
    console.log (Operacioncalculadora (a , b, Operacion))
    
    