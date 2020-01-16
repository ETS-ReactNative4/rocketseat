import express from "express";

export const routes: express.Router = express.Router();

routes.get("/locations", (req, res) => res.json({ message: "Semana OmniStack 10.0" }));