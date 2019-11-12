const { Service } = require('egg');
const oracledb = require('oracledb');

const tableName = 'shops';

class ShopService extends Service {
  async findAllShopName() {
    const connection = await this.app.oracle.getConnection();

    // const result = await connection.execute(`SELECT * FROM ${tableName} `);
    const result = await connection.execute(`SELECT shops.name as shop,menu.name as food,menu.price 
                                                  FROM  (shops join menu
                                                  on shops.account=menu.shop)`);
    connection.close();
    console.log(result.rows);
    return result;
  }
  // async findAllShopName() {
  //     const connection = await this.app.oracle.getConnection();

  //     const result = await connection.execute(`SELECT * FROM ${tableName}  `);

  //     connection.close();
  //     console.log(result.rows);
  //     return result;
  //   }

  async remainshops(shop) {
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute(`SELECT cart.id as id,cart.name as name,cart.num as num 
                                                 FROM (transaction JOIN cart on transaction.idname=cart.id)
                                                 WHERE transaction.get='F' AND transaction.delivery IS NOT NULL AND
                                                 cart.shop=(SELECT name FROM shops WHERE ACCOUNT='${shop}')`);
    connection.close();
    console.log(result.rows);
    return result;
    // if (result.rows.length > 0) return {'account' : result.rows[0][0],'member' : member };
    //   return null;
  }

}


module.exports = ShopService;
