const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    1
]



function compararMatrices(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean{
    return true; 
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | false{
    // VALIDACIONES
    const esValido = verificarSiTodosLosElemnetosDeUnArrregloSonArrreglos(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;    
    }else{
        return false;
    }
}
function obtenerSegundaDimension( matrizUno: number[][]): number | false{
    const esValido = verificarSiTodosLosElemnetosDeUnArrregloSonArrreglos(matrizUno);
    let longitudActualMax= 0; // Auxiliar
    let longitudActualMin= -1; // Auxiliar
    for (let i = 0; i< matrizUno[i].length; i++){
        const elementoActual = matrizUno[i]; // arreglo 
        const longitudActual= elementoActual.length; // segunda dimension
        if( longitudActualMax < longitudActual){
            longitudActualMax = longitudActual;
        }
        if( longitudActual < longitudActualMin && longitudActualMin >= 0){
            longitudActualMax = longitudActual;{

            }else if (longitudActualMin == 1){
                else if (longitudActualMin == 1)
            }
    }

}
function verificarSiTodosLosElemnetosDeUnArrregloSonArrreglos(arreglo : any[]){
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return  false;

        } 
    }
    return true
}






function main(){
 //   campararMatriz()
} 