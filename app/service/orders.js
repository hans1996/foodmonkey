const { Service } = require('egg');
const oracledb = require('oracledb');

const tableName = 'orders';

class OrderService extends Service {
  async findOneByShopAndName(shop, name) {
    const connection = await this.app.oracle.getConnection();

    const result = await connection.execute(`SELECT * FROM ${tableName} where shop='${shop}' AND name = '${name}'`);
    connection.close();
    console.log(result.rows[0]);
    if (result.rows.length > 0) return result.rows[0];
    return 'null';
  }

  async findManyByShop(shop) {
    const connection = await this.app.oracle.getConnection();

    const result = await connection.execute(`SELECT * FROM ${tableName} where shop='${shop}'`);
    connection.close();
    console.log(result.rows);
    if (result.rows.length > 0) return result.rows;
    return 'null';
  }

  async createNew(shop, name, description = '', price) {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {
          const sqlQuery = `INSERT INTO ${tableName}(shop, name, description, price) VALUES (:1, :2, :3, :4)`;

          const binds = [[shop, name, description, price]];

          const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });

          console.log('Number of inserted rows:', result.rowsAffected);
          await connection.close();
        } catch (err) {
          console.log('Error when closing the database connection: ', err);
        }
      }
    }
    return 'ok';
  }

  async deleteOne(shop, name) {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {
          const sqlQuery = `DELETE FROM ${tableName} WHERE shop = :1 AND name = :2`;

          const binds = [[shop, name]];

          const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });

          console.log('Number of inserted rows:', result.rowsAffected);
          await connection.close();
        } catch (err) {
          console.log('Error when closing the database connection: ', err);
        }
      }
    }
    return 'ok';
  }
}

module.exports = OrderService;
