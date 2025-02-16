import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db, client } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

// const responseSongs = await db.collection("songs").insertMany(newSongsArray);

// const responseArtists = await db
//   .collection("artists")
//   .insertMany(newArtistArray);

// console.log(responseSongs);
// console.log(responseArtists);

async function insertData() {
  try {
    const responseSongs = await db
      .collection("songs")
      .insertMany(newSongsArray);
    const responseArtists = await db
      .collection("artists")
      .insertMany(newArtistArray);

    console.log("Songs inserted:", responseSongs);
    console.log("Artists inserted:", responseArtists);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    // Fechar a conexão com o banco de dados
    await client.close();
  }
}

insertData();
