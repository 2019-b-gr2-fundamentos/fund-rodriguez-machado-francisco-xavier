const arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
// Acceder <---
// Necesito: Indice
console.log(arregloNumeros[6]); // 7
// Añadir al final  <---
// Necesito: El elemento a añadirse
arregloNumeros.push(11);
// Borrar al final 
arregloNumeros.pop();
// Añadir en un indice 
// Necesito: Indice
//           Elemento
arregloNumeros.splice(1,0,1.2);
console.log(arregloNumeros);
//Borrar elementos en el indice
arregloNumeros.splice(6, 1);
console.log(arregloNumeros);
// BUSCAR INDICE DE UN ELEMENTO! :D
console.log(arregloNumeros.indexOf(5));  // 5 ----> Para leer un lugar en especifico del arreglo 
console.log(arregloNumeros.indexOf(7)); // ----> Para leer un lugar en especifico del arreglo 
console.log(arregloNumeros.indexOf(11)); // ----> Para leer un lugar en especifico del arreglo 
arregloNumeros[0] = 999;   // ---> Cambiar un elemento del arreglo
console.log(arregloNumeros);





















































/*
crear un arreglo
crear un indice 
leer todos los elementos 
seleccionar el elemento cambiar
comprobar otra vez el elemento a cambiar  
fin 
*/