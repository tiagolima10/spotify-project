import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

// Middleware para conectar o front-end ao back-end e dois domínios e portas diferentes
app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Olá, mundo!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
