module.exports = {
  v1: async (ctx) => {
    const {
      account, password, phone, address, introduce, name,
    } = ctx.request.body;
    const result = await ctx.service.customers.createNew(account, password, phone, address, introduce, name);
    ctx.body = result;
  },
};
