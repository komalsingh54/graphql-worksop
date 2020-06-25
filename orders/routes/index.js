const express = require('express');
const { 
  createOrder, 
  fetchAllOrder, 
  fetchOrderById, 
  fetchOrderProduct, 
  createOrderProduct, 
  fetchOrderProductById 
} = require('../controllers');
const router = express.Router();

router.post('/order', createOrder);
router.post('/order-product', createOrderProduct);
router.get('/orders', fetchAllOrder);
router.get('/order/:id', fetchOrderById);
router.get('/order-products', fetchOrderProduct);
router.get('/order-product/:id', fetchOrderProductById);

module.exports = router;
