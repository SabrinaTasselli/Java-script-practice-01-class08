/*
a- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
y sino un alerta con el mensaje “Lower than 0,5”
*/
var a = Math.random();
console.log(a);
if (a >= 0.5) {
    theNumberIs = "Greater than 0,5";
} else {
    theNumberIs = "Lower than 0,5";
}
console.log(theNumberIs);
/*
b- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los 
siguientes mensajes de alerta:
    i- “Bebe” si la edad es menor a 2 años
    ii- “Nino” si la edad es entre 2 y 12 años
    iii- “Adolecente” si la edad es entre 13 y 19 años
    iv- “Joven” si la edad está entre 20 y 30 años
    v- “Adulto” entre 31 y 60 años
    vi- “Adulto mayor” entre 61 y 75 años
    vii- “Anciano” si es mayor a 75 años
*/
var age = 80;
if (age < 2) {
    console.log("La persona es un" + " " + "Bebe");
}else if ((age >= 2) && (age <= 12)) {
    console.log("La persona es un" + " " + "Nino");
}else if ((age >= 13) && (age <= 19)) {
    console.log("La persona es un" + " " + "Adolescente");
}else if ((age >= 20) && (age <= 30)) {
    console.log("La persona es un" + " " + "Joven");
}else if ((age >= 31) && (age <= 60)) {
    console.log("La persona es un" + " " + "Adulto");
}else if ((age >= 61) && (age <= 75)) {
    console.log("La persona es un" + " " + "Adulto mayor");
}else {
    console.log("La persona es un" + " " + "Anciano");
}
    