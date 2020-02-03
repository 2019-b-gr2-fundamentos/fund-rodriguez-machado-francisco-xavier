import * as fs from 'fs';
export function eliminarArchivo(path:string, id: number): any{
    const resultado = fs.eliminarFileSync(
        path, 
        id,
        'utf-8' // CODIFICACION
    );
    return resultado;
}