// 02 crud.ts create read update delate
// const prompts = require('prompts);
import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito(){  // Promesa

    // Paradigma de programacion 

    // SINCRONO vs ASINCRONO
    console.log('Inicio')
    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
    console.log(promesaEdad);
    promesaEdad
    .then(
        (datos)=>{
            console.log('datos', datos)
            // 
            // Codigo
            //
            const promesaNombre = prompts({
                type: 'string',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            })
        }
    )
    .catch(
        (error)=>{
            console.log('Error', error);
        }   
    )
    console.log(promesaEdad)
    console.log('Fin')

}
main();