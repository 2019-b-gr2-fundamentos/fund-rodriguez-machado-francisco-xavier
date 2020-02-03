var fs = require('fs');
function escribirArvhivo(path, contenido) {
    fs.writeFileSync(path, contenido, 'utf8' // CODIFICADOR
    );
}
exports.escribirArvhivo = escribirArvhivo;
