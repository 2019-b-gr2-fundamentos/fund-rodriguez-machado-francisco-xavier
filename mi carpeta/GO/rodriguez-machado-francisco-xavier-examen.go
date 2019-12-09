package main 

import (
	"fmt"
	"math"
)
func suma(num1, num2 float64)float64{
	return num1 + num2
}
func resta(num1, num2 float64)float64{
	return num1 - num2
}
func multiplicacion(num1, num2 float64)float64{
	return num1 * num2
}
func division(num1, num2 float64)float64{
	return num1 / num2
}
func pendiente(num1, num2, num3, num4 float64)float64{
	return (num1 - num2)/(num3-num4)
}
func volumen(num1 float64)float64{
	return math.Pow(num1, 3)
}
func conversion(num1 float64)float64{
	return num1 * 1000
}
func promedio(num1, num2 float64)float64{
	return (num1 + num2)/2 
}
func iva(num1 float64)float64{
	return num1 * 0.12 
}
func areatriangulo(num1, num2 float64)float64{
	return ((num1)*(num2))/2
}
func Calculadora(){
	fmt.Println("Bienvenidos :)")
	fmt.Println("1. Suma")
	fmt.Println("2. Resta")
	fmt.Println("3. Multiplicación")
	fmt.Println("4. División")
	fmt.Println("5. Pendiente")
	fmt.Println("6. Volumen Cubo")
	fmt.Println("7. Conversión Kg a gr")
	fmt.Println("8. Promedio")
	fmt.Println("9. Iva")
	fmt.Println("10. Área de un Triángulo")
	fmt.Println("11. Salir")
	fmt.Println("Ingrese la operación que desea realizar")
	var opciones string
	fmt.Scanln(&opciones)
	var esSuma bool = opciones == "Suma" || opciones == "1" || opciones == "1. Suma"
	var esResta bool = opciones == "Resta" || opciones == "2" || opciones == "2. Resta"
	var esMultiplicacion bool = opciones == "Multiplicacion" || opciones == "3" || opciones == "3. Multiplicacion"
	var esDivision bool = opciones == "Division" || opciones == "4" || opciones == "4. Division"
	var esPendiente bool = opciones == "Pendiente" || opciones == "5" || opciones == "5. Pendiente"
	var esVolumen bool = opciones == "Volumen Cubo" || opciones == "6" || opciones == "6. Volumen Cubo"
	var esConversion bool = opciones == "Coversion gr a kg " || opciones == "7" || opciones == "7. Coversion gr a kg"
	var esPromedio bool = opciones == "Promedio" || opciones == "8" || opciones == "8. Promedio"
	var esIva bool = opciones == "Iva" || opciones == "9" || opciones == "9. Iva"
	var esAreatriangulo bool = opciones == "Area de un Triangulo" || opciones == "10" || opciones == "10. Area de un Triangulo"
	var esSalir bool = opciones == "Salir" || opciones == "11" || opciones == "11. Salir"
	var esValida bool = esSuma || esResta || esMultiplicacion || esDivision || esPendiente || esVolumen || esConversion || esPromedio || esIva || esAreatriangulo
	if esValida {
		var resultado float64 = 0
		if esSuma{
		    fmt.Println("Ingrese el PRIMER NÚMERO")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = suma(num1, num2)
		}
		if esResta{
			fmt.Println("Ingrese el PRIMER NÚMERO")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = resta(num1, num2)
		}
		if esMultiplicacion{
			fmt.Println("Ingrese el PRIMER NÚMERO")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = multiplicacion(num1, num2)
		}
		if esDivision{
			fmt.Println("Ingrese el PRIMER NÚMERO")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = division(num1, num2)
		}
		if esPendiente{
			fmt.Println("Ingrese La COORDENADA FINAL EN EL EJE Y")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese La COORDENADA INICIAL EN EL EJE Y")
		    var num2 float64 = 0
			fmt.Scanln(&num2)
			fmt.Println("Ingrese La COORDENADA FINAL EN EL EJE X")
			var num3 float64 = 0
			fmt.Scanln(&num3)
		    fmt.Println("Ingrese La COORDENADA INICIAL EN EL EJE X")
		    var num4 float64 = 0
		    fmt.Scanln(&num4)
			resultado = pendiente(num1, num2, num3, num4)
		}
		if esVolumen{
			fmt.Println("Ingrese el valor del Lado del Cubo")
			var num1 float64 = 0
		    fmt.Scanln(&num1)
			resultado = volumen(num1)
		}
		if esConversion{
			fmt.Println("Ingrese el Número EN KG para que se transforme a GR")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
			resultado = conversion(num1)
		}
		if esPromedio{
			fmt.Println("Ingrese el PRIMER NÚMERO")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = promedio(num1, num2)
		}
		if esIva{
			fmt.Println("Ingrese el Número del cual va a calcular el IVA")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
			resultado = iva(num1)
		}
		if esAreatriangulo{
			fmt.Println("Ingrese el PRIMER NÚMERO QUE ES LA BASE")
		    var num1 float64 = 0
		    fmt.Scanln(&num1)
		    fmt.Println("Ingrese el SEGUNDO NÚMERO QUE ES LA ALTURA")
		    var num2 float64 = 0
		    fmt.Scanln(&num2)
			resultado = areatriangulo(num1, num2)
		}
		fmt.Println("El resultado es: ", resultado)
		Calculadora()
	}else{
		if esSalir{
			fmt.Println("Gracias por Preferirnos")
		}else{
			Calculadora()
		}
	}
	
}
func  main () {
	Calculadora ()
}
