"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("./node_modules/prompts");
var _02_leer_archivo_1 = require("../../mi carpeta/07-archivos/02-leer-archivo");
var _03_escribir_archivo_1 = require("C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/03-escribir-archivo");
var id = 0;
var contenidoArchivo = _02_leer_archivo_1.leerArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt');
var arregloPerrosCargadoDeArchivo = JSON.parse(contenidoArchivo);
var minimoAid = 0;
arregloPerrosCargadoDeArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.Pid;
    if (idActual > minimoAid) {
        minimoAid = idActual;
    }
});
minimoAid = minimoAid + 1;
id = minimoAid;
var perrosArregloPropio = arregloPerrosCargadoDeArchivo;
function crearDatosPerros() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntasPerros, respuestaPreguntas, nuevoRegistroPerros, perrosStringeado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntasPerros = [
                        {
                            type: 'text',
                            name: 'Raza',
                            message: 'Ingrese la raza del Perro'
                        },
                        {
                            type: 'text',
                            name: 'Pais',
                            message: 'Ingrese el pais de origen de su perro'
                        },
                        {
                            type: 'number',
                            name: 'Edad',
                            message: 'Ingrese los anios de vida de su perro'
                        },
                        {
                            type: 'number',
                            name: 'Precio',
                            message: 'Ingrese el precio de su perro al momento de comprarlo, si es adoptado mejor'
                        },
                        {
                            type: 'text',
                            name: 'Color',
                            message: 'Ingrese el color del pelaje de su Perro'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntasPerros)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroPerros = {
                        id: id,
                        Raza: respuestaPreguntas.Raza,
                        Pais: respuestaPreguntas.Pais,
                        Edad: respuestaPreguntas.Edad,
                        Precio: respuestaPreguntas.Precio,
                        Color: respuestaPreguntas.Color,
                    };
                    id = id + 1;
                    perrosArregloPropio.push(nuevoRegistroPerros);
                    perrosStringeado = JSON.stringify(perrosArregloPropio);
                    _03_escribir_archivo_1.escribirArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt', perrosStringeado);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
;
function queDeseaHacer() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosPerros().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarRegistro().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('Hasta la vista perros');
                    }
                    else {
                        console.log('Elija una opcion valida, no sea mudo');
                        queDeseaHacer().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Registro de Perros:', perrosArregloPropio);
            queDeseaHacer().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var PerrosidAEditar, idEncontrado, queDeseaEditar, respuestaCampo, nuevaRaza, nuevoPais, nuevaEdad, nuevoPrecio, nuevoColor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id del perro cuya informacion desea editar'
                    })];
                case 1:
                    PerrosidAEditar = _a.sent();
                    idEncontrado = perrosArregloPropio.findIndex(function (valorActual) {
                        return valorActual.id == PerrosidAEditar.id;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que campo desea editar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaCampo = queDeseaEditar.campoAEditar;
                    if (!(respuestaCampo == 'Raza')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newRace',
                            message: 'Ingrese el nombre de la nueva raza'
                        })];
                case 3:
                    nuevaRaza = _a.sent();
                    perrosArregloPropio[idEncontrado].Raza = nuevaRaza.newRace;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'Pais')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newCountry',
                            message: 'Ingrese el nombre del pais que proviene su perro'
                        })];
                case 5:
                    nuevoPais = _a.sent();
                    perrosArregloPropio[idEncontrado].Pais = nuevoPais.newCountry;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'Edad')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newAge',
                            message: 'Ingrese la edad de su perro'
                        })];
                case 7:
                    nuevaEdad = _a.sent();
                    perrosArregloPropio[idEncontrado].Edad = nuevaEdad.newAge;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'Precio')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'newPrice',
                            message: 'Ingrese el nuevo precio de su mascota'
                        })];
                case 9:
                    nuevoPrecio = _a.sent();
                    perrosArregloPropio[idEncontrado].Precio = nuevoPrecio.newPrice;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'Color')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newColor',
                            message: 'Ingrese el nuevo newColor'
                        })];
                case 11:
                    nuevoColor = _a.sent();
                    perrosArregloPropio[idEncontrado].Color = nuevoColor.newColor;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese un campo valido');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de los Perros actualizado es:', perrosArregloPropio);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, perrosArregloPropio];
            }
        });
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var PerrosidAEliminar, idEncontrado, registroBorrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id del perro cuya informacion desea eliminar'
                    })];
                case 1:
                    PerrosidAEliminar = _a.sent();
                    idEncontrado = perrosArregloPropio.findIndex(function (valorActual) {
                        return valorActual.id == PerrosidAEliminar.id;
                    });
                    perrosArregloPropio.splice(idEncontrado, 1);
                    registroBorrado = JSON.stringify(perrosArregloPropio);
                    _03_escribir_archivo_1.escribirArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt', registroBorrado);
                    console.log('El nuevo registro de Perros es:', perrosArregloPropio);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, perrosArregloPropio];
            }
        });
    });
}
function main() {
    crearDatosPerros().then().catch();
}
main();
