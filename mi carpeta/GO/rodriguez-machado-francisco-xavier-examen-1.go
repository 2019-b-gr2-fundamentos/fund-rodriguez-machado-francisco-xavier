// Razas de Perros 
package main 

	import (
	
		"fmt"
)
func RazasDePerros(){
	fmt.Println("BIENVENIDOS")
	fmt.Println("Ingrese la acción a realizar")
	fmt.Println("1. Crear")
	fmt.Println("2. Actualizar")
	fmt.Println("3. Eliminar")
	fmt.Println("4. Salir")
	var opciones string 
	fmt.Scanln(&opciones)
	var esCrear bool = opciones == "crear" || opciones == "1" || opciones == "1. Crear"
	var esActualizar bool = opciones == "actualizar" || opciones == "2" || opciones == "2. Actualizar"
	var esEliminar bool = opciones == "eliminar" || opciones == "3" || opciones == "3. Eliminar"
	var esSalir bool = opciones == "salir" || opciones == "4" || opciones == "4. Salir"
	var esValido bool = esCrear || esActualizar || esEliminar
	if esValido{
		fmt.Println("La lista de razas es:")
		Razas := []string{"PASTOR ALEMÁN", "HUSKY SIBERIANO", "SAN BERNARDO","AKITA INU","LABRADOR RETRIEVER","GOLDEN RETRIEVER", "SAMOYEDO", "MALAMUTE DE ALASKA", "BRACO DE WEIMAR"}
		fmt.Printf("%q\n", Razas)
		if esCrear {
			fmt.Println("Ingrese la nueva Raza: ")
			var nuevaRaza string
			fmt.Scanln(&nuevaRaza)
			Razas = append(Razas, nuevaRaza)
	    }

         if esActualizar {
	     fmt.Println("Ingrese el número del nombre que desea actualizar")
	     var indice int
	     fmt.Scanln(&indice)
	     fmt.Println("Ingrese la nueva raza de perro")
	     var RazasActualizado string
	     fmt.Scanln(&RazasActualizado)
	     Razas[indice] = RazasActualizado
		}
		if esEliminar {
			fmt.Println("Ingrese el número del indice del elemento a eliminar")
			var indice int
			fmt.Scanln(&indice)
			var continuacion int
			continuacion = indice + 1
			Razas = append(Razas[:indice], Razas[continuacion:]...)  // append sirve para anexar datos 
		}
		fmt.Printf("%q\n", Razas)
		RazasDePerros()
		}else{
		if esSalir{
			fmt.Println("Gracias por ampliar sus conocimientos sobre el mejor amigo del hombre")
		}else{
			RazasDePerros()
		} 
	}
}
func main() {
	RazasDePerros()
}



//Fuente
// https://listas.20minutos.es/lista/razas-de-perros-391927/