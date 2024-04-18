import { Router } from "express"
import { ExemploRouter } from "./exemplo.routes.js"

const routers = Router()

routers.use("/exemplo", ExemploRouter)

export { routers }