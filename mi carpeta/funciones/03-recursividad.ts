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



function imprimirArregloDeDiezElementos(
    indice: number[] =[1,2,3,4,5,6,7,8,9,10]
    : string
):void{
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
