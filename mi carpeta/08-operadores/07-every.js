"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function every(notas) {
    var verdaderoOFalso = false;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i].nota < 7) {
            verdaderoOFalso = false;
        }
    }
    return verdaderoOFalso;
}
exports.every = every;
;
