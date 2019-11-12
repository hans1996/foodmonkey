module.exports = {
    v1: async (ctx) => {
      const { delivery, id } = ctx.request.body;
      const result = await ctx.service.transaction.updateTransactionByDelivery(delivery, id);
      ctx.body = result;
    },
  };