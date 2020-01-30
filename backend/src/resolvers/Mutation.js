const Mutations = {
  async createJoke(parents, args, ctx, info) {
    // TODO: Check if they are logged in
    const joke = await ctx.db.mutation.createJoke({
      data: {
        ...args
      }
    }, info);

    return joke;
  }
};

module.exports = Mutations;
