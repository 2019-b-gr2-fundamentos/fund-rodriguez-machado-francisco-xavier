import * as prompts from './node_modules/prompts'
import {Perros} from './interface/razas-perros-interface'

async function perros(){

    const arregloPerros: Perros[]= [];
    const preguntas = [
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
            name: 'edad',
            message: 'Ingrese los anios de vida de su perro'
        },
        {
            type: 'number',
            name: 'Precio',
            message: 'Ingrese el precio de su perro al momento de comprarlo, si es adoptado mejor'
        },
        {
            type: 'text',
            name: 'color',
            message: 'Ingrese el color del pelaje de su Perro'
        }

    ] 
    async function agregarPerros(){
        let informacionPerros: Perros = await prompts(preguntas)
        arregloPerros.push(informacionPerros)
        opciones();
    }
    async function editarPerros(){
        let indice = await prompts({
            type: 'number',
            name: 'indice',
            message: 'Inserte el indice del aspecto del perro que desea editar'
        })
        if (indice.indice < arregloPerros.length){
            let caracteristicaAeditar = await prompts({
                type: 'text',
                name: 'caracteristica',
                message:'¿Que desea editar?' 
        })
        if 
        (caracteristicaAeditar.caracteristica == 'Raza'
        || caracteristicaAeditar.caracteristica == 'Pais de origen'
        || caracteristicaAeditar.caracteristica == 'edad' 
        || caracteristicaAeditar.caracteristica == 'Precio'
        || caracteristicaAeditar.caracteristica == 'color'){
        let nuevoValor = await prompts({
            type: 'text',
            name: 'valor',
            message: '¿Que desea insertar?'
         })   
         let perroElegido = arregloPerros[indice.indice]
                switch (caracteristicaAeditar.caracteristica){
                    case 'Nombre':
                        perroElegido.Raza = nuevoValor.valor
                        break;
                    case 'Pais de origen':
                        perroElegido.Pais = nuevoValor.valor
                        break;
                    case 'edad':
                        perroElegido.edad = nuevoValor.valor
                        break;
                    case 'Precio':
                        perroElegido.Precio = nuevoValor.valor
                        break; 
                    case 'color':
                        perroElegido.color = nuevoValor.valor
                        break;     
}
    opciones();
}else{
    console.log('La característica propuesta no existe')
    editarPerros()
     }
}else{
    console.log('El indice no existe, intentelo denuevo')
    editarPerros()
    }
};
async function opciones(){
    let opciones = await prompts({
        type: 'text',
        name: 'eleccion',
        message: 'Insertar nueva raza de perro --> 1 || Editar la raza ya existente--> 2 || eliminar --> 3 || salir -> 4 '
});
        switch(opciones.eleccion){    
            case '1':
                agregarPerros();
                break;
            case '2':
                editarPerros();
                break;  
            case '3':
                console.log(arregloPerros)  
                break; 
            default:
                console.log('la opcion no es valida, vuelvalo a intentar') 
                opciones();
                break;
        }
    }
    agregarPerros();    
    }
perros();