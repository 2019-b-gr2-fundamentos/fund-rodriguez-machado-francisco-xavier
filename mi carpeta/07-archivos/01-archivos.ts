import { leerArchivo } from "./02-leer-archivo";
import { escribirArvhivo } from "./03-escribir-archivo";

function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArvhivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
}

main();