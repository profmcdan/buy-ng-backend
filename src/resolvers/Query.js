// import * from "../generated/prisma-client/index.d";
function publishedPosts(root, args, context) {
  return context.prisma.posts({ where: { published: true } });
}
function post(root, args, context) {
  return context.prisma.post({ id: args.postId });
}
function postsByUser(root, args, context) {
  return context.prisma
    .user({
      id: args.userId,
    })
    .posts();
}

function items(root, args, ctx, info) {
  return ctx.prisma.items();
}

function item(root, args, ctx, info) {
  return ctx.prisma.item({ id: args.id });
}

function itemsConnection(root, args, ctx, info) {
  return {
    pageInfo: ctx.prisma.itemsConnection(args).pageInfo(),
    edges: ctx.prisma.itemsConnection(args).edges(),
    aggregate: ctx.prisma.itemsConnection(args).aggregate(),
  };
  // .aggregate()
  // .count();
}

module.exports = {
  items,
  item,
  itemsConnection,
};
