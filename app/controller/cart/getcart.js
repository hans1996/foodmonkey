module.exports = {
    v1: async (ctx) => {
      const { id } = ctx.query;
      const result = await ctx.service.cart.getcart(id);
      ctx.body = result;
    },
  };