import * as fs from 'fs'

export function escribirArvhivo(path: string, contenido: string){
    fs.writeFileSync(
        path, //PATH
        contenido,  // CONTENIDO
        'utf8' // CODIFICADOR
    );  
}