// 02-crud.ts create read update delete
// const prompts = require('prompts');

// npm uninstall -g tsc
// npm install -g typescript
import * as prompts from 'prompts';
import { RespuestaEdad } from './respuesta-edad.interface';
import { RespuestaNombre } from './respuesta-nombre.interface';
import { RespuestaCedula } from './respuesta-cedula.interface';

function main(){
   // obtenerDatosAnimalPerrito(); // Asincrona
    obtenerDatosAnimalPerritoSincrona()
    .then()
    .catch(); // -> Promesa / Sincrona
}
function obtenerDatosAnimalPerrito(){  //
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
    console.log(promesaEdad);
    promesaEdad
        .then( // OK
          (datos)=>{
              console.log('datos',datos); // AQUI PUEDO SEGUIR
              ////
                const promesaNombre = prompts({ // PROMESA
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre?'
                });
                promesaNombre
                    .then( // OK
                        (datosNombre)=>{
                            console.log('Nombre', datosNombre); // AQUI PUEDO SEGUIR
                        }
                    )
                    .catch( // =( 
                        (error)=>{
                            console.log('Error',error);
                        }
                    );
              ///
          }
        )
        .catch( // =( 
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}
main();



async function obtenerDatosAnimalPerritoSincrona(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    const edad: RespuestaEdad = await prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
      const nombre: RespuestaNombre = await prompts({ // PROMESA
        type: 'text',
        name: 'nombre',
        message: 'Puedes darme tu nombre?'
      });
      const cedula: RespuestaCedula = await prompts({ // PROMESA
        type: 'number',
        name: 'cedula',
        message: 'Puedes darme tu cedula?'
      });
    console.log('Edad', edad.edad);
    console.log('Nombre', nombre.nombre);
    console.log('Cedula', cedula.cedula);

    console.log('Fin');
}
main();