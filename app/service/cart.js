const { Service } = require('egg');
const oracledb = require('oracledb');
const tableName = 'cart';
const tableName1 = 'transaction';

class CartService extends Service {
  async createNew(shop, name, customer,  id, num, price) {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {

          const sqlQuery = `INSERT INTO ${tableName}(shop, name, customer,  id, num, price ) VALUES (:1, :2, :3, :4, :5, :6 )`;

          const binds = [[shop, name, customer,  id, num, price]];

          const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });

          console.log('Number of inserted rows:', result.rowsAffected);
          await connection.close();
        } catch (err) {
          //console.log('Error when closing the database connection: ', err);
          console.log(id)
        }
      }
    }
    return 'ok';
  }



  async createNewAddress(customer, idname ,delivery =null , address, price ,get='F', finish='F') {
    let connection;
    try {
      connection = await oracledb.getConnection(this.config.oracle.client);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      if (connection) {
        try {
          // const customer = 'customer3'
          // const id = 3
          // const price = 10
          // const get = 'F'
          // const finsh = 'F'
          const sqlQuery = `INSERT INTO ${tableName1}(customer, idname ,delivery, address, price ,get, finish) VALUES (:1, :2, :3, :4, :5, :6 ,:7 )`;
          
          // const sqlQuery = `INSERT INTO ${tableName1}(customer, id ,delivery, address, price ,get, finish) VALUES (${customer}, ${id}, :3, :4, ${price}, ${get}, ${finsh} )`;
          
          //(shop, name,customer,  num, price,id ) VALUES (:1, :2, :3, :4, :5,${id} )`;
          // const sqlQuery = 
          //                   `insert into transaction (customer,id,price,get,finish,address,delivery)
          //                   select customer,id,sum(price) as price,'F' as get,'F' as finish,null as address,null as delivery
          //                   from cart
          //                   where id=(select max(id)+1 from transaction)
          //                   group by customer,id,'F',null;
          //                   update transaction set address=${address},delivery=${delivery} where id=(select max(id) from transaction)`;

          const binds = [[ customer, idname ,delivery, address, price ,get, finish]];

          const result = await connection.executeMany(sqlQuery, binds, { autoCommit: true });
          
          console.log('Number of inserted rows:', result.rowsAffected);
          await connection.close();
        } catch (err) {
          console.log('Error when closing the database connection: ', err);
          return err;
        }
      }
    }
    return  "OK";
  }


  async getcart(id) {
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute(`select cart.shop,shops.address,cart.name,cart.num,cart.price 
                                             from (cart join shops on cart.shop=shops.name)
                                             where id=${id}`);
    connection.close();
    console.log(result.rows);
    return result;
  }
}

module.exports = CartService;