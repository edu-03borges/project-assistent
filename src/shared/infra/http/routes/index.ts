import { Router } from "express";
import { phraseRoutes } from "./phrase.routes";

const routes = Router();

routes.use(phraseRoutes);

export { routes };