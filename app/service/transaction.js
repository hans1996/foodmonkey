const { Service } = require('egg');
const oracledb = require('oracledb');

const tableName = 'transaction';

class transactionService extends Service {
  async findAlltransaction() {
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute(`select idname,address,price 
                                            from transaction where delivery is null`);
    connection.close();
    console.log(result.rows);
    return result;
  }

  async findAlltransaction_1(customer) {
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute(`select idname,address,price,
                                                case when delivery is null then 1
                                                when delivery is not null and get='F' then 2
                                                when get='T' then 3 end as status
                                                from transaction
                                                where finish!='T' and customer='${customer}'`);
    connection.close();
    console.log(result.rows);
    return result;
  }


  async findAlltransactionDelivery(delivery) {
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute(`select idname,address,price 
                                            from transaction where finish='F' and delivery='${delivery}'`);
    connection.close();
    console.log(result.rows);
    return result;
  }






  async updateTransaction(id) {
    const connection = await this.app.oracle.getConnection();
    // const result = await connection.execute(`update transaction set finish='T' where idname=${id}`, { autoCommit: true });
    
    const sqlQuery = `update transaction set finish='T' where idname=:1`;

          const binds = [[id]];

        const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });
    
    connection.close();
    console.log(result.rows);
    return result;
  }

  async updateTransactionByGet(id) {
    const connection = await this.app.oracle.getConnection();

    const sqlQuery = `update transaction set get='T' where idname=:1`;

          const binds = [[id]];

        const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });
    
    connection.close();
    console.log(result.rows);
    return result;
  }


  async updateTransactionByDelivery(delivery, id) {
    const connection = await this.app.oracle.getConnection();
    
    const sqlQuery = `update transaction set delivery=:1 where idname=:2`;

          const binds = [[delivery,id]];

        const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });
    
    connection.close();
    console.log(result.rows);
    return result;
  }





}








module.exports = transactionService;