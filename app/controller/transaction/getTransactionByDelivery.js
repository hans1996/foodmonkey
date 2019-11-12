module.exports = {
    v1: async (ctx) => {
      const { delivery} = ctx.query;
      const result = await ctx.service.transaction.findAlltransactionDelivery(delivery);
      ctx.body = result;
    },
  };