import express from "express";
import bodyParser from "body-parser";
import { router as mainRoutes } from "./routes/main.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(mainRoutes);

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => app.listen(8080))
  .catch((err) => console.log(err));
