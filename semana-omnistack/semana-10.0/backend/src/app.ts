import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import * as router from"./routes/routes";

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.expressRoutes();
    }

    private middleware(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private expressRoutes(): void {
        this.app.use("/locations", router.routes);
    }
    

}

export default new App().app;