import { ExemploService } from "../service/exemplo.service.js";


const instanceOfExemploService = new ExemploService()


const FazAlgoDeExemplo = async (req,res) =>{

    try {
        const result = await instanceOfExemploService.ExemploServiçoFazAlgo()

        res.status(200).json({result})
    } catch (error) {
        res.status(400).json({message: `generic error: ${error}`})
    }

}

export { FazAlgoDeExemplo }