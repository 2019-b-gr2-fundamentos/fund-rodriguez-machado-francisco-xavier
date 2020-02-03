export function map(
    arregloOriginal: any[],
    funcion: (
        valorActual: any, 
        indice?: number,
        arreglo?: any[]) => any
): any[] {
    const nuevoArreglo = [];
    const arreglo = [...arregloOriginal]
    for(let i = 0; i < arreglo.length; i++ ){
        const clon = [...arreglo] // Crear un clon para iteracion 
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            [...arreglo], // Clon del clon para que juegue el programador
        );
        nuevoArreglo.push(respuestaFuncion);
    }
    return nuevoArreglo;
}