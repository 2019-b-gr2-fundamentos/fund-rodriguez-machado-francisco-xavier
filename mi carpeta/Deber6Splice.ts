//[0,0,1*7 + 2*6 + 3*5 + 4*4]
// 1) definir el tamaño 
// 2) repetir el calculo N veces (N = tamaño)
// 3.1) 1er elemnto del primer arreglo 
// 3.2) ultimo elemento del 2do elemento
// 3.3) sumar los elementos 
// 3.4) 1er elemento + 1 = 2do elemento 1er arreglo
// 3.5) ultimo elemento -1 = penultimo del 2do arreglo
// 3.6) sumar los elementos
const arregloDeCuatroTerminos = [1,2,3,4];
const m = arregloDeCuatroTerminos.length; 
console.log(arregloDeCuatroTerminos);
const elementoAñadido = 1.5;
const indiceDondeSeInsertaElElemento = 1;
arregloDeCuatroTerminos.push(elementoAñadido);
const nuevoElemento = arregloDeCuatroTerminos[m];
arregloDeCuatroTerminos[m] = arregloDeCuatroTerminos[m - 1];
arregloDeCuatroTerminos[m - 1] = arregloDeCuatroTerminos[m - 2];
arregloDeCuatroTerminos[m - 2] = arregloDeCuatroTerminos[m - 3];
arreglo[indiceDondeSeInsertaElElemento] = nuevoElemento;
console.log(arregloDeCuatroTerminos);
const indiceElementoAEliminar = 2;
arregloDeCuatroTerminos[m - 2] = arregloDeCuatroTerminos[m - 1];
arregloDeCuatroTerminos[m - 1] = arregloDeCuatroTerminos[m];
arregloDeCuatroTerminos[m] = arregloDeCuatroTerminos[indiceElementoAEliminar];
arregloDeCuatroTerminos.pop();
console.log(arregloDeCuatroTerminos);