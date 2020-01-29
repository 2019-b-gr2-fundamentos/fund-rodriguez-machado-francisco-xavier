import * as prompts from './node_modules/prompts'
import {Perros} from './interface/razas-perros-interface'
let id = 1;
let Perros: Perros[] = [];
async function crearDatosPerros(){
    const preguntasPerros = [
        {
            type: 'text',
            name: 'Raza',
            message: 'Ingrese la raza del Perro'
        },
        {
            type: 'text',
            name: 'Pais de origen',
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
        Color: respuestaPreguntas.color
    };
id = id + 1;
    Perros.push(nuevoRegistroPerros);
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
        console.log('ADIOS');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Perros:', Perros);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const PerrosidAEditar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del perro cuya informacion desea editar'
    });
    const idEncontrado = Perros.findIndex(
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
        Perros[idEncontrado].Raza = nuevaRaza.newRace;
    }else if(respuestaCampo == 'Pais'){
        const nuevoPais = await prompts({
            type: 'text',
            name: 'newCountry',
            message: 'Ingrese el nombre del pais que proviene su perro'
        });
        Perros[idEncontrado].Pais = nuevoPais.newCountry;
    }else if(respuestaCampo == 'Edad'){
        const nuevaEdad = await prompts({
            type: 'number',
            name: 'newAge',
            message: 'Ingrese la edad de su perro'
        });
        Perros[idEncontrado].Edad = nuevaEdad.newAge;
    }else if(respuestaCampo == 'precio'){
        const nuevoPrecio = await prompts({
            type: 'number',
            name: 'newPrice',
            message: 'Ingrese el nuevo precio de su mascota'
        });
        Perros[idEncontrado].Precio = nuevoPrecio.newPrice;
    }else if(respuestaCampo == 'color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'City',
            message: 'Ingrese el nuevo Color'
        });
        Perros[idEncontrado].Color = nuevoColor.color;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de los Perros actualizado es:', Perros);
    queDeseaHacer().then().catch();
    return Perros
};
async function eliminarRegistro(){
    const PerrosidAEliminar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del perro cuya informacion desea eliminar'
    });
    const idEncontrado = Perros.findIndex(
        function(valorActual){
        return valorActual.id ==  PerrosidAEliminar.id
        }
    );
    Perros.splice(idEncontrado, 1);
    console.log('El nuevo registro de Perros es:', Perros);
    queDeseaHacer().then().catch();
    return Perros
}
function main(){
    crearDatosPerros().then().catch();
}
main();