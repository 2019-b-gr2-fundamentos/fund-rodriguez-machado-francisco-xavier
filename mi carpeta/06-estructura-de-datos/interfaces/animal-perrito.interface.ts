import {Duenio}from './duenio.interface'
export interface AnimalPerrito{  // interface -> (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number;  //OPCIONALES
    // hijos: null,
    perritas?: string[]; //OPCIONALES
    vacunado?: boolean;  //OPCIONALES
    duenio?: Duenio;
}
