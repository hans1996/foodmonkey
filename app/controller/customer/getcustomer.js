
module.exports = {
  v1: async (ctx) => {
    const { account, password } = ctx.query;
    const result = await ctx.service.staffs.findOne(account, password);
    ctx.body = result;
  },
};
