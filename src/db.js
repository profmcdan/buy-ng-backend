// This file connect to the remote prisma db and give us the ability to use js
const { Prisma } = require("prisma-binding");
const { importSchema } = require("graphql-import");

// const typeDefs = importSchema(`src/generated/prisma.graphql`);

const db = new Prisma({
  typeDefs: "./generated/prisma-client",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
