var 02_leer_archivo_1 = require("./02-leer-archivo");
var 03_escribir_archivo_1 = require("./03-escribir-archivo");
async;
function main() {
    var contador = 1;
    var contenidoArchivo = 02_leer_archivo_1.leerArchivo('./ejemplo.txt');
    console.log('contenidoArchivo', contenidoArchivo);
    // parsear -> texto -> Estructura de memoria
    /*
    {
        "nombre" : "Francisco"
    }
    <universidad>
    <facultad></facultad>
    </universidad>
    */
    var arregloCargadoDeArchivo; // undifined
    try {
        arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    }
    catch (error) {
        arregloCargadoDeArchivo = [];
        console.log('Error parseando archivo');
    }
    var minimoId = -1;
    arregloCargadoDeArchivo.forEach(
    // itera
    // itera
    function (valorActual) {
        var idActual = valorActual.id;
        if (idActual > minimoId) {
            minimoId = idActual;
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
    var arregloEstudiantes = arregloCargadoDeArchivo;
    var arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    var respuestaEstudianteUno = await, prompts = (arregloPreguntas);
    var nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);
    var respuestaEstudianteDos = await, prompts = (arregloPreguntas);
    var nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    console.log('Cual usuario quieres Editar');
    console.log(arregloEstudiantes);
    // OPERADORES!!! -> REEMPLAZAN AL !FOR! 
    var idABuscar = await, prompts = ({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    });
    var indiceEncontrado = arregloEstudiantes.findIndex(function (valorActual, indice, arreglo) {
        // console.log(valorActual);
        // console.log(indice);
        // console.log(arreglo);
        return valorActual.id == idABuscar.id; // Nos Devuelve el INDICE
    } // Si encuntra nos devueñve el indice
     // Si encuntra nos devueñve el indice
    );
    console.log('Indice Encotrado', indiceEncontrado);
    var nombreAEditar = await, prompts = ({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    });
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);
    var buscar = await, prompts = ({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa por ID o el Nombre'
    });
    var estudianteEncontrado = arregloEstudiantes.find(function (valorActual) {
        return valorActual.nombre == buscar.nombre;
    });
    console.log(estudianteEncontrado);
    var arregloTexto = JSON.stringify(arregloEstudiantes);
    // JASON.stringify -> convertir objeto o arreglo en memoria
    console.log(arregloTexto);
    03_escribir_archivo_1.escribirArvhivo('./ejemplo.txt', arregloTexto);
    contador = contador + 1;
    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArvhivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
*/
}
main().then().catch();
