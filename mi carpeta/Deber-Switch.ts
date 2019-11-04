// AUTOR: FRANCISCO RODRIGUEZ
// FECHA DE ACTUALIZACION: 03-11-2019
// EJERCICIOS DE SWITCH
// JUEGO PARA DESCRIBIR TUS GUSTOS
console.log("Hola Bienvenido")
console.log("1. Es una persona muy joven edad de entre 7 a 12 años");
console.log("2. Es una persona joven de entre 12 a 16 años");
console.log("3. Es una persona un poco joven de entre 16 a 30 años");
console.log("4. Es una persona ya no joven de 30 años en adelante");
const edad5String = prompt("Digite la opcion que corresponda al rango de su edad");
const edad5 = Number(edad5String);
switch (edad5) {
    case (1):
        console.log(" A usted por lo general le gusta jugar con sus amigos");
        console.log(" Es una persona Sociable");
        console.log(" le gusta hacer ejercicio");
        break;
    case (2):
        console.log(" A usted no le gusta hacer deberes");
        console.log(" A usted le gusta dormir");
        console.log(" A usted le desagrada la comida saludable");
        break;
    case (3):
        console.log("Usted vivo acomplejado por su Crush");
        console.log("la vida no es como lo esperaba");
        console.log("le falta dinero para divertirse");
        break;
    case (4):
        console.log("Busca maneras de aprovechar bien el tiempo");
        console.log("Tiene palaneado tener una familia, o ya la tiene");
        console.log("Espera que el siguiente dia sea mejor que el anterior");
        break;
    default:
        console.log("Ingrese una opcion valida")
        break;
}
// JUEDO DE ADIVINAZAS
console.log("Bienvenido una vez mas")
console.log("Resuelve la siguente Adivinanza")
console.log("Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?")
let insecto
insecto = prompt("Escriba su respuesta")
switch (insecto) {
    case "la cucaracha":
        console.log("Su respuesta es correcta")
        break;

    default:
        console.log("Intentelo denuevo")
        break;
}
// JUEGO PARA SABER SI LE GUSTAS
console.log("HOLA QUE HACE")
console.log("Tiempo de respuesta")
console.log("1. 1 min")
console.log("2. 10 min")
console.log("3. 15 min")
console.log("4. 30 min")
console.log("5. 1 hora")
console.log("6. 2 horas")
console.log("7. 6 horas")
console.log("8. 12 horas")
console.log("9. 1 dia")
const amorString = prompt("Escriba el tiempo en el que tarda en responder el\ella")
const amor = Number(amorString);
switch (amor) {
    case (1):
        console.log("El o Ella esta super hiper mega interesad@s en ti")
        console.log("Aprovecha esta oportunidad no la dejes ir papu")
        break;
    case (2):
        console.log("El o Ella esta super hiper interesad@s en ti")
        console.log("Aprovecha esta oportunidad no la dejes ir papu")
        break;
    case (3):
        console.log("El o Ella esta super interesad@s en ti")
        console.log("Aprovecha esta oportunidad no la dejes ir papu")
        break;
    case (4):
        console.log("El o Ella esta interesad@s en ti")
        console.log("Ponle mas atencion, hazla reir para que no pierda interes en ti")
        break;    
    case (5):
        console.log("El o Ella esta moderadamente interesad@s en ti")
        console.log("Sigue insistiendo sin ser demasiado pesado")
        break;
    case (6):
        console.log("El o Ella esta medio interesad@s en ti")
        console.log("Sigue llamando mas su atencion")
        break;
    case (7):
        console.log("El o Ella esta casi nada interesad@s en ti")
        console.log("Prueba unas pocas veces mas y compara el resultado")
        break;
    case (7):
        console.log("El o Ella esta casi casi nada interesad@s en ti")
        console.log("Es momento de una retirada")
        break;
    case (8):
        console.log("El o Ella esta nada interesad@s en ti")
        console.log("Retirate con honor")
        break;
    case (9):
        console.log("El o Ella esta nada nadita interesad@s en ti")
        console.log("Esto ya no es gracioso es triste :=(")
        break;
    default:
        console.log("Ingrese una opcion valida")
        break;
}


