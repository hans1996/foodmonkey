
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const apiVer1 = '/api/v1';


  // staff
  router.get(`${apiVer1}/staff`, controller.staff.getStaff.v1);
  router.post(`${apiVer1}/staff`, controller.staff.postStaff.v1);
  router.delete(`${apiVer1}/staff`, controller.staff.deleteStaff.v1);

  // order
  router.get(`${apiVer1}/orders`, controller.order.getOrders.v1);
  router.get(`${apiVer1}/order`, controller.order.getOrder.v1);
  router.post(`${apiVer1}/order`, controller.order.postOrder.v1);
  router.delete(`${apiVer1}/order`, controller.order.deleteOrder.v1);

  // shop
  router.get(`${apiVer1}/shops`, controller.shop.getShops.v1);
  router.get(`${apiVer1}/shopss`, controller.shop.remainshops.v1);


  // cart
  router.post(`${apiVer1}/cart`, controller.cart.postcart.v1);
  router.post(`${apiVer1}/cart/address`, controller.cart.postCartAddress.v1);
  router.get(`${apiVer1}/cart`, controller.cart.getcart.v1);

  // transaction
  router.get(`${apiVer1}/transaction`, controller.transaction.getTransaction.v1);
  router.get(`${apiVer1}/transaction1`, controller.transaction.getTransaction_1.v1);
  router.get(`${apiVer1}/transaction/delivery`, controller.transaction.getTransactionByDelivery.v1);
  router.put(`${apiVer1}/transaction`, controller.transaction.updateTransaction.v1); 
  router.put(`${apiVer1}/transaction/get`, controller.transaction.updateTransactionByGet.v1);
  router.put(`${apiVer1}/transaction/delivery`, controller.transaction.updateTransactionByDelivery.v1);
};
