// CALCULADORA DE 5 OPERACIONES
/*
Autor: Francisco Rodriguez
Fecha de Actualización: 02-11-2019
*/
console.log("Ingrese el numero de la operación que desea realizar");
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Multiplicación")
console.log("4. División")
console.log("5. Cálculo de la pendiente")
console.log("6. Salir")
const operaciónString = prompt("Ingrese la operación que desea realizar");
const operación = Number(operaciónString);
switch(operación){
    case(1):   // SUMA
        const numeroUnoString = prompt("Ingresar numero 1");
        const numeroDosString = prompt("Ingresar numero 2"); 
        const numeroUno = Number(numeroUnoString);
    const numeroDos = Number(numeroDosString); 
    console.log(numeroUno + numeroDos);
    break;
    case(2):   // RESTA
        const numeroTresString = prompt("Ingresar numero 1"); 
        const numeroCuatroString = prompt("Ingresar numero 2"); 
        const numeroTres = Number(numeroTresString);
    const numeroCuatro = Number(numeroCuatroString); 
    console.log(numeroTres - numeroCuatro);
        break;
    case(3):  // MULTIPLICACION
        const numeroCincoString = prompt("Ingresar numero 1"); 
        const numeroSeisString = prompt("Ingresar numero 2"); 
        const numeroCinco = Number(numeroCincoString);
        const numeroSeis = Number(numeroSeisString); 
    console.log(numeroCinco * numeroSeis);
    break;
    case(4):   // DIVISION
        const numeroSieteString = prompt("Ingresar numero 1"); 
        const numeroOchoString = prompt("Ingresar numero 2"); 
        const numeroSiete = Number(numeroSieteString);
        const numeroOcho = Number(numeroOchoString); 
    console.log(numeroSiete / numeroOcho);
    break;
    case(5):   // CALCULO DE LA PENDIENTE
        const numero9Srings = prompt("Ingrese la coordenadda del punto final en el eje Y");
        const numero9 = Number(numero9Srings);
        const numero10Srings = prompt("Ingrese la coordenadda del punto inicial en el eje Y");
        const numero10 = Number(numero10Srings);
        const numero11Srings = prompt("Ingrese la coordenadda del punto final en el eje X");
        const numero11 = Number(numero11Srings);
        const numero12Srings = prompt("Ingrese la coordenadda del punto inicial en el eje X");
    const numero12 = Number(numero12Srings);
    console.log((numero9 - numero10)/(numero11-numero12));
        break;
    case (6):
        console.log("Gracias por preferirnos xd");
        break;
    default: 
        console.log("Revise si la opción es correcta");
}