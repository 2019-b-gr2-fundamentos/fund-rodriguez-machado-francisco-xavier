// Refencias
function main(){
    let uno = 1;
    let dos = uno; // valor
    let tres = dos; // valor
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    uno = 5;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);

    let arreglo = [1,2,3];
    let miOtroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log('arreglo', arreglo);
    console.log('a',a);
    console.log('b',b);
    miOtroArreglo = [... arreglo, 
        ...arreglo
        // ...arreglo,
        // ...arreglo,
        // ...arreglo,
        // ...arreglo,
        // ...arreglo,    (Se pueden copiar varios arreglos si se desea)
        // ...arreglo,
        // ...arreglo,
        // ...arreglo,
        // ...arreglo,
    ]; // -> referencia a la direccion de memoria
    // Asignar a mi nuevo arreglo una nueva direccion de memoria
    // -> FOR llenamos un nuevo arreglo
    // -> Filter -> Siempre true -> Nuevo arreglo
    // -> Map -> Nuevo arreglo

    // INMUTABILIDAD
    // JS -> Arreglo o Objetos -> Siempre crear un Clon !!!!!!!!!!!!!!!!!!
    // CLON DE ARREGLO -> CLON TRABAJAR

    miOtroArreglo.push(2);
    console.log('arreglo', arreglo);
    console.log('miOtroArreglo', miOtroArreglo);
    arreglo[0]= 9;
    miOtroArreglo[1]= 10;
    miOtroArreglo = arreglo;
    miOtroArreglo.push(2);
    console.log('arreglo', arreglo);
    console.log('miOtroArreglo', miOtroArreglo);
    console.log('a',a);
    console.log('b',b);

    const xavier = {
        id: 1,
        nombre: 'Francisco',
        sueldo: 1.12
    };
    const soloElNombre ={ 
        ...xavier
    };
    const copUno  = {
        ...xavier};
    const copDos = {
        ...soloElNombre
    };
    const copTres = {
        ...xavier
    };
    console.log('xavier', xavier);
    console.log('soloElNombre', soloElNombre);
    delete xavier.nombre; // ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 20;
    // soloElNombre.edad = 20;
    console.log('xavier', xavier);
    console.log('soloElNombre', soloElNombre);
    console.log('copUno', copUno);
    console.log('copDos', copDos);
    console.log('copTres', copTres);

}
main();