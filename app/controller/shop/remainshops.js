module.exports = {
  v1: async (ctx) => {
    const { shop } = ctx.query;
    const result = await ctx.service.shops.remainshops(shop);
    ctx.body = result;
  },
};
