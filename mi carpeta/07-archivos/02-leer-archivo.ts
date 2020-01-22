import * as  fs from 'fs' ;

export function leerArchivo(path:string): string {
    const resultado = fs.readFileSync(
        path, // PATH
         'utf-8' // CONDIFICACION
    )
return resultado;
}