
module.exports = {
  v1: async (ctx) => {
    const result = await ctx.service.shops.findAllShopName();
    ctx.body = result;
  },
};
