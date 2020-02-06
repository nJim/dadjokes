const Mutations = {
  async createJoke(parents, args, ctx, info) {
    console.log(args);
    // TODO: Check if they are logged in
    const joke = await ctx.db.mutation.createJoke({
      ...args
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
  },
  async deleteJoke(parents, args, ctx, info) {
    console.log(args)
    const where = { id: args.id };
    // Find the joke with manual query.
    const item = await ctx.db.query.joke({where}, `{id content}`)
    // Delete the joke.
    return ctx.db.mutation.deleteJoke({where}, info);
  }
};

module.exports = Mutations;
