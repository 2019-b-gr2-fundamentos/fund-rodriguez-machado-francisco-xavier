// NODE MODULE
// const sumaLibreria = require('william-zapata/lib/suma');
/*
Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'william-zapata'
*/
var sumaLibreria = require('librerias-f-r-m/lib/suma');
var respuesta1 = sumaLibreria(1, 2);
console.log('La respuesta es: ', respuesta1);
var restaLibreria = require('calculadora_fr/lib/resta');
var respuesta2 = restaLibreria(20, 14);
console.log('La respuesta es: ', respuesta2);
var multiplicacionLibreria = require('calculadora_fr/lib/multiplicacion');
var respuesta3 = multiplicacionLibreria(5, 8);
console.log('La respuesta es: ', respuesta3);
var divisionLibreria = require('calculadora_fr/lib/division');
var respuesta4 = divisionLibreria(5, 8);
console.log('La respuesta es: ', respuesta4);
var ivaLibreria = require('calculadora_fr/lib/iva');
var respuesta5 = ivaLibreria(510);
console.log('La respuesta es: ', respuesta5);
var PromedioDosNumerosLibreria = require('calculadora_fr/lib/PromedioDosNumeros');
var respuesta6 = PromedioDosNumerosLibreria(20, 10);
console.log('La respuesta es: ', respuesta6);
var VolumenCuboLibreria = require('calculadora_fr/lib/VolumenCubo');
var respuesta7 = VolumenCuboLibreria(20);
console.log('La respuesta es: ', respuesta7);
var PI = require('calculadora_fr/lib/pi');
console.log('la respuesta es', PI);
