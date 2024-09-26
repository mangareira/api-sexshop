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
        this.app.use(cors())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use('/fotos', express.static(path.join(__dirname,'..', 'fotos')))
    }
    listen () {
        this.app.listen(process.env.PORT, () => console.log("Server is running"))
    }
}