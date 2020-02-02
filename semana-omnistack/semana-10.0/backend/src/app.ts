import express from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";

import { routes } from "./routes/routes";

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.expressRoutes();
        this.middleware();
    }

    private middleware(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(json());
        this.app.use(cors);
    }

    private expressRoutes(): void {
        this.app.use("/locations", routes);
    }
    

}

export default new App().app;