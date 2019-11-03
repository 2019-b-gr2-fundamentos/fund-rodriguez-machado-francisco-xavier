package main

import (
	"fmt"
)

func main() {

	opc := 0

	var num1, num2, num3, num4, result int

	for {
		fmt.Println("Seleccione una opcion del menú")
		fmt.Println("1-Calculo de la pendiente")
		fmt.Scanf("%d\n", &opc)

		fmt.Println("Ingrese la coordenadda del punto final en el eje Y")
		fmt.Scanf("%d\n", &num1)

		fmt.Println("Ingrese la coordenadda del punto inicial en el eje Y")
		fmt.Scanf("%d\n", &num2)

		fmt.Println("Ingrese la coordenadda del punto final en el eje X")
		fmt.Scanf("%d\n", &num3)

		fmt.Println("Ingrese la coordenadda del punto inicial en el eje X")
		fmt.Scanf("%d\n", &num4)
		result = (num1 - num2) / (num3 - num4)
		fmt.Printf("El resultado de la pendiente es %d\n", result)

	}
}
