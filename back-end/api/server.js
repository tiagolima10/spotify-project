import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

// Middleware para conectar o front-end ao back-end e dois domínios e portas diferentes
app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Olá, mundo!");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
