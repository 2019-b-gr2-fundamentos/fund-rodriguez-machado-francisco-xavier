"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArvhivo(path, contenido) {
    fs.writeFileSync(path, //PATH
    contenido, // CONTENIDO
    'utf8' // CODIFICADOR
    );
}
exports.escribirArvhivo = escribirArvhivo;
