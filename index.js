// let's go!
require("dotenv").config({ path: ".env" });
const createServer = require("./src/createServer");
// const db = require("./src/db");

const server = createServer();

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now runnit on:  🚀 http://localhost:${deets.port}`);
  },
);
