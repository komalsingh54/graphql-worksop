const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderProductSchema = new Schema({
  productId: String,
  quantity: Number,
  price: Number,
});

OrderProductSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

OrderProductSchema.set('toJSON', {
  virtuals: true
});

const OrderProduct = mongoose.model('OrderProduct', OrderProductSchema);

module.exports = OrderProduct;
