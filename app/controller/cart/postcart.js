module.exports = {
  v1: async (ctx) => {
    const {
      shop, name, customer,  id, num, price
    } = ctx.request.body;

    const result = await ctx.service.cart.createNew(shop, name, customer,  id, num, price);
    ctx.body = result;
  },
};
