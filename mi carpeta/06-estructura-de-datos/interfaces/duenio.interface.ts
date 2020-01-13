import {AnimalPerrito} from './animal-perrito.interface'
export interface Duenio{  // interface -> (Struct)
    nombre: string;
    apellidos: string;
    cedula?: string;  //OPCIONALES
    fechaNacimiento: number;
    mascotaPerrito?: AnimalPerrito[];
}