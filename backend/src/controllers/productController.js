import { Product } from "../models/Product.js";

export async function listProducts(req, res) {
  const products = await Product.find().sort({ createdAt: -1 }).limit(100);
  return res.json({ products });
}

export async function createProduct(req, res) {
  const product = await Product.create(req.body);
  return res.status(201).json({ product });
}
