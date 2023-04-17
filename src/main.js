/*--------------------- WEBDAV WITH LIBRARY ---------------------*/
import { createClient } from "webdav";

/*--------------------- Env vars from .env ---------------------*/
import { config } from "dotenv";
config();

/*--------------------- Connect ---------------------*/
const client = createClient("https://webdav.iserv-schillerschule.de/", {
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
});

// Get directory contents
const directoryItems = await client.getDirectoryContents("/");
console.log(directoryItems);
