module.exports = {
  v1: async (ctx) => {
    const {
      account, password, phone, email,
    } = ctx.request.body;

    // eslint-disable-next-line max-len
    const result = await ctx.service.staffs.createNew(account, password, phone, email);
    ctx.body = result;
  },
};
