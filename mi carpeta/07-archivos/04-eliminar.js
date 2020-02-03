var fs = require('fs');
function eliminarArchivo(path, id) {
    var resultado = fs.eliminateFileSync(path, id, 'utf-8' // CODIFICACION
    );
    return resultado;
}
exports.eliminarArchivo = eliminarArchivo;
