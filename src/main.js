/*--------------------- WEBDAV WITH LIBRARY ---------------------*/
import { createClient } from "webdav";

// const client = createClient("https://webdav.iserv-schillerschule.de/", {
// 	username: "",
// 	password: "",
// });

const client = createClient("http://localhost:80/dav");

// Get directory contents
const directoryItems = await client.getDirectoryContents("/");
console.log(directoryItems);
