const MIN_FREE_DELIVERY = 500;
const DELIVERY_CHARGE = 49;

export function getDeliveryCharge(cartTotal: number) {
  return cartTotal >= MIN_FREE_DELIVERY ? 0 : DELIVERY_CHARGE;
}

export function formatINR(value: number) {
  return `₹${value.toFixed(2)}`;
}
