
module.exports = {
  v1: async (ctx) => {
    const { account, password, member } = ctx.query;
    const result = await ctx.service.staffs.findOne(account, password, member);
    ctx.body = result;
  },
};
