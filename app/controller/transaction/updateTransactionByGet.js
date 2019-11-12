module.exports = {
    v1: async (ctx) => {
      const { id } = ctx.request.body;
      const result = await ctx.service.transaction.updateTransactionByGet(id);
      ctx.body = result;
    },
  };