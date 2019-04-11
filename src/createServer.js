const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client/");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Post = require("./resolvers/Post");

const resolvers = {
  Query,
  Mutation,
};

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, prisma }),
  });
}

module.exports = createServer;
