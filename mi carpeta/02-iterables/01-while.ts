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

let Analisis = 0
let Algebra = 0
let Compiladores = 0
let deberes = 0
while(deberes < 50){
    deberes = deberes + 1
    if(deberes %3 == 0){
        Compiladores = Compiladores + 1
    }else if(deberes %2 == 0){
        Algebra = Algebra + 1
    }else if(deberes %1 == 0){
        Analisis = Analisis +1 
    }else{
        console.log("No tiene deberes")
    }
console.log(`Hice ${Compiladores} deberes de Compiladores`);
console.log(`Hice ${Algebra} deberes de Algebra`);
console.log(`Hice ${Analisis} deberes de Analisis`);
}

