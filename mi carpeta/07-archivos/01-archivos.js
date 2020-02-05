var 02_leer_archivo_1 = require("./02-leer-archivo");
var 03_escribir_archivo_1 = require("./03-escribir-archivo");
async;
function main() {
    var contenidoArchivo = 02_leer_archivo_1.leerArchivo('./ejemplo.txt');
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
    var arregloCargadoDeArchivo; // undefined
    try {
        arregloCargadoDeArchivo = JSON
            .parse(contenidoArchivo);
    }
    catch (error) {
        arregloCargadoDeArchivo = [];
        console.error('Error parseando archivo');
    }
    var contador = 1;
    // OPERADORES
    var minimoId = -1;
    arregloCargadoDeArchivo
        .forEach(
    // SIRVE SOLO PARA ITERAR 
    // SIRVE SOLO PARA ITERAR 
    function (valorActual) {
        var idActual = valorActual.id;
        if (idActual > minimoId) {
            minimoId = idActual;
        }
    });
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
    var arregloEstudiantes = arregloCargadoDeArchivo;
    var arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    var respuestaEstudianteUno = await, prompts = (arregloPreguntas);
    //console.log(respuestaEstudianteUno);
    var nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);
    var respuestaEstudianteDos = await, prompts = (arregloPreguntas);
    //console.log(respuestaEstudianteDos);
    var nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    console.log('Cual usuario quieres editar?');
    console.log(arregloEstudiantes);
    // OPERADORES!!!! REEMPLAZAR AL FOR
    var idABuscar = await, prompts = ({
        type: 'number',
        name: 'id',
        message: 'Ingresa el id del registro a editar'
    });
    var indiceEncontrado = arregloEstudiantes.findIndex(function (valorActual, indice, arrelgo) {
        //console.log(valorActual);
        //console.log(indice);
        //console.log(arrelgo);
        return valorActual.id == idABuscar.id; // Nos devuelve el indice
    } // Si encuentra nos devuelve el indice
     // Si encuentra nos devuelve el indice
    );
    console.log('Indice encontrado:', indiceEncontrado);
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
        message: 'Buscar por ID o por NOMBRE'
    });
    var estudianteEcontrado = arregloEstudiantes.find(function (valorActual) {
        return valorActual.nombre == buscar.nombre;
    });
    console.log(estudianteEcontrado);
    var arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);
    03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
    contador = contador + 1;
    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const  nuevoContenido = 'Tengo Hambre :( \n ';
    escribirArchivo('./ejemplo.txt','');
    console.log(textoLeido + nuevoContenido);
    */
}
main().then().catch();
