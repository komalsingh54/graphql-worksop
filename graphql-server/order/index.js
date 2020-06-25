const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3333/'
});


const fetchOrderProducts = async () => {
  try {
    const { data } = await instance.get('/order-products');
    return data;
  } catch (e) {
    console.error('---error fetching products--', e);
    throw e;
  }
};

const addOrderProduct = async (orderProduct) => {
  try {
    const { data } = await instance.post('order-product', orderProduct);
    return data;
  } catch (e) {
    console.error('---error adding order products--', e);
    throw e;
  }
};

const fetchOrderProductById = async (id) => {
  try {
    const { data } = await instance.get(`/order-product/${id}`);
    return data;
  } catch (e) {
    console.error('--- error fething order product ---');
    throw e;
  }
};

const addOrder = async (order) => {
  try {
    const { data } = await instance.post('/order', order);
    return data;
  } catch (e) {
    console.error('---error adding order --', e);
    throw e;
  }
};

const fetchOrders = async () => {
  try {
    const { data } = await instance.get('/orders');
    return data;
  } catch (e) {
    console.error('---error get order --', e);
    throw e;
  }
};

module.exports = { 
  fetchOrderProducts, 
  addOrderProduct, 
  fetchOrderProductById,
  addOrder,
  fetchOrders,
};
