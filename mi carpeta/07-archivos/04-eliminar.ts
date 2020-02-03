import * as fs from 'fs';
export function eliminarArchivo(path:string, id: number): any{
    const resultado = fs.eliminateFileSync(
        path, 
        id,
        'utf-8' // CODIFICACION
    );
    return resultado;
}