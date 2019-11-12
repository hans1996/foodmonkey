
module.exports = {
  v1: async (ctx) => {
    const { shop } = ctx.query;
    const result = await ctx.service.orders.findManyByShop(shop);
    ctx.body = result;
  },
};
