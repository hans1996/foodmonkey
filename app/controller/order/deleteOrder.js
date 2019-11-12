module.exports = {
  v1: async (ctx) => {
    const { shop, name } = ctx.query;
    const result = await ctx.service.orders.deleteOne(shop, name);
    ctx.body = result;
  },
};
