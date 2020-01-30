export function calcular(funcion, numUno, numDos){
    const valorInicial = 10;
    return funcion(numUno, numDos);
}
export function sumar(numUno, numDos, valorInicial){
    return numUno + numDos;
};
export function restar(numUno, numDos){
    return numUno - numDos;
};
calcular(sumar, 1, 2); // 3
calcular(restar, 5, 3); // 2







export function filter(
    arreglo: any[],
    funcion: (
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => boolean
): any[] {
    const arregloFiltrado = [];
    for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i], // -> Valor Actual
            i, // -> indice
            arreglo, // -> 
        ); 
        if(respuestaFuncion == true){
            arregloFiltrado.push(arreglo[i]);
        };
    };
    return arregloFiltrado;
};