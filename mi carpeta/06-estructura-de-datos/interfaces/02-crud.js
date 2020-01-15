// 02 crud.ts create read update delate
// const prompts = require('prompts);
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion 
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos);
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log(promesaEdad);
    console.log('Fin');
}
main();
