// Programa para saber a que nivel económico perteneces
const ingresosString = prompt("Por favor, ingrese su salario")
const ingresos = Number(ingresosString)
if(ingresos >= 0 && ingresos <= 365){
    console.log("Usted es clase baja")
}else{
    if(ingresos >365 && ingresos <= 600){
        console.log("Ustede es clase media baja");
}else{
        if(ingresos > 600 && ingresos <=1000){
        console.log("Usted es calse media alta");
}else{
    if(ingresos > 1000){
        console.log("Usted es calse alta");
        }
    }
}
}

// Programa para saber si llevas una vida salidable
const caloriasString = prompt("Por favor ingrse el numero de calorias que consume al día")
const calorias = Number(caloriasString);
if(calorias > 1000 && calorias <= 3000){
    console.log("Usted tiene una mala alimentacion")
    console.log("tiene que comer más, esta flaco")
    }else{
        if(calorias > 3000 && calorias <=5000){
            console.log("Usted se alimenta de manera regualar")
            console.log("Consuma más calorias provenientes de grasas animales");
        }else{
            if(calorias >5000 && calorias <=7000){
                console.log("FELICIDADES, Uste lleva una vida saludable")
                console.log("Siga asi");
            }else{
                if(calorias > 7000){
                    console.log("Usted esta comiendo demasiado, deje de ser puerco xd");
                }else{
                    if(calorias < 1000){
                        console.log("Ingrese un número valido de calorias");
                    }
                }
            }
        }
    }

// Programa para saber si apruebas el semestre
const calificacionString = prompt("Ingrese su calificación")
const calificacion = Number(calificacionString);
if(calificacion >= 0 && calificacion <9){
    console.log("Lo sentimos, a perdido el semestre en esta asignatura")
    console.log("Segunda es todo")
    }else{
        if(calificacion >=9 && calificacion < 14){
            console.log("A llegado a supletorio, siga estudiando");
        }else{
            if(calificacion >= 14 && calificacion <= 20){
                console.log("FELICIDADES USTED APROBÓ LA ASIGNATURA");
            }else{
                if(calificacion < 0 && calificacion > 20){
                    console.log("ingrese incorrecta");
                }else{
                    console.log("ingrese una clificación válida")
                }
            }
        }

    }
