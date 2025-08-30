alert("hola Hijueputa"); /**suelta una Alerta */


/**EJERCICIO 1 */

let nota=prompt ("ingrese una nota"); // prompt para ingresar una linea de texto en la consola
 
nota=parseInt(nota) //con esto convierto el valor nota en un entero



if (nota >= 90) {
  alert("Ganaste con honores");
  }
  if(nota >= 70 && nota < 90) {
    alert ("Aprobaste");
  }
else {
    alert("perdiste");
}