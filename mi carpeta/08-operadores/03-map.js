"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function map(arregloOriginal, funcion) {
    var nuevoArreglo = [];
    var arreglo = __spreadArrays(arregloOriginal);
    for (var i = 0; i < arreglo.length; i++) {
        var clon = __spreadArrays(arreglo); // Crear un clon para iteracion 
        var respuestaFuncion = funcion(arreglo[i], i, __spreadArrays(arreglo));
        nuevoArreglo.push(respuestaFuncion);
    }
    return nuevoArreglo;
}
exports.map = map;
