//  04-condicionales.ts
const casado = true;
if(casado == true){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

if(casado== false){   // (Expresion => boolean)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if(casado != true){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

f(casado != false){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

const tengoMosa = false
const estaCasado =  true == true;  // expresion


const soyMosero = tengoMosa == true; //

const casadoYMosero =  casado == true && tengoMosa == true;
if(casado == true && tengoMosa == true){
    console.log("Casado y mosero")
} else{
     console.log("O casado o Mosero o Nada")
}





// casdoMosero  <=>  c==true && b== true && d==true

// AND || ANSTERS
// TRUE y TRUE = TRUE
// TRUE y FALSE = FALSE
// FALSE y TRUE = FALSE
// FALSE y FALSE = FALSE

// OR  -> || -> PIPES
// TRUE y TRUE = TRUE
// TRUE y FALSE = TRUE
// FALSE y TRUE = TRUE
// FALSE y FALSE = FALSE

/*
1.	Ingrese un numero
2.	Ingrese otro numero 
3.	Escoja la operación (suma, resta multiplicaion y division)
4.	Primer número igual a la variable a 
5.	Segundo número igual a la variable b
6.	Sumar restar multiplicar o dividir “a” y “b”

*/

// apago la primera alarma me hago 
// bolita y lloro hasta la segunda 
// alarma y me levanto
// celularDescargado == true
// amaneceMuerto  == true
// estaActivadaLaAlarma  !== true
// estaEnModoSilencio  == true
// const seAtrasoAClase = celularDescargado == ||true amaneceMuerto  == true ||estaActivadaLaAlarma  !== true || estaEnModoSilencio  == true

// if(const == true) {
    console.log("No llego a clases");
}else{
      console.log()   
     }
     
     // TRUTY 
const nombreVacio = "";
if(""){
    console.log("Truty")
}else{
    console.log("Falsy")

}

if("abc"){
    console.log("Truty")
}else{
    console.log("Falsy")

}

if("-1"){
    console.log("Truty")
}else{
    console.log("Falsy")

}

if("1.336"){
    console.log("Truty")
}else{
    console.log("Falsy")

}
if("0"){
    console.log("Truty")
}else{
    console.log("Falsy") // Falsy

}

if("null"){
    console.log("Truty")
}else{
    console.log("Falsy") // Falsy

}

if("underfined"){                     // palabra reservada
    console.log("Truty")
}else{
    console.log("Falsy") // Falsy

}
const calculo = "sumar"; // sumar restar multiplicar y dividir
switch(calculo) {
    case "sumar": // 1
        break;
    case "restar"
        // codigo
        break;
    case "multiplicar"
        // codigo
        break;
    case "dividir"
        // codigo
        break;
        default:
        // codigo
}

// 6  Guagua
// 18 Guambra
// 65 Longo
// 66 Ruku
//const edadString = prompt("Ingrese su edad")
//const edad = Number(edadString); 
//switch(edad){
    //case 1: 
        //console.log("Guagua");
    //case

//}


const edadstring = prompt("Ingrese su edad")
const edad = Number(edadstring); 
if("edad > 0 && edad <= 6"){
    console.log("Guagua")
}else if("edad > 6 && edad <= 18"){
        console.log("Guanbra")
}else if("edad > 18 && edad <= 65"){
        console.log("Longo")
}else if("edad > 65"){
        console.log("Ruku");
}          





// FALSY 