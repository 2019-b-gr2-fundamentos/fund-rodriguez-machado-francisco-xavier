package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {

	cmd := exec.Command("cmd", "/c", "cls")
	cmd.Stdout = os.Stdout
	opc := 0
	ver := 0
	var num1, num2, result int

	for {
		cmd.Run()
		fmt.Println("Seleccione una opcion del menú")
		fmt.Println("1-Suma \n2-Resta\n3-Multiplicación\n4-División")
		fmt.Scanf("%d\n", &opc)

		fmt.Println("Ingrese el primer numero")
		fmt.Scanf("%d\n", &num1)

		fmt.Println("Ingrese el segundo numero")
		fmt.Scanf("%d\n", &num2)

		if opc == 1 {
			result = num1 + num2
			fmt.Printf("El resultado de la suma es %d\n", result)
		} else if opc == 2 {
			result = num1 - num2
			fmt.Printf("El resultado de la resta es %d\n", result)
		} else if opc == 3 {
			result = num1 * num2
			fmt.Printf("El resultado de la multiplicacion es %d\n", result)
		} else if opc == 4 {
			result = num1 / num2
			fmt.Printf("El resultado de la division es %d\n", result)
			
		} else {
			fmt.Println("Opcion invalida")
		}
		fmt.Println("Presione 1 para salir ")
		fmt.Println("Presione 2 para continuar")
		fmt.Scanf("%d\n", &ver)
		if ver == 1 {
			break
		} else if ver != 2 {
			fmt.Println("Opcion invalida")
		}
	}
}
