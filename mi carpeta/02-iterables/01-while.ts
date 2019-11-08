// Do WHILE
let vecesQueHeComido = 0;
do{
console.log("vamos a comer");
vecesQueHeComido = vecesQueHeComido + 1;
switch (vecesQueHeComido){
    case 1:
     console.log("Desayuno");
    break;
    case 2:
     console.log("Almuerzo")
    break;
    case 3:
     console.log("Merienda")
    break;
    default:
     console.log("Gorditos")
    break;
}
}while(vecesQueHeComido < 3)

// WHILE

let vecesQueHeComido1 = 0
console.log("Vamos a comer")
vecesQueHeComido1 = vecesQueHeComido1 + 1
switch(vecesQueHeComido1){
    case 1: 
     console.log("Desayuno");
    break;
     case 2:
     console.log("Almuerzo");
    break;
     case 3:
     console.log("Meriendo");
    break;
     default:
     console.log("Gorditos");
    break;
}

/*
1 Analisis sociopolitico 17
2 Algebra 17
3 Compiladores  16
5 Fundamentos
7 Calculo
11 Fisica
13 Ingles

si el numero impar le aumentamos analisis socioeconomico
si es par aumentamos a alagebra
si es multiplo de 3 aumentamos a compiladores
*/
// 50 primeros deberes 
// 1000 deberes con While
let Analisis = 0
let Algebra = 0
let Compiladores = 0
let Fundamentos = 0
let Calculo = 0
let Fisica = 0
let Ingles = 0
let deberes = 0
while(deberes < 1000){
    deberes = deberes + 1
    if(deberes % 13 == 0){
        Ingles = Ingles + 1
    }else if(deberes % 11 == 0){
        Fisica = Fisica + 1
    }else if(deberes % 9 == 0){
       Calculo = Calculo + 1
    }else if(deberes % 7 == 0){
        Fundamentos = Fundamentos + 1   
    }else if(deberes % 3 == 0){
        Compiladores = Compiladores + 1   
    }else if(deberes % 2 == 0){
        Algebra = Algebra + 1
    }else if(deberes % 1 == 0){
        Analisis = Analisis + 1
    }else{
        console.log("No tiene deberes")
    }
console.log(`Hice ${Ingles} deberes de Ingles`);
console.log(`Hice ${Fisica} deberes de Fisica`);
console.log(`Hice ${Calculo} deberes de Calculo`);
console.log(`Hice ${Fundamentos} deberes de Fundamentos`);
console.log(`Hice ${Compiladores} deberes de Compiladores`);
console.log(`Hice ${Algebra} deberes de Algebra`);
console.log(`Hice ${Analisis} deberes de Analisis`);
}

// 1000 deberes con Do while 

let Analisis1 = 0
let Algebra1 = 0
let Compiladores1 = 0
let Fundamentos1 = 0
let Calculo1 = 0
let Fisica1 = 0
let Ingles1 = 0
let deberes1 = 0
do{
deberes1 = deberes1 + 1;
    if(Ingles1 % 13 == 0){
        Ingles1 = Ingles1 + 1
    }else if(Fisica1 % 11 == 0){
        Fisica1 = Fisica1 + 1
    }else if(Calculo1 % 7 == 0){
        Calculo1 = Calculo1 + 1
    }else if(Fundamentos1 % 5 == 0){
        Fundamentos1 = Fundamentos1 + 1
    }else if(Compiladores1 % 3 == 0){
        Compiladores1 = Compiladores1 + 1
    }else if(Algebra1 % 2 == 0){
        Algebra1 = Algebra1 + 1
    }else if(Analisis1 % 1 == 0){
        Analisis1 = Analisis1 + 1
    }else{
        console.log("No tiene deberes");
    }
    
}while(deberes1 < 1000);
console.log(`Hice ${Ingles1} deberes de Ingles`);
console.log(`Hice ${Fisica1} deberes de Fisica`);
console.log(`Hice ${Calculo1} deberes de Calculo`);
console.log(`Hice ${Fundamentos1} deberes de Fundamentos`);
console.log(`Hice ${Compiladores1} deberes de Compiladores`);
console.log(`Hice ${Algebra1} deberes de Algebra`);
console.log(`Hice ${Analisis1} deberes de Analisis`);

