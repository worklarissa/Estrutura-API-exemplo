import express from "express"
import { testConnection } from "./database/connect.js"
import { routers } from "./routes/index.routes.js"
const app = express()
const port = 3000

app.use(express.json())
app.use(routers)

app.listen(port, () =>{
    testConnection()
    console.log(`servidor aberto na porta ${port}`)
})