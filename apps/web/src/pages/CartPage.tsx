import React from 'react';
import { Layout } from '../components/Layout';
import { formatINR, getDeliveryCharge } from '../utils/pricing';

export function CartPage() {
  const cartTotal = 420;
  const delivery = getDeliveryCharge(cartTotal);
  const gst = cartTotal * 0.12;

  return (
    <Layout>
      <h1>Cart & Checkout (₹ Billing)</h1>
      <p>Cart total: {formatINR(cartTotal)}</p>
      <p>Delivery charge: {delivery === 0 ? 'Free' : formatINR(delivery)}</p>
      <p>GST Breakdown: {formatINR(gst)}</p>
      <p>Order Summary: {formatINR(cartTotal + delivery + gst)}</p>
      <p>Coupon, wallet, Razorpay, COD, and map preview supported.</p>
    </Layout>
  );
}
