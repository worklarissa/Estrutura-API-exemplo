import  Express from "express";
import { FazAlgoDeExemplo } from "../controller/exemplo.controller.js";
const ExemploRouter = Express()

ExemploRouter.get("/rotaExemplo", FazAlgoDeExemplo)

export { ExemploRouter }