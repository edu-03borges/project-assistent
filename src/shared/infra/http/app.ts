import express from "express";
import connectionDb from "../typeorm/";

import { routes } from "./routes/index";

import "../../container";
import "reflect-metadata";

connectionDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

export { app };