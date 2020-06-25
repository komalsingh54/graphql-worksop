const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customerId: String,
  shippingAddress: String,
  paymentMethod: String,
  products:[]
});


const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
