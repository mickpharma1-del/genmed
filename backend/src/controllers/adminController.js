import { Order } from "../models/Order.js";
import { Product } from "../models/Product.js";

export async function dashboardSummary(req, res) {
  const [totalOrders, totalProducts] = await Promise.all([
    Order.countDocuments(),
    Product.countDocuments()
  ]);

  return res.json({
    metrics: {
      totalOrders,
      totalProducts
    }
  });
}
