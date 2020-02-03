var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Refencias
function main() {
    var uno = 1;
    var dos = uno; // valor
    var tres = dos; // valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var miOtroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log('arreglo', arreglo);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglo = __spreadArrays(arreglo, arreglo
    // ...arreglo,
    // ...arreglo,
    // ...arreglo,
    // ...arreglo,
    // ...arreglo,    (Se pueden copiar varios arreglos si se desea)
    // ...arreglo,
    // ...arreglo,
    // ...arreglo,
    // ...arreglo,
    ); // -> referencia a la direccion de memoria
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
    arreglo[0] = 9;
    miOtroArreglo[1] = 10;
    miOtroArreglo = arreglo;
    miOtroArreglo.push(2);
    console.log('arreglo', arreglo);
    console.log('miOtroArreglo', miOtroArreglo);
    console.log('a', a);
    console.log('b', b);
    var xavier = {
        id: 1,
        nombre: 'Francisco',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, xavier);
    var copUno = __assign({}, xavier);
    var copDos = __assign({}, soloElNombre);
    var copTres = __assign({}, xavier);
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
