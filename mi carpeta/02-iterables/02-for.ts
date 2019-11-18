// es un iterable
// for
// 1) declarar una variable
// 2) condiciones (Expresion)
// 3) Incrementar, Disminuir
for (let numeroExDeMiCrush = 7; numeroExDeMiCrush != 0; numeroExDeMiCrush --) {     // >0 OK  >=0 False   // <=6  < 7
console.log("ES CAN DA LO!", numeroExDeMiCrush);
}

for (let numeroExDeMiCrush = 0; numeroExDeMiCrush <= 6; numeroExDeMiCrush ++) {     // >0 OK  >=0 False
    console.log("ES CAN DA LO!", numeroExDeMiCrush);
    }
for (let numeroExDeMiCrush  = 0; numeroExDeMiCrush < 7; numeroExDeMiCrush ++) {     // >0 OK  >=0 False
     console.log("ES CAN DA LO!", numeroExDeMiCrush);
    }
        

// ARREGLOS
// 1 Elemento ( Variable const numero = 1)
// Conjunto de elementos del mismo Elemento  ( [1,2,3,4,5] )
// Conjunto de diferentes elementos ([1, "abc", true])
const arregloNumeros = [1,2,3,4,5];
// arregloNumeros = [1,2,3,4,5,6];
arregloNumeros.push(6); // FUNCION 
console.log("arregloNumeros", arregloNumeros);
arregloNumeros.pop();
console.log("arregloNumeros", arregloNumeros);
// Acceder a un elemento del arreglo POR EL INDICE
const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; // 1 
arregloNumeros[0];
const indiceElementoCinco = 4;
arregloNumeros[indiceElementoCinco]; // 5
arregloNumeros[4];
// Acceder al elemento 5
// 1) INDICE
// 2) [1,2,3,4,5,6]
// 3) 0 1 2 3 4
// INDICES
console.log(arregloNumeros[indiceElementoCinco]);
// 5


// Arreglo 
// 1) Elementos
// 2) Indices ( 0 index based ) -> POSICION 
// 3) Longitud -> # Elementos
console.log(arregloNumeros.length);
// FOR 
// 1) let tamaño = arregloNumeros.length // 5
// 2) tamaño > 0
// 3) --
for (let tamaño = arregloNumeros.length > 0; arregloNumeros.length --)


// 1) Crear un arreglo de cinco elementos
const arreglo = [];
// 2) Cada elemento 1 o un 0
// Ej: [0,0,1,1,0]
// 3) Exista al menos un elemento "1"
// Ej: [0,0,0,0,0] NO ES VALIDO
// Ej: [0,0,0,0,1] Es valido
// Math.floor(Math.random()* 2) // [0,2[
// Math.floor(Math.random()* 10) // [0,11[
