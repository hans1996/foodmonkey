module.exports = {
    v1: async (ctx) => {
      const result = await ctx.service.transaction.findAlltransaction();
      ctx.body = result;
    },
  };
