// Funcion recursiva
function imprimirMensajeMVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var numeroMensajeVeces = numeroVeces - 1;
        imprimirMensajeMVeces(mensaje, numeroMensajeVeces);
    }
}
function main() {
    imprimirMensajeMVeces('hola', 3);
}
function imprimirArregloDeDiezElementos(arregloNumeros, indice) {
    if (arregloNumeros === void 0) { arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; }
    if (indice == 0) {
        console.log('fin');
    }
    function imprimir(arregloNumeros) {
    }
    function main() {
        imprimirArregloDeDiezElementos("1");
    }
}
