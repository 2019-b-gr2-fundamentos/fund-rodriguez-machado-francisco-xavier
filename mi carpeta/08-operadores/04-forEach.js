"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(arreglo, funcion) {
    var arregloForEach = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
    }
    ;
}
exports.forEach = forEach;
;
