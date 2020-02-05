//import * as prompts from 'C:/Users/USRLAM.LABFIS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/07-archivos/node_modules/prompts';
import * as prompts from '../funciones-mover-matrices/espacio-mover';
import { preguntarMoverFicha } from "../funciones-mover-matrices/pregunta-mover-ficha";
import { compararMatriz } from './03-funciones';

let matrizCorrecta = [
    [0,  1,  2,  3],
    [4,  5,  6,  7],
    [8, 9, 10, 11],
    [12, 13 , 14, 'x']
];
let nuevoNumero = 0;
let i = 0;
let j = 0;
let numeroActual = -1;
const tamañoDeCadaFila = 4;
let matrizJuego = [
    [],
    [],
    [],
    []
];
let primeraFila = [];let segundaFila = [];let terceraFila = [];let cuartaFila = [];

async function generarJuego(){
    primeraFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]){
            j = j;
        }else{
            matrizJuego[0].push(nuevoNumero);
            numeroActual = nuevoNumero;
            primeraFila[j] = numeroActual;
            primeraFila = primeraFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    //console.log(primeraFila)
    //console.log(numeroActual);
    j = 0;
    segundaFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]){
            j = j;
        }else{
            matrizJuego[1].push(nuevoNumero);
            numeroActual = nuevoNumero;
            segundaFila[j] = numeroActual;
            segundaFila = segundaFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    terceraFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]||
                                          nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]){
            j = j;
        }else{
            matrizJuego[2].push(nuevoNumero);
            numeroActual = nuevoNumero;
            terceraFila[j] = numeroActual;
            terceraFila = terceraFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    cuartaFila = [-1,-1,-1,''];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]||
                                          nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]||
                                          nuevoNumero == cuartaFila[0]  || nuevoNumero == terceraFila[1]){
            j = j;
        }else{
            matrizJuego[3].push(nuevoNumero);
            numeroActual = nuevoNumero;
            cuartaFila[j] = numeroActual;
            cuartaFila = cuartaFila;
            j = j + 1;
        };
    }while(j < 4);
    matrizJuego[3].splice(3,1,'x');
    //console.log(matrizJuego);
    console.log('#  ', '1  ', '2  ', '3  ', '4  ');
    console.log('A', matrizJuego[0]);
    console.log('B', matrizJuego[1]);
    console.log('C', matrizJuego[2]);
    console.log('D', matrizJuego[3]);

   return matrizJuego;

};
function main(){
    generarJuego().then().catch();
};
main();

let auxD4 = matrizJuego[3][3];
let auxD3 = matrizJuego[3][2];
let auxC4 = matrizJuego[2][3];
let auxA1 = matrizJuego[0][0];
let auxA2 = matrizJuego[0][1];
let auxA3 = matrizJuego[0][2];
let auxA4 = matrizJuego[0][3];
let auxB1 = matrizJuego[1][0];
let auxB2 = matrizJuego[1][1];
let auxB3 = matrizJuego[1][2];
let auxB4 = matrizJuego[1][3];
let auxC1 = matrizJuego[2][0];
let auxC2 = matrizJuego[2][1];
let auxC3 = matrizJuego[2][2];
let auxD1 = matrizJuego[3][0];
let auxD2 = matrizJuego[3][1];
let espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);

function vovlerACargarLosAuxiliares(){
    auxD4 = matrizJuego[3][3];
    auxD3 = matrizJuego[3][2];
    auxC4 = matrizJuego[2][3];
    auxA1 = matrizJuego[0][0];
    auxA2 = matrizJuego[0][1];
    auxA3 = matrizJuego[0][2];
    auxA4 = matrizJuego[0][3];
    auxB1 = matrizJuego[1][0];
    auxB2 = matrizJuego[1][1];
    auxB3 = matrizJuego[1][2];
    auxB4 = matrizJuego[1][3];
    auxC1 = matrizJuego[2][0];
    auxC2 = matrizJuego[2][1];
    auxC3 = matrizJuego[2][2];
    auxD1 = matrizJuego[3][0];
    auxD2 = matrizJuego[3][1];
    return auxA1 && auxA2 && auxA3 && auxA4 && auxB1 && auxB2 && auxB3 && auxB4 && auxC1 && auxC2 && auxC3 && auxC4 && auxD1 && auxD2 && auxD3 && auxD4;
};

async function moverFicha(){
    const fichaAMover = await preguntarMoverFicha().then().catch();
    if(fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 3){
        matrizJuego[3][3] = auxD3;
        matrizJuego[3][2] = auxD4;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 2){
        matrizJuego[2][2] = auxD3;
        matrizJuego[3][2] = auxC3;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 1){
        matrizJuego[3][1] = auxD3;
        matrizJuego[3][2] = auxD2;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 0){
        matrizJuego[3][0] = auxD2;
        matrizJuego[3][1] = auxD1;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 1){
        matrizJuego[2][1] = auxD2;
        matrizJuego[3][1] = auxC1;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 2){
        matrizJuego[3][2] = auxD2;
        matrizJuego[3][1] = auxD3;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D1' || fichaAMover == 'd1' && espacioEnBlanco == 0){
        matrizJuego[2][0] = auxD1;
        matrizJuego[3][0] = auxC1;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D1' || fichaAMover == 'd1' && espacioEnBlanco == 1){
        matrizJuego[3][1] = auxD1;
        matrizJuego[3][0] = auxD2;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D4' || fichaAMover == 'd4' && espacioEnBlanco == 3){
        matrizJuego[2][3] = auxD4;
        matrizJuego[3][3] = auxC4;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'D4' || fichaAMover == 'd4' && espacioEnBlanco == 2){
        matrizJuego[3][2] = auxD4;
        matrizJuego[3][3] = auxD3;
        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C1' || fichaAMover == 'c1' && matrizJuego[3][0] == 'x'){
        matrizJuego[3][0] = auxC1;
        matrizJuego[2][0] = auxD1;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C1' || fichaAMover == 'c1' && matrizJuego[1][0] == 'x'){
        matrizJuego[1][0] = auxC1;
        matrizJuego[2][0] = auxB1;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C1' || fichaAMover == 'c1' && espacioEnBlanco == 1){
        matrizJuego[2][1] = auxC1;
        matrizJuego[2][0] = auxC2;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C2' || fichaAMover == 'c2' && espacioEnBlanco == 0){
        matrizJuego[2][0] = auxC2;
        matrizJuego[2][1] = auxC1;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C2' || fichaAMover == 'c2' && espacioEnBlanco == 2){
        matrizJuego[2][2] = auxC2;
        matrizJuego[2][1] = auxC3;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C2' || fichaAMover == 'c2' && matrizJuego[1][1] == 'x'){
        matrizJuego[1][1] = auxC2;
        matrizJuego[2][1] = auxB2;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C2' || fichaAMover == 'c2' && matrizJuego[3][1] == 'x'){
        matrizJuego[3][1] = auxC2;
        matrizJuego[2][1] = auxD2;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C3' || fichaAMover == 'c3' && espacioEnBlanco == 1){
        matrizJuego[2][1] = auxC3;
        matrizJuego[2][2] = auxC2;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[2][3] == 'x'){
        matrizJuego[2][3] = auxC3;
        matrizJuego[2][2] = auxC4;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[1][2] == 'x'){
        matrizJuego[1][2] = auxC3;
        matrizJuego[2][2] = auxB3;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[3][2] == 'x'){
        matrizJuego[3][2] = auxC3;
        matrizJuego[2][2] = auxD3;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C4' || fichaAMover == 'c4' && matrizJuego[1][3] == 'x'){
        matrizJuego[1][3] = auxC4;
        matrizJuego[2][3] = auxB4;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C4' || fichaAMover == 'c4' && matrizJuego[3][3] == 'x'){
        matrizJuego[3][3] = auxC4;
        matrizJuego[2][3] = auxD4;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'C4' || fichaAMover == 'c4' && espacioEnBlanco == 2){
        matrizJuego[2][2] = auxC4;
        matrizJuego[2][3] = auxC3;
        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B1' || fichaAMover == 'b1' && matrizJuego[0][0] == 'x'){
        matrizJuego[0][0] = auxB1;
        matrizJuego[1][0] = auxA1;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B1' || fichaAMover == 'b1' && matrizJuego[2][0] == 'x'){
        matrizJuego[2][0] = auxB1;
        matrizJuego[1][0] = auxC1;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B1' || fichaAMover == 'b1' && espacioEnBlanco == 1){
        matrizJuego[1][1] = auxB1;
        matrizJuego[1][0] = auxB2;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B2' || fichaAMover == 'b2' && espacioEnBlanco == 0){
        matrizJuego[1][0] = auxB2;
        matrizJuego[1][1] = auxB1;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B2' || fichaAMover == 'B2' && espacioEnBlanco == 2){
        matrizJuego[1][2] = auxB2;
        matrizJuego[1][1] = auxB3;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B2' || fichaAMover == 'b2' && matrizJuego[0][1] == 'x'){
        matrizJuego[0][1] = auxB2;
        matrizJuego[1][1] = auxA2;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B2' || fichaAMover == 'b2' && matrizJuego[2][1] == 'x'){
        matrizJuego[2][1] = auxB2;
        matrizJuego[1][1] = auxC2;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B3' || fichaAMover == 'b3' && espacioEnBlanco == 1){
        matrizJuego[1][1] = auxB3;
        matrizJuego[1][2] = auxB2;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B3' || fichaAMover == 'b3' && espacioEnBlanco == 3){
        matrizJuego[1][3] = auxB3;
        matrizJuego[1][2] = auxB4;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B3' || fichaAMover == 'b3' && matrizJuego[0][2] == 'x'){
        matrizJuego[0][2] = auxB3;
        matrizJuego[1][2] = auxA3;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B3' || fichaAMover == 'b3' && matrizJuego[2][2] == 'x'){
        matrizJuego[2][2] = auxB3;
        matrizJuego[1][2] = auxC3;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B4' || fichaAMover == 'b4' && matrizJuego[0][3] == 'x'){
        matrizJuego[0][3] = auxB4;
        matrizJuego[1][3] = auxA4;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B4' || fichaAMover == 'b4' && matrizJuego[2][3] == 'x'){
        matrizJuego[2][3] = auxB4;
        matrizJuego[1][3] = auxC4;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'B4' || fichaAMover == 'b4' && espacioEnBlanco == 2){
        matrizJuego[1][2] = auxB4;
        matrizJuego[1][3] = auxB3;
        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A4' || fichaAMover == 'a4' && espacioEnBlanco == 3){
        matrizJuego[1][3] = auxA4;
        matrizJuego[0][3] = auxB4;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A4' || fichaAMover == 'a4' && espacioEnBlanco == 2){
        matrizJuego[0][2] = auxA4;
        matrizJuego[0][3] = auxA3;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][3]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if(fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 3){
        matrizJuego[0][3] = auxA3;
        matrizJuego[0][2] = auxA4;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 2){
        matrizJuego[1][2] = auxA3;
        matrizJuego[0][2] = auxB3;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 1){
        matrizJuego[0][1] = auxA3;
        matrizJuego[0][2] = auxA2;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if(fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 2){
        matrizJuego[0][2] = auxA2;
        matrizJuego[0][1] = auxA3;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 1){
        matrizJuego[1][1] = auxA2;
        matrizJuego[0][1] = auxB2;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 0){
        matrizJuego[0][0] = auxA2;
        matrizJuego[0][1] = auxA1;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A1' || fichaAMover == 'a1' && espacioEnBlanco == 0){
        matrizJuego[1][0] = auxA1;
        matrizJuego[0][0] = auxB1;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 'A1' || fichaAMover == 'a1' && espacioEnBlanco == 1){
        matrizJuego[0][1] = auxA1;
        matrizJuego[0][0] = auxA2;
        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][0]);
        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
        console.log('A', matrizJuego[0]);
        console.log('B', matrizJuego[1]);
        console.log('C', matrizJuego[2]);
        console.log('D', matrizJuego[3]);
        vovlerACargarLosAuxiliares();
        let sonIguales = compararMatriz(matrizJuego, matrizCorrecta);
        if(sonIguales){
            console.log('¡HA GANADO!');
        }else{
        moverFicha().then().catch();
        }
    }else if (fichaAMover == 's' || fichaAMover == 'salir' || fichaAMover == 'SALIR'){
        console.log('GRACIAS POR JUGAR, ADIOS :D');
    }else{
        console.log('Seleccione un movimiento valido');
        vovlerACargarLosAuxiliares();
        moverFicha().then().catch();
    }
}
function main2(){
    moverFicha().then().catch();
}
main2();