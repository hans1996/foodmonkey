module.exports = {
    v1: async (ctx) => {
      const { idName } = ctx.request.body;
      const result = await ctx.service.transaction.updateTransaction(idName);
      ctx.body = result;
    },
  };