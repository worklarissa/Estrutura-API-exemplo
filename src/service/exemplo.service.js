import { ExemploEntity } from "../entities/Exemplo.entity.js";


export class ExemploService{
    async ExemploServiçoFazAlgo(){
        try {
            await ExemploEntity.sync()
            
            return 'essa função não faz nada é só um teste :)'
        } catch (error) {
            throw error
        }
    }
}