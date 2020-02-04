const Mutations = {
  async createJoke(parents, args, ctx, info) {
    // TODO: Check if they are logged in
    const joke = await ctx.db.mutation.createJoke({
      data: {
        ...args
      }
    }, info);

    return joke;
  },
  updateJoke(parents, args, ctx, info) {
    // First make a copy of the updates
    const updates = { ...args };
    // Remove the ID as this can never change.
    delete updates.id;
    // Run the update method from generated prisma.
    return ctx.db.mutation.updateJoke({
      data: updates,
      where: { id: args.id },
    }, info);
  }
};

module.exports = Mutations;
