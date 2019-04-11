function createDraft(root, args, context) {
  return context.prisma.createPost({
    title: args.title,
    author: {
      connect: { id: args.userId },
    },
  });
}
function publish(root, args, context) {
  return context.prisma.updatePost({
    where: { id: args.postId },
    data: { published: true },
  });
}
function createUser(root, args, context) {
  return context.prisma.createUser({ name: args.name });
}

async function createItem(root, args, context, info) {
  // TODO: check if they are logged in
  const newItem = {
    title: args.title,
    description: args.description,
    price: args.price,
    image: args.image ? args.image : "",
    largeImage: args.largeImage ? args.largeImage : "",
  };
  const item = await context.prisma.createItem(newItem, info);
  return item;
}

async function updateItem(root, args, ctx, info) {
  const updates = { ...args };
  delete updates.id;
  const item = await ctx.prisma.updateItem(
    {
      where: { id: args.id },
      data: updates,
    },
    info,
  );
  return item;
}

module.exports = {
  createItem,
  updateItem,
};
