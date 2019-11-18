// 1) Crear un arreglo de cinco elementos
//const arreglo = []; 
// 2) Cada elemento 1 o un 0
// Ej: [0,0,1,1,0]
// 3) Exista al menos un elemento "1"
// Ej: [0,0,0,0,0] NO ES VALIDO
// Ej: [0,0,0,0,1] Es valido
// Math.floor(Math.random()* 2) // [0,2[
// Math.floor(Math.random()* 10) // [0,11[
// Math.floor(Math.random()* 2) // [0,2[
const arreglo = [];
for (arreglo.length = 0; arreglo.length < 4; arreglo.length ++){
    arreglo.push(Math.floor(Math.random()* 2));
    console.log(arreglo)
}