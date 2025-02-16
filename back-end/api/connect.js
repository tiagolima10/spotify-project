import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://ticobaiano:DXCeDObbNTjLOqkM@cluster0.4wvwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projetoSpotify");
export { client }; // Exportando o client para poder fechar a conexão
