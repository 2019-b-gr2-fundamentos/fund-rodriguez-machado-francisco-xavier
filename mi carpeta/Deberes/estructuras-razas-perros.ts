import * as prompts from './node_modules/prompts'
import {Perros} from './interface/razas-perros-interface'
import{leerArchivo} from '../../mi carpeta/07-archivos/02-leer-archivo';
import{escribirArchivo} from 'C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/03-escribir-archivo';

let id = 0;
const contenidoArchivo = leerArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt');
let arregloPerrosCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoAid = 0;
    arregloPerrosCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.Pid;
                if(idActual > minimoAid){
                    minimoAid = idActual;
                }
            }
        );
    minimoAid = minimoAid + 1;
            id = minimoAid;

let perrosArregloPropio: Perros[] = arregloPerrosCargadoDeArchivo;

async function crearDatosPerros(){
    const preguntasPerros = [
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
    const respuestaPreguntas = await prompts(preguntasPerros);
    const nuevoRegistroPerros = {
        id: id,
        Raza: respuestaPreguntas.Raza,
        Pais: respuestaPreguntas.Pais,
        Edad: respuestaPreguntas.Edad,
        Precio: respuestaPreguntas.Precio,
        Color: respuestaPreguntas.Color,
        
    };
id = id + 1;
    perrosArregloPropio.push(nuevoRegistroPerros);
    const perrosStringeado = JSON.stringify(perrosArregloPropio);
    escribirArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt', perrosStringeado);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosPerros().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('Hasta la vista perros');
    }else{
        console.log('Elija una opcion valida, no sea mudo');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Perros:', perrosArregloPropio);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const PerrosidAEditar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del perro cuya informacion desea editar'
    });
    const idEncontrado = perrosArregloPropio.findIndex(
        function(valorActual){
        return valorActual.id == PerrosidAEditar.id
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea editar?'
    });
    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Raza'){
        const nuevaRaza = await prompts({
            type: 'text',
            name: 'newRace',
            message: 'Ingrese el nombre de la nueva raza'
        });
        perrosArregloPropio[idEncontrado].Raza = nuevaRaza.newRace;
    }else if(respuestaCampo == 'Pais'){
        const nuevoPais = await prompts({
            type: 'text',
            name: 'newCountry',
            message: 'Ingrese el nombre del pais que proviene su perro'
        });
        perrosArregloPropio[idEncontrado].Pais = nuevoPais.newCountry;
    }else if(respuestaCampo == 'Edad'){
        const nuevaEdad = await prompts({
            type: 'text',
            name: 'newAge',
            message: 'Ingrese la edad de su perro'
        });
        perrosArregloPropio[idEncontrado].Edad = nuevaEdad.newAge;
    }else if(respuestaCampo == 'Precio'){
        const nuevoPrecio = await prompts({
            type: 'number',
            name: 'newPrice',
            message: 'Ingrese el nuevo precio de su mascota'
        });
        perrosArregloPropio[idEncontrado].Precio = nuevoPrecio.newPrice;
    }else if(respuestaCampo == 'Color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'newColor',
            message: 'Ingrese el nuevo newColor'
        });
        perrosArregloPropio[idEncontrado].Color = nuevoColor.newColor;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de los Perros actualizado es:', perrosArregloPropio);
    queDeseaHacer().then().catch();
    return perrosArregloPropio
};
async function eliminarRegistro(){
    const PerrosidAEliminar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del perro cuya informacion desea eliminar'
    });
    const idEncontrado = perrosArregloPropio.findIndex(
        function(valorActual){
        return valorActual.id ==  PerrosidAEliminar.id
        }
    );
    perrosArregloPropio.splice(idEncontrado, 1);
    const registroBorrado = JSON.stringify(perrosArregloPropio);
    escribirArchivo('C:/Users/USREPS/Documents/GitHub/fund-rodriguez-machado-francisco-xavier/mi carpeta/07-archivos/ejemplo.txt', registroBorrado);
    console.log('El nuevo registro de Perros es:', perrosArregloPropio);
    queDeseaHacer().then().catch();
    return perrosArregloPropio
}
function main(){
    crearDatosPerros().then().catch();
}
main();