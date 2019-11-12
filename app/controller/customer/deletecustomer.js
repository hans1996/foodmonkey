module.exports = {
  v1: async (ctx) => {
    const { account } = ctx.query;
    const result = await ctx.service.staffs.deleteOne(account);
    ctx.body = result;
  },
};
