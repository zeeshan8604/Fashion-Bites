const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  cancel: {
    type: Boolean,
    default: false,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
