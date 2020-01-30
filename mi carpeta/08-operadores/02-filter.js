"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numUno, numDos) {
    var valorInicial = 10;
    return funcion(numUno, numDos);
}
exports.calcular = calcular;
function sumar(numUno, numDos, valorInicial) {
    return numUno + numDos;
}
exports.sumar = sumar;
;
function restar(numUno, numDos) {
    return numUno - numDos;
}
exports.restar = restar;
;
calcular(sumar, 1, 2); // 3
calcular(restar, 5, 3); // 2
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // -> Valor Actual
        i, // -> indice
        arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
        ;
    }
    ;
    return arregloFiltrado;
}
exports.filter = filter;
;
