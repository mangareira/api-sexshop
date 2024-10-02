import express ,{ Application } from "express";
import cors from "cors"
import { Routes } from "./routes/router";
import { errorMiddleware } from "./middlawares/error.middlaware";
import path from 'path'

export class App {
    public app: Application
    private routes = new Routes()
    constructor() {
        this.app = express()
        this.middlawareInitializer()
        this.routesInitializer()
        this.intercepitionError()
    }

    private routesInitializer() {
        this.app.use("/v1",  this.routes.router)
    }

    private intercepitionError() {
        this.app.use(errorMiddleware)
    }

    private middlawareInitializer () {
        this.app.use(express.json())
         // Configurando CORS com opções
        const corsOptions = {
            origin: ['http://localhost:3000', 'https://sexymorena.com.br'], // Permitir múltiplas o>
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
            allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
            credentials: true, // Permitir cookies se necessário
        }
        this.app.use(cors(corsOptions))
        this.app.use(express.urlencoded({extended: true}))
        this.app.use('/fotos', express.static(path.join(__dirname,'..', 'fotos')))
    }
    listen () {
        this.app.listen(process.env.PORT, () => console.log("Server is running"))
    }
}
