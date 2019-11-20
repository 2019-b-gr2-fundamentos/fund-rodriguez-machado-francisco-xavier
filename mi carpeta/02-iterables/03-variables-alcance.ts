let edad = 20;
if(edad>18){
    console.log("legal");
}else{
    console.log("7 años de carcel");
}
if(true){ // Bloque 1
    let edad = 20;
    console.log(edad); // 20
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log(edad); // undefined
    console.log("7 años de carcel");
}


for(let i= 0; i<10; i++){
    let bandera = 0;
    bandera = bandera + i;
    console.log(bandera);

}
