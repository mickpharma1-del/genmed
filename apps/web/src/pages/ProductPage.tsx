import React from 'react';
import { Layout } from '../components/Layout';
import { demoProducts } from '../data/products';
import { formatINR } from '../utils/pricing';

export function ProductPage() {
  const product = demoProducts[0];

  return (
    <Layout>
      <article>
        <h1>{product.name} | Best Price in ₹</h1>
        <p>Salt Composition: {product.saltComposition}</p>
        <p>Strength: {product.strength}</p>
        <p>Manufacturer: {product.manufacturer}</p>
        <p>Pack Size: {product.packSize}</p>
        <p>SKU: {product.sku}</p>
        <p>Batch No: {product.batchNo}</p>
        <p>Expiry: {product.expiry}</p>
        <p>MRP: {formatINR(product.mrp)}</p>
        <p>Discount: {product.discountPercent}%</p>
        <p>Selling Price: {formatINR(product.sellingPrice)}</p>
        <p>Stock Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        <p>Prescription Required: {product.prescriptionRequired ? 'Yes' : 'No'}</p>
        <p>Substitute Suggestion: {product.substituteSuggestion}</p>
        <p>Description: {product.description}</p>
        <p>Side Effects: {product.sideEffects}</p>
        <p>Storage Info: {product.storageInfo}</p>
        <p>Reviews: 4.8/5</p>
        <p>Related Products: Fever Relief Combo</p>

        <button>Add to Cart</button>
        <button>Buy Now</button>
        <button>Buy from Mick Pharma</button>
      </article>
    </Layout>
  );
}
