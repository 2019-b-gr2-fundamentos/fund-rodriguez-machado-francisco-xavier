// NODE MODULE
// const sumaLibreria = require('william-zapata/lib/suma');
/*
Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'william-zapata'
*/
import * as sumaLibreria from 'librerias-f-r-m/lib/suma'
const respuesta1 = sumaLibreria(1,2);
console.log('La respuesta es: ',respuesta1);

import * as restaLibreria from 'calculadora_fr/resta'
const respuesta2 = restaLibreria(20,14);
console.log('La respuesta es: ',respuesta2);

import * as multiplicacionLibreria from 'calculadora_fr/multiplicacion'
const respuesta3 = multiplicacionLibreria(5,8);
console.log('La respuesta es: ',respuesta3);

import * as divisionLibreria from 'calculadora_fr/division'
const respuesta4 = divisionLibreria(5,8);
console.log('La respuesta es: ',respuesta4);

import * as ivaLibreria from 'calculadora_fr/iva'
const respuesta5 = ivaLibreria(510);
console.log('La respuesta es: ',respuesta5);

import * as PromedioDosNumerosLibreria from 'calculadora_fr/PromedioDosNumeros'
const respuesta6 = PromedioDosNumerosLibreria(20,10);
console.log('La respuesta es: ',respuesta6);

import * as VolumenCuboLibreria from 'calculadora_fr/VolumenCubo'
const respuesta7 = VolumenCuboLibreria(20);
console.log('La respuesta es: ',respuesta7);