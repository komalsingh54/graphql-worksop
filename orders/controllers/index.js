const Order = require('../models/order');
const OrderProduct = require('../models/ProductOrder');

const fetchAllOrder = async (req, res) => {
  try {
    const Orders = await Order.find({});
    res.status(200).send(Orders);
  } catch (e) {
    console.error('---Error fetching Orders ----', e);
    res.status(500).send({ message: 'Error fetching Orders' });
  }
};

const fetchOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await Order.findOne({ _id: id });
    res.status(200).send(order);
  } catch (e) {
    console.error('---Error fetching order ----', id, e);
    res.status(500).send({ 
      message: 'Error fetching specific order informations' 
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const order = await newOrder.save();
    res.json(order);
  } catch (e) {
    console.error('---Error creating new order ----', e);
    res.status(500).send({ message: 'Error creating new order' });
  }
};

const fetchOrderProduct = async (req, res) => {
  try {
    const Orders = await OrderProduct.find({});
    res.status(200).send(Orders);
  } catch (e) {
    console.error('---Error fetching Orders ----', e);
    res.status(500).send({ message: 'Error fetching Orders Product' });
  }
};

const createOrderProduct = async (req, res) => {
  try {
    const { productId, price, quantity } = req.body;
    const newOrderProduct = new OrderProduct({ productId, price, quantity });
    await newOrderProduct.save();
    res.send('OrderProduct created successfully');
  } catch (err) {
    console.error('---Error creating new order product ----', err);
    res.status(500).send({ message: 'Error creating new order product' });
  }
};

const fetchOrderProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await OrderProduct.findOne({ _id: id });
    res.json(result);
  } catch (e) {
    console.error('---Error fetching OrderProduct ----', id, e);
    res.status(500).send({ 
      message: 'Error fetching specific OrderProduct informations' 
    });
  }
};

module.exports = { 
  fetchAllOrder, 
  fetchOrderById, 
  createOrder, 
  fetchOrderProduct, 
  createOrderProduct, 
  fetchOrderProductById
};
