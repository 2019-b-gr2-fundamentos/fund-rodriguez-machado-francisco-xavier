/*
1 Analisis
2 Algebra 
3 Compiladores
5 Fundamentos
7 Calculo
11 Fisica
13 Ingles
*/

// 1000 deberes 

package main

import (

	"fmt"
)

func main() {
	var Analisis = 0
	var Algebra = 0
	var Compiladores = 0
	var Fundamentos = 0
	var Calculo = 0
	var Fisica = 0
	var Ingles = 0

	for deberes := 0; deberes < 1000; deberes++ {
		if deberes % 13 == 0 {
			Ingles = Ingles + 1 
		} else if deberes % 11 == 0 {
			Fisica = Fisica + 1
		} else if deberes % 7 == 0 {
			Calculo = Calculo + 1 
		} else if deberes % 5 == 0 {
			Fundamentos = Fundamentos + 1
		} else if deberes % 3 == 0 {
			Compiladores = Compiladores + 1 
		} else if deberes % 2 == 0 {
			Algebra = Algebra + 1
		} else if deberes % 2 != 0 {
			Analisis = Analisis + 1 
		}
	}
	fmt.Println(" los deberes de Analisis hechos son: ", Analisis)
	fmt.Println(" los deberes de Algebra hechos son: ", Algebra)
	fmt.Println(" los deberes de Calculo hechos son: ", Calculo)
	fmt.Println(" los deberes de Compiladores hechos son: ", Compiladores)
	fmt.Println(" los deberes de Fisica hechos son: ", Fisica)
	fmt.Println(" los deberes de Findamentos hechos son: ", Fundamentos)
	fmt.Println(" los deberes de Ingles hechos son: ", Ingles)
}