// 1) Crear un arreglo de cinco elementos
//const arreglo = []; 
// 2) Cada elemento 1 o un 0
// Ej: [0,0,1,1,0]
// 3) Exista al menos un elemento "1"
// Ej: [0,0,0,0,0] NO ES VALIDO
// Ej: [0,0,0,0,1] Es valido
// Math.floor(Math.random()* 2) // [0,2[
// Math.floor(Math.random()* 10) // [0,11[
// Math.floor(Math.random()* 2) // [0,2[

/*
definir el numero de jugadores 
asignar de forma aleatoria o no un floron 
verificar que al menos uno sea un floron 
adivinar donde esta el floron
*/
/*const numeroDeJugadores = 5;
const indice1 = 0;
const indice2 = 1;
const indice3 = 2;
const indice4 = 3;
const indice5 = 4;

for (const arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;){
    if (arreglo[indice1] == 0 && arreglo[indice2] == 0 && arreglo[indice3] == 0 && arreglo[indice4] == 0 && arreglo[indice5] == 0 ){
        console.log('Intente de nuevo');
    }else{
            console.log(arreglo);
        }
        }
*/
let arregloFloron = [0,0,0,0,1];
let existeFloron = false
for(let i=0; i<5; i++){
   if(arregloFloron[i] == 1){
       existeFloron = true;
   }
}
if(existeFloron){
    console.log("Adivinar");
}else{
    console.log("Asignar y adivinar")
}