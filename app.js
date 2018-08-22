/*

Crear un algoritmo que permita determinar
la calificacion en letras de un alumno.

Si la nota se encuentra entre 100 a 90 = A
Si la nota se encuentra entre 80 a 89 = B
Si la nota se encuentra entre 70 a 79 = C
Si la nota se encuentra entre 60 a 69 = D
Si la nota es inferior a 60 = F

*/

let nota = 90;

let calificacion = "N";

if (nota >= 90) {

    calificacion = "A";

} else if (nota >= 80) {

    calificacion = "B";

} else if (nota >= 70) {

    calificacion = "C";

} else if (nota >= 60) {

    calificacion = "D";

} else {

    calificacion = "F";
}

console.log(`La calificacion obtenida es ${calificacion}`);