module.exports = {
    v1: async (ctx) => {
      const { customer } = ctx.query;
      const result = await ctx.service.transaction.findAlltransaction_1(customer);
      ctx.body = result;
    },
  };