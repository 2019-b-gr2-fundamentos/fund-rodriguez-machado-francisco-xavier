"use strict";
exports.__esModule = true;
var fs = require("fs");
function eliminarArchivo(path, id) {
    var resultado = fs.eliminarFileSync(path, id, 'utf-8' // CODIFICACION
    );
    return resultado;
}
exports.eliminarArchivo = eliminarArchivo;
