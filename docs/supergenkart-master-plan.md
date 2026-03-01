# SuperGenKart – Master Build Blueprint

This document consolidates the complete production scope for:

- Customer app (mobile-first web + Android PWA path)
- Admin panel
- Firebase auth + role-based access
- AI assistant (SuperSmartCare)
- Pharmacy-specific product lifecycle
- INR-only pricing and Indian commerce rules

## Core stack

- Frontend: Next.js (App Router)
- Backend: Node.js + Express
- Database: MongoDB
- Auth: Firebase Auth + JWT middleware
- Payments: Razorpay
- Maps: Google Maps API
- Media: Firebase Storage or Cloudinary

## Mandatory product fields

- Product name, SKU, brand, salt composition, category
- MRP, selling price, discount %, GST
- Stock quantity, expiry date, manufacturer
- Prescription required flag
- Substitute medicines
- Images and description

## Security baseline

- JWT auth middleware
- Role guards (`public`, `user`, `admin`)
- Input validation
- Rate limiting
- Firestore/Firebase access policy aligned with RBAC

## API namespaces

- `/api/auth`
- `/api/products`
- `/api/orders`
- `/api/admin`

## Phase-wise execution

1. Backend APIs + schema hardening
2. Admin panel (inventory, purchases, reports)
3. Customer storefront + cart/checkout
4. AI chat + substitute recommendations
5. Referral, rewards, coupons
6. Observability + production rollout
