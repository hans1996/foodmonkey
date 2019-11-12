const { Service } = require('egg');
const oracledb = require('oracledb');
const crypto = require('crypto');

const tableName = 'staffs';


class StaffService extends Service {
  // async findOne(account, password) {
  //   const connection = await this.app.oracle.getConnection();
  //   // const result = await connection.execute(`SELECT account FROM ${tableName} where account='${account}' AND password = '${password}'`);

  //   const result = await connection.execute(`SELECT * FROM ${tableName} where account='${account}' AND password = '${
  //     crypto.createHmac('sha256', this.app.config.keys)
  //     .update(password)
  //     .digest('hex')}'
  //     `);
  //   connection.close();
  //   console.log(result.rows);
  //   if (result.rows.length > 0) return result.rows[0];
  //     return 'null';
  // }

  async findOne(account, password, member) {
    const connection = await this.app.oracle.getConnection();

    const result = await connection.execute(`SELECT account FROM ${member} where account='${account}' AND password = '${password}'`);
    connection.close();
    console.log(result.rows);
    if (result.rows.length > 0) return { account: result.rows[0][0], member };
    return null;
  }

  async createNew(account, password, phone = 0, email = 0) {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {
          const sqlQuery = `INSERT INTO ${tableName}(ACCOUNT, PASSWORD, phone, email) VALUES (:1, :2, :3, :4)`;

          const binds = [[account,
            crypto.createHmac('sha256', this.app.config.keys)
              .update(password)
              .digest('hex'), phone, email,
          ]];

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

  async deleteOne(account) {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {
          const sqlQuery = `DELETE FROM ${tableName} WHERE account = :1`;

          const binds = [[account]];

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

module.exports = StaffService;
