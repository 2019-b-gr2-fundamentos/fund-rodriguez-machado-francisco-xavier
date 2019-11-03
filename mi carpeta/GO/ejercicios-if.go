// Programa para saber su situación económica
package main

import(
	"fmt"
	"strconv"
)
func main(){
	fmt.Println("Por favor, ingrese su salario")
	var n string
	fmt.Scan(&n)
	fltStr,_ := strconv.ParseFloat("n", 64)
	if fltStr >= 0 && fltStr <= 365 {
		fmt.Println("Usted pertence a la clase baja")
	}else{
		if fltStr > 365 && fltStr <= 600{
			fmt.Println("Usted es clase media baja")
		}else{ 
			if fltStr > 600 && fltStr <= 1000{
				fmt.Println("Usted es clase media alta")
			}else{ 
				if fltStr > 1000{
					fmt.Println("Usted pertenece a la clase alta")
				}else{
				 if fltStr < 0{
						fmt.Println("Ingrese una cantidad válida")
					}
				}
			}
		}
	}
}

//  Programa para saber si llevas una vida saludable

package main

import(
	"fmt"
	"strconv"
)
func main(){
	fmt.Println("Por favor, ingrese el número de calorias que consume al día")
	var n1 string
	fmt.Scan(&n1)
	fltStr,_ := strconv.ParseFloat("n1", 64)
	if fltStr > 1000 && fltStr <= 3000 {
		fmt.Println("Usted no se alimenta de manera correcta")
	}else{
		if fltStr >= 3000 && fltStr <= 5000{
			fmt.Println("Usted se alimenta de manera regualar")
		}else{ 
			if fltStr >= 5000 && fltStr <= 7000{
				fmt.Println("Usted se alimenta de manera saludable")
			}else{ 
				if fltStr > 7000{
					fmt.Println("Usted come en sobre exceso, haga dieta")
				}else{
				 if fltStr < 0{
						fmt.Println("Ingrese una cantidad válida")
					}
				}
			}
		}
	}
}
// Programa para saber si apruebas el semestre
package main
import(
	"fmt"
	"strconv"
)
func main(){
	fmt.Println("Por favor, su nota total")
	var n2 string
	fmt.Scan(&n2)
	fltStr,_ := strconv.ParseFloat("n2", 128)
	if fltStr >= 0 && fltStr < 9 {
		fmt.Println("Usted ha perdido el semestre)
	}else{
		if fltStr >= 9 && fltStr < 14{
			fmt.Println("Usted ha llegado a supletorio, por favor estudie")
		}else{ 
			if fltStr >= 14 && fltStr <= 20{
				fmt.Println("Usted Aprobó")
			}else{ 
				if fltStr < 0{
					fmt.Println("Ingrese una nota válida")
				}
			}
		}
	}
}	