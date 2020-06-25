const express = require('express');
const { registerNewCustomer, loginCustomer, fetchAllCustomers, fetchCustomerById } = require('../controllers');
const router = express.Router();

router.post('/customer', registerNewCustomer);
router.post('/login', loginCustomer);
router.get('/customers', fetchAllCustomers);
router.get('/customer/:id', fetchCustomerById);

module.exports = router;
