module.exports = (appInfo) => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     * */
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1573180257155_5809`;

  // add your middleware config here
  config.middleware = [];

  config.oracle = {
    client: {
      user: 'Group18',
      password: 'group1818',
      connectString: '(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 140.117.69.58)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))',
    },
  };
  return config;
};
