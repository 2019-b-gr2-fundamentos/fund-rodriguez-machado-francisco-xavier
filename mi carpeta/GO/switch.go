// CUANTO GANAS AL MES
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Bienvenido")
	fmt.Println ("Ingrese su sueldo")
	var sueldo int
	fmt.Scanln(&sueldo)
     switch sueldo{
     case 1200:
	 fmt.Println("Resive todo su sueldo")
     case 1000:
	 fmt.Println("Se le descuenta 200 dolares")
     case 850:
	 fmt.Println("Se le descuentan 350 dolares")
     case 500:
	 fmt.Println("Se le descuentan 700")
     case 110:
	 fmt.Println("Se le decuenta 1090 dolares")
     default:
	 fmt.Println("No resive su sueldo")

    }
}

// JUEGO PARA SABER MAS ACERCA DE LA MUSICA QUE ESCUCHAS
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Bienvenido")
	fmt.Println ("Su gusto musical")
	var musica string
	fmt.Scanln(&musica)
	switch musica{
 case "Rock":
	 fmt.Println("El Rock es uno los generos mas escuchados de todos los tiempos")
 case "Elecctronica":
	 fmt.Println("Esta genero musical ha ido tomado fuerza entre los grupos mas joves")
 case "Pasillo":
	 fmt.Println("Es un genero muy apreciado por las personas mayores y algunas personas juvenes tambien")
	 fmt.Println("Tambien es el genereo que representa al pais")
 case "Sanjuanito":
	 fmt.Println("Es muy escuchado en las festividades del Inti Raymi")
 case "Baladas":
	 fmt.Println("El publico mas fuerte de este genero es el femenino, tambien es escuchado por hombres")
	 fmt.Println("Por lo general se coloca este tipo de musica cuando se quiere enamorar a alguien")
 case "Regeton":
	 fmt.Println("La mayoria de sus canciones tienen el mismo ritmo")
	 fmt.Println("Es muy utilizado en fiestas al ser un genero bailable")
 case "Cumbia":
     fmt.Println("Se emplea mucho en las fiesta, es un genero muy movido")
 default:
	 fmt.Println("El genero que escribio no consta en la lista, Intentelo de nuevo")

    }
}
// JUEGO DE ADIVINANZAS
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Bienvenido")
	fmt.Println("Ingrese la respuesta a la siguiente adivinanza")
	fmt.Println ("Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha")
	var adivinanza string
	fmt.Scanln(&adivinanza)
 switch adivinanza{
 case "escarabajo":
	 fmt.Println("La respuesta no es la correcta")
 case "Lacucaracha":
	 fmt.Println("FELICIDADES ACERTO")
 default:
	 fmt.Println("Ingrese un insecto valido")
	}
}
// JUEGO PARA SABER SI LE GUSTAS
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Bienvenido")
	fmt.Println ("Ingrese el tiempo que se demora en responder en minutos ej: 10")
	var amor int
	fmt.Scanln(&amor)
 switch amor{
     case 10:
	 fmt.Println("El o Ella esta super hiper mega interesad@s en ti")
	 fmt.Println("Aprovecha esta oportunidad no la dejes ir papu")
     case 20:
	 fmt.Println("El o Ella esta super hiper interesad@s en ti")
	 fmt.Println("Aprovecha esta oportunidad no la dejes ir papu")
     case 30:
	 fmt.Println("El o Ella esta super  interesad@s en ti")
	 fmt.Println("Aprovecha esta oportunidad no la dejes ir papu")
     case 60:
	 fmt.Println("El o Ella esta interesad@s en ti")
	 fmt.Println("Ponle mas atencion, hazla reir para que no pierda interes en ti")
     case 90:
	 fmt.Println("El o Ella esta  medianamente interesad@s en ti")
	 fmt.Println("Sigue insistiendo sin ser demasiado pesado")
     case 120:
	 fmt.Println("El o Ella esta medio interesad@s en ti")
	 fmt.Println("Sigue llamando mas su atencion")
     case 180:
	 fmt.Println("El o Ella esta casi nada interesad@s en ti")
	 fmt.Println("Prueba unas pocas veces mas y compara el resultado")
     case 240:
	 fmt.Println("El o Ella esta casi casi nada interesad@s en ti")
	 fmt.Println("Es momento de una retirada")
     case 580:
	 fmt.Println("El o Ella esta nada interesad@s en ti")
	 fmt.Println("Retirate con honor")
     case 1000:
	 fmt.Println("El o Ella esta nadita interesad@s en ti")
	 fmt.Println("Esto ya no es gracioso es triste :=(")
	 default:
		fmt.Println("Ingrese un tiempo valido")
    }
}