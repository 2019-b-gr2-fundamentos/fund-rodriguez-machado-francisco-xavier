import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./estudiante.interface";
import * as prompts from 'prompts';
async function main(){

    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenido Archivo:', contenidoArchivo);

     // Parsear es transformar de texto a una estructura en memoria
    /*
    {
        "nombre": "Adrian"
    }
    <universidad>
        <facultad></facultad>
    </universidad>
    */ 
    let  arregloCargadoDeArchivo; // undefined
    try{
       arregloCargadoDeArchivo = JSON
       .parse(contenidoArchivo);
    }catch(error){
        arregloCargadoDeArchivo = [];
        console.error('Error parseando archivo');
    }

    let contador = 1;
    
    // OPERADORES
    let minimoId = -1;
    arregloCargadoDeArchivo
        .forEach( // NO ENVIAN NADA Y NO SE DEVUELVE NADA
                // SIRVE SOLO PARA ITERAR 
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual;
                }
            }
        );
    minimoId = minimoId + 1;
            contador = minimoId;
    /*
    }
    try{
        console.log('1');
        console.log('2');
        console.log('3');
        // Syntax Error
        var a = b;
        console.log()
        //throw new Error("EL ARCHIVO ESTA MAL PARSEADO");
        console.log('4');
        console.log('5');
    }catch(error){
        console.log(error);
        console.log(':3');
    }
    */
    
    
    
    
    
    
    
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    //console.log(respuestaEstudianteUno);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);
    
    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    //console.log(respuestaEstudianteDos);

    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log('Cual usuario quieres editar?');
    console.log(arregloEstudiantes);
    
    // OPERADORES!!!! REEMPLAZAR AL FOR

    const idABuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el id del registro a editar'
    });

    const indiceEncontrado = arregloEstudiantes.findIndex( //return CONDICION    
        function (valorActual, indice, arrelgo){
            //console.log(valorActual);
            //console.log(indice);
            //console.log(arrelgo);
            return valorActual.id == idABuscar.id; // Nos devuelve el indice
        } // Si encuentra nos devuelve el indice
          // No encuentra
    );
    console.log('Indice encontrado:', indiceEncontrado);

    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    });
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });

    const estudianteEcontrado = arregloEstudiantes.find( // return condicion
        function(valorActual){
            return valorActual.nombre == buscar.nombre;
        }
    );
    console.log(estudianteEcontrado);

    const arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
    );
    contador = contador + 1;

    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const  nuevoContenido = 'Tengo Hambre :( \n ';
    escribirArchivo('./ejemplo.txt','');
    console.log(textoLeido + nuevoContenido);
    */


}

main().then().catch();