module.exports = {
  v1: async (ctx) => {
    const {
      shop, name, description, price,
    } = ctx.request.body;
    const result = await ctx.service.orders.createNew(shop, name, description, price);
    ctx.body = result;
  },
};
