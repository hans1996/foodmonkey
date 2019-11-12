// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCartGetcart = require('../../../app/controller/cart/getcart');
import ExportCartPostcart = require('../../../app/controller/cart/postcart');
import ExportCartPostCartAddress = require('../../../app/controller/cart/postCartAddress');
import ExportCustomerDeletecustomer = require('../../../app/controller/customer/deletecustomer');
import ExportCustomerGetcustomer = require('../../../app/controller/customer/getcustomer');
import ExportCustomerPostcustomer = require('../../../app/controller/customer/postcustomer');
import ExportOrderDeleteOrder = require('../../../app/controller/order/deleteOrder');
import ExportOrderGetOrder = require('../../../app/controller/order/getOrder');
import ExportOrderGetOrders = require('../../../app/controller/order/getOrders');
import ExportOrderPostOrder = require('../../../app/controller/order/postOrder');
import ExportShopGetShops = require('../../../app/controller/shop/getShops');
import ExportShopRemainshops = require('../../../app/controller/shop/remainshops');
import ExportStaffDeleteStaff = require('../../../app/controller/staff/deleteStaff');
import ExportStaffGetStaff = require('../../../app/controller/staff/getStaff');
import ExportStaffPostStaff = require('../../../app/controller/staff/postStaff');
import ExportTransactionGetTransaction = require('../../../app/controller/transaction/getTransaction');
import ExportTransactionGetTransactionByDelivery = require('../../../app/controller/transaction/getTransactionByDelivery');
import ExportTransactionGetTransaction_1 = require('../../../app/controller/transaction/getTransaction_1');
import ExportTransactionUpdateTransaction = require('../../../app/controller/transaction/updateTransaction');
import ExportTransactionUpdateTransactionByDelivery = require('../../../app/controller/transaction/updateTransactionByDelivery');
import ExportTransactionUpdateTransactionByGet = require('../../../app/controller/transaction/updateTransactionByGet');

declare module 'egg' {
  interface IController {
    cart: {
      getcart: ExportCartGetcart;
      postcart: ExportCartPostcart;
      postCartAddress: ExportCartPostCartAddress;
    }
    customer: {
      deletecustomer: ExportCustomerDeletecustomer;
      getcustomer: ExportCustomerGetcustomer;
      postcustomer: ExportCustomerPostcustomer;
    }
    order: {
      deleteOrder: ExportOrderDeleteOrder;
      getOrder: ExportOrderGetOrder;
      getOrders: ExportOrderGetOrders;
      postOrder: ExportOrderPostOrder;
    }
    shop: {
      getShops: ExportShopGetShops;
      remainshops: ExportShopRemainshops;
    }
    staff: {
      deleteStaff: ExportStaffDeleteStaff;
      getStaff: ExportStaffGetStaff;
      postStaff: ExportStaffPostStaff;
    }
    transaction: {
      getTransaction: ExportTransactionGetTransaction;
      getTransactionByDelivery: ExportTransactionGetTransactionByDelivery;
      getTransaction_1: ExportTransactionGetTransaction_1;
      updateTransaction: ExportTransactionUpdateTransaction;
      updateTransactionByDelivery: ExportTransactionUpdateTransactionByDelivery;
      updateTransactionByGet: ExportTransactionUpdateTransactionByGet;
    }
  }
}
