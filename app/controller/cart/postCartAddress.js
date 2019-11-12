module.exports = {
  v1: async (ctx) => {
    const {
      customer, idname ,delivery, address, price ,get, finish
    } = ctx.request.body;

    const result = await ctx.service.cart.createNewAddress(customer, idname ,delivery, address, price ,get, finish);
    ctx.body = result;
  },
};
