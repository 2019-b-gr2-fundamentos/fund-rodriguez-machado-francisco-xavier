import{AnimalPerrito}from './interfaces/animal-perrito.interface'
import{ Duenio }from './interfaces/duenio.interface'
// boolean
// string
// null -> object
// number
// PERSONA
// ANIMAL -> nombre cientifico, color principal fecha de nacimiento, peso, genero, altura
// CASI EN TODOS LOS LENGUAJES 
// Struct -> Estructura de datos
// Clase -> Estructura de datos -> Metodos
const edad = 20;
const ejemploEstructura = {
    nombreCientifico: 'canis lupus familiaris',
    "llave":"valor",
    noEsNecesario: true, // si se puede poner la ultima coma
    enojo: undefined,
    edadActual: edad // variables 
}
// ESTRUCTURA DE DATOS EN LENGUAJE NO TIPADO
const poliPerro = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true, 
}
console.log(poliPerro.nombre) // CANIS LUPUS FAMILIARIS

// ESTRUCTURA DE DATOS EN LENGUAJE TIPADO 

const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Amarillo',
    clan: 'Poliperro',
    // edad: 4,
    // hijos: null,
    // perritas: [],
    // vacunado: false, 
}
const duenioPoliPerroAmarillo: Duenio = {
    nombre: 'Francisco',
    apellidos: '',
    fechaNacimiento: 2,
    mascotaPerrito?: AnimalPerrito[];

}
// Guardar la estructura de datos

poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad= 4;
poliPerroAmarillo.vacunado= true;

//Acceder a los datos de la estructura de datos
console.log(poliPerroAmarillo.duenio.nombre);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);
