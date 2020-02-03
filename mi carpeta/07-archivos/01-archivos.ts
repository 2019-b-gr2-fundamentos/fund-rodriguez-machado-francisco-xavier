import { leerArchivo } from "./02-leer-archivo";
import { escribirArvhivo } from "./03-escribir-archivo";
import { Estudiante } from "./estudiante.interface";
import * as prompts from 'prompts';
async function main(){
    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo)
    // parsear -> texto -> Estructura de memoria
    /*
    {
        "nombre" : "Francisco"
    }
    <universidad>
    <facultad></facultad>
    </universidad>
    */
   let arregloCargadoDeArchivo; // undifined
   try{
    arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
   } catch (error){
       arregloCargadoDeArchivo = [];
       console.log('Error parseando archivo')
       
   }
   let minimoId = -1
   arregloCargadoDeArchivo.forEach(   // no envia nada y no devuelve nada
    // itera
       function(valorActual) {
           const idActual = valorActual.id;
           if(idActual> minimoId){
               minimoId = idActual
           }
       
   });
   minimoId = minimoId + 1;
   contador = minimoId;
   /*try{
       console.log('1');
       console.log('2');
       //SyntaxError
    let a = 1;
    let a = 2;
    let a = 3; // ESTA MAL
    console.log(12313121321321354154545646666666666666465456666666666666666666666666666666666666666666666666666666648768456454165465454564)
    throw new ReferenceError("EL ARCHIVO ESTA MAL PARSEADO")
    console.log('4');
    console.log('5');
   }catch(error){
    console.log(':3');
   }
   */
    console.log('contenidoArchivo', contenidoArchivo);
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

const arregloTexto = JSON.stringify(arregloEstudiantes);
// JASON.stringify -> convertir objeto o arreglo en memoria
console.log(arregloTexto);
escribirArvhivo('./ejemplo.txt',arregloTexto);
contador = contador + 1




    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArvhivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
*/
}

main().then().catch();