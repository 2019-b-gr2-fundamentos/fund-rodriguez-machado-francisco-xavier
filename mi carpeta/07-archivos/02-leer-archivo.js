var fs = require('fs');
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, 'utf-8' // CONDIFICACION
    );
    return resultado;
}
exports.leerArchivo = leerArchivo;
