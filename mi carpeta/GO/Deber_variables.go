paquete principal 

import (
	"fmt"
)

/*
Autor: Francisco Rodriguez
Fecha actializacion: 22/10/2019
Descripcion: Variables primitivas, mutables e inmutables que se utilizan en el lenguaje GO
Variables primitivas:

1.- Int - Numero Entero  Ej: 4 5 6 8
2.- Char --- se utiliza para declarar la palabra clave de una estructura  Ej: Positivo, Nulo 
3.- comple (x64 y x128) --- Ej: Números complejos con float32 / 64 partes reales e imaginarias
4.- Flotador (64 y 32) - sirve para la escritura de número decimales Ej: 2.0110 3.1014 5.104 
5.- Booleano - da un valor que puede ser verdero o falso

Casos inmutables GO:
1.- compos 
2.- metodos 
3.- variables
4.- variables de retorno
5.- argumentos e interfaces 
6.- referencias
7.- variables de ambito
todos los anteriormente mencionados son cosas de "variables inmutables"
Objetos de Mutable GO:
1.- mapas 
2.- matrices 
3.- rodajas 
4.-canales
5.-cierres que capturan al menos 1 variable del alcance externo
Objetos inmutables GO:
1.- interfaces
2.- booleanos
3.- int
4.- punteros
*/

func  main () {

	// `var` se usa para declarar una o más variables.
	var  una  cadena = " iniciar"
	fmt.Println(e)

	// Puedes declarar múltiples variables en una línea.
	var  f , g  int = 3 , 4
	fmt. Println (f, d)

	// Ir infiere el tipo de las variables inicializadas.
	var  h = true
	fmt. Println (h)

	var  i  float64 = 36.98
	fmt. Println (i)
}