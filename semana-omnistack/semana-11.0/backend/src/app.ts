import express from "express"
import cors from "cors"
import * as bodyParser from "body-parser"
import router from "./routes/routes"

class App {
    app: express.Application

    constructor() {
        this.app = express()
        this.middleware()
        this.router()
    }

    private middleware(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private router(): void {
        this.app.use('/v1', router)
    }
}

export default new App().app