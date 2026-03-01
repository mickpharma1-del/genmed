import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    brand: String,
    saltComposition: String,
    category: { type: String, required: true },
    mrp: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    discountPercent: { type: Number, default: 0 },
    stockQuantity: { type: Number, default: 0 },
    expiryDate: Date,
    prescriptionRequired: { type: Boolean, default: false },
    substitutes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    images: [String],
    manufacturer: String,
    gstPercent: { type: Number, default: 0 },
    description: String
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
