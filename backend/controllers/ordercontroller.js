const Order = require("../models/Order");
const User = require("../models/UserModel");

const getAllOrder = async (req, res) => {
  try {
    const allorder = await Order.find({});
    res.status(200).json({
      allorder,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
async function getOrderById(req, res) {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.params.id });
    res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

const getOrdersByStatus = async (req, res) => {
  try {
    const orders = await Order.find({ status: req.params.id });
    res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

const addOrder = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ errors: "User not found" });
    }
    const newOrder = await Order.create({
      ...req.body,
      buyer: req.user.id,
    });
    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
      },
    });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(400).json({
      status: "failed",
      message: "Failed to add order. Please try again later.",
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

module.exports = {
  addOrder,
  getAllOrder,
  getOrderById,
  getOrdersByUserId,
  updateOrder,
};
