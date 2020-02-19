export function every(notas: any[]){
    let verdaderoOFalso = false;
    for(let i =0; i<notas.length; i++){
        if(notas[i].nota < 7){
            verdaderoOFalso = false
        }
    }
    return verdaderoOFalso;
};