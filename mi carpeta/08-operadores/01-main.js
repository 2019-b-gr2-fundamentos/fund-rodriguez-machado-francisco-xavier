"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filter_1 = require("./02-filter");
var _05_Some_1 = require("./05-Some");
var _04_forEach_1 = require("./04-forEach");
var _03_map_1 = require("./03-map");
var _06_Reduce_1 = require("./06-Reduce");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Francisco", nota: 10 },
        { id: 2, nombre: "Xavier", nota: 9 },
        { id: 3, nombre: "Ariel", nota: 3 },
        { id: 4, nombre: "William", nota: 9 },
        { id: 5, nombre: "Karen", nota: 7.7 },
    ];
    // OPERADOR -> FOREACH
    // ENVIAMOS -> NADA
    // RECIBIMOS -> NADA
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
        valorActual.nota20 = valorActual.nota * 2;
    });
    console.log(respuestaForEach); // undefined
    // Map -> Transformar el arreglo (Mutar el arreglo)
    // ENVIAMOS -> valorActual modificado
    // RECIBIMOS -> nuevo arreglo con valores modificados
    var respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta MAP', respuestaMap);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // Filter -> Filtra el arreglo 
    // ENVIAMOS -> CONDICION
    // RECIBIMOS -> Nuevo arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 2;
        // Condicion es un TRUTY O UN TRUE
        return condicion7 || condicion5;
    });
    console.log('respuestaFilter', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // AND, OR  
    // AND -> every(todos cumplan) / OR -> some(uno cumpla)
    // Some -> Devuelvo verdadero o falso dependinedo de la conicion
    //         SI ALGUNO CUMPLE DEVUELVE TRUE
    //         SI NINGUNO CUMPLE DEVUELVE FALSE
    // ENCIAMOS -> CONDICION
    // RECIBIR -> Booleano
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 7;
        // CONDICION TRUTY O TRUE
        return condicion;
    });
    console.log('respuestaSome', respuestaSome);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // Every -> Devuelvo verdadero o falso dependinedo de la conicion
    //         SI TODOS CUMPLE LA CONDICION DEVUELVE TRUE
    //         SI  ALGUNO NO CUMPLE DEVUELVE LA CONDICION FALSE
    // ENCIAMOS -> CONDICION
    // RECIBIR -> Booleano
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota >= 3;
        return condicion;
    });
    console.log('respuestaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // Reduce -> Devuelve un valor con el calculo aplicado
    // ENVIAMOS -> CALCULO
    // RECIBIMOS -> VALOR
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // valor inicial del acumulador
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        console.log('Valor:', valorActual);
        console.log('Indice:', i);
        console.log('Arreglo:', arr);
        return valorActual.nota >= 7;
    });
    console.log('respuestaFilterNuestro', respuestaFilterNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaSomeNuestro = _05_Some_1.some(arregloEstudiantes, function (valorActual, i, arr) {
        console.log('Valor:', valorActual);
        console.log('Indice:', i);
        console.log('Arreglo:', arr);
        return valorActual.nota <= 3;
    });
    console.log('respuestaSomeNuestro', respuestaSomeNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaForEachNuestro = _04_forEach_1.forEach(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(valorActual.nota);
    });
    console.log('respuestaForEachNuestro', respuestaForEachNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var repuestaNuestroMap = _03_map_1.map(arregloEstudiantes, function (valorActual, i, arr) {
        var nuevoArreglo = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            notaProcesada: valorActual.nota * 2
        };
        return nuevoArreglo;
    });
    console.log('respuestaNuestroMap', repuestaNuestroMap);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaNuestroReduce = _06_Reduce_1.reduce(arregloEstudiantes, function (acumulador, valorActual) {
        var operacion = acumulador + valorActual.nota;
        return operacion;
    });
    console.log('respuestaNuestroReduce', respuestaNuestroReduce);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaNuestroEvery = arregloEstudiantes.every(function (valorActual, i, arr) {
        return valorActual.nota <= 1;
    });
    console.log('RespuestaNuestroEvery: ', respuestaNuestroEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
}
main();
