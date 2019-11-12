// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCart = require('../../../app/service/cart');
import ExportCustomers = require('../../../app/service/customers');
import ExportOrders = require('../../../app/service/orders');
import ExportShops = require('../../../app/service/shops');
import ExportStaffs = require('../../../app/service/staffs');
import ExportTransaction = require('../../../app/service/transaction');

declare module 'egg' {
  interface IService {
    cart: ExportCart;
    customers: ExportCustomers;
    orders: ExportOrders;
    shops: ExportShops;
    staffs: ExportStaffs;
    transaction: ExportTransaction;
  }
}
