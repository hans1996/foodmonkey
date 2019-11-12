/* eslint valid-jsdoc: "off" */


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  // eslint-disable-next-line no-multi-assign
  const config = exports = {};
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   * */

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1573180257155_5809`;

  // add your middleware config here
  config.middleware = [];

  config.jwt = {
    secret: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  config.oracle = {
    client: {
      user: 'Group18',
      password: 'group1818',
      connectString: '(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 140.117.69.58)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))',

    },
  };

  config.cors = { origin: '*', allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' };

  config.UV_THREADPOOL_SIZE = 4;

  return config;
};
