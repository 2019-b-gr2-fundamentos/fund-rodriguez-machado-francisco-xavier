import { leerArchivo } from "./02-leer-archivo";
import { escribirArvhivo } from "./03-escribir-archivo";
import { Estudiante } from "./estudiante.interface";
import * as prompts from 'prompts';
async function main(){
    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo);
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante[]=arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno ={
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador= contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos ={
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador= contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log('Cual usuario quieres Editar')
    console.log(arregloEstudiantes);

    // OPERADORES!!! -> REEMPLAZAN AL !FOR! 

    const idABuscar = await prompts(
        {
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'  
        }
    )

   const indiceEncontrado = arregloEstudiantes.findIndex( //  return CONDICION -> 
        function(valorActual, indice, arreglo){
            // console.log(valorActual);
            // console.log(indice);
            // console.log(arreglo);
            return valorActual.id == idABuscar.id; // Nos Devuelve el INDICE
        } // Si encuntra nos devueñve el indice
          // No encuentra
    )
        console.log('Indice Encotrado', indiceEncontrado);

        const nombreAEditar = await prompts(
            {
                type: 'text',
                name: 'nombre',
                message: 'Ingresa el nuevo nombre'  
            }
        )
        arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
        console.log(arregloEstudiantes);
    

        const buscar = await prompts(
            {
                type: 'text',
                name: 'nombre',
                message: 'Ingresa por ID o el Nombre'  
            }
        );

        const estudianteEncontrado = arregloEstudiantes.find( // return CONDICION
            function(valorActual){
                return valorActual.nombre == buscar.nombre;
            }
            );
            console.log(estudianteEncontrado);







    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArvhivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
*/
}

main().then().catch();