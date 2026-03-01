import { Order } from "../models/Order.js";

export async function listMyOrders(req, res) {
  const orders = await Order.find({ userId: req.user.userId }).sort({ createdAt: -1 });
  return res.json({ orders });
}

export async function createOrder(req, res) {
  const order = await Order.create({ ...req.body, userId: req.user.userId });
  return res.status(201).json({ order });
}
