// Funcion recursiva
function imprimirMensajeMVeces(
    mensaje: string,
    numeroVeces: number
): void{
    if(numeroVeces == 0){
        console.log('Se termino')
    }else{
        console.log(mensaje)
        const numeroMensajeVeces = numeroVeces - 1;
        imprimirMensajeMVeces(mensaje, numeroMensajeVeces);
    }
    


}
function main(){
    imprimirMensajeMVeces('hola', 3)
}


/*
function imprimirArregloDeDiezElementos(arreglo: number[], numeroIndice: number){
    if(indice){
        console.log('fin')
    }else{
        console.log(indice)
    }
   function imprimir(arregloNumeros : number[]){

   }
   function main(){
       imprimirArregloDeDiezElementos("1")
   }
    }
*/
    const arregloDosDimensiones =  
[
    [1,2,3,4],
    [5,6,7,8] // indice y longitud 
];
// multiplicar el 0 * n elemento +
// multiplicar el 0 + 1 * n - 1 elemento +
// multiplicar el 0 + 2 * n - 2 elemento +
//arregloDosDimensiones[0][0] // 1
//arregloDosDimensiones[0][1] // 2
//arregloDosDimensiones[1][0] // 3
//arregloDosDimensiones[1][1] // 4
    // return[0,0,]
   console.log(arregloDosDimensiones[0], length);
   console.log(arregloDosDimensiones[1], length);
let tamañoArreglo1= (arregloDosDimensiones[0],length);
let tamañoArreglo2= (arregloDosDimensiones[1],length);
let m = 0;
let indice = arregloDosDimensiones[0][m];
let w = arregloDosDimensiones[];
let indice1= arregloDosDimensiones[0][w]
for(indice; indice <= arregloDosDimensiones[0].length; indice ++){
    for(m!=0; m<=3; m++){
    }
    console.log(indice)

}

   

//[0,0,1*7 + 2*6 + 3*5 + 4*4]

// 1) definir el tamaño 
// 2) repetir el calculo N veces (N = tamaño)
// 3.1) 1er elemnto del primer arreglo 
// 3.2) ultimo elemento del 2do elemento
// 3.3) sumar los elementos 
// 3.4) 1er elemento + 1 = 2do elemento 1er arreglo
// 3.5) ultimo elemento -1 = penultimo del 2do arreglo
// 3.6) sumar los elementos
