var 02_leer_archivo_1 = require("./02-leer-archivo");
async;
function main() {
    var contador = 1;
    var contenidoArchivo = 02_leer_archivo_1.leerArchivo('./ejemplo.txt');
    console.log('contenidoArchivo', contenidoArchivo);
    var arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
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
    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArvhivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
*/
}
main().then().catch();
