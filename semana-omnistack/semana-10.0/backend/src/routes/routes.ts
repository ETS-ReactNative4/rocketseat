import * as controller from "../controllers/controller";

import express from "express";



export const routes: express.Router = express.Router();

routes.get("/", (req, res) => res.json({ message: "Semana OmniStack 10.0" }));
routes.get("/developers", controller.getAllDevelopers);
routes.get("/developers/founded", controller.getDevelopersPerLocation);
routes.post("/developers", controller.createDeveloper);