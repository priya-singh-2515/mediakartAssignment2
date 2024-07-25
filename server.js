import express from "express";
import mongoose from "mongoose";

import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";


const app = express();
app.use(express.json());

app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(8081, () => {
  console.log("server is running on 8081");
});

mongoose
  .connect(
    "mongodb+srv://Tarunchauhan:Tarun123@cluster0.aub5cv6.mongodb.net/D-TechSolutions"
  )
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
