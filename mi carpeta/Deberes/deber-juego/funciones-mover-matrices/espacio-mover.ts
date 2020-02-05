import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
export async function dondeIraLaFicha(){
    const preguntaLugar = await prompts({
        type: 'text',
        name: 'lugar',
        message: ''
    })
}