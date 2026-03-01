# Next Step (Recommended): Backend Folder Structure First

Below is the practical backend-first implementation plan to convert the master prompt into executable code.

## 1) Create monorepo base

```bash
mkdir -p supergenkart/{apps/{web,admin},services/{api,ai},packages/{config,types,utils}}
```

## 2) Backend API structure (`services/api`)

```text
services/api
├─ src
│  ├─ app.js
│  ├─ server.js
│  ├─ config
│  │  ├─ env.js
│  │  ├─ db.js
│  │  ├─ firebaseAdmin.js
│  │  └─ razorpay.js
│  ├─ modules
│  │  ├─ auth
│  │  ├─ users
│  │  ├─ products
│  │  ├─ categories
│  │  ├─ cart
│  │  ├─ orders
│  │  ├─ referrals
│  │  ├─ rewards
│  │  ├─ coupons
│  │  ├─ banners
│  │  ├─ purchaseEntries
│  │  ├─ reports
│  │  └─ chat
│  ├─ middleware
│  │  ├─ auth.js
│  │  ├─ roleGuard.js
│  │  ├─ rateLimit.js
│  │  ├─ validate.js
│  │  └─ errorHandler.js
│  ├─ shared
│  │  ├─ constants
│  │  ├─ utils
│  │  └─ validators
│  └─ routes
│     ├─ index.js
│     ├─ auth.routes.js
│     ├─ products.routes.js
│     ├─ orders.routes.js
│     └─ admin.routes.js
├─ tests
├─ .env.example
├─ package.json
└─ README.md
```

## 3) Route ownership mapping

- `/api/auth`: Firebase token exchange, JWT issue, role fetch.
- `/api/products`: public product browse + admin CRUD.
- `/api/orders`: checkout, payment verification, status timeline.
- `/api/admin`: dashboard metrics, purchase entry, reports, stock/expiry alerts.

## 4) First sprint milestone (must build first)

1. Auth middleware with Firebase token validation.
2. Product schema with pharmacy-specific fields.
3. Cart minimum-order rule (₹500 logic).
4. Order + Razorpay integration (INR only).
5. Admin dashboard summary APIs.

## 5) Definition of done for backend phase-1

- All phase-1 endpoints documented.
- Postman collection generated.
- Input validation + role guard applied.
- Unit tests for pricing, cart rule, and referral reward logic.
- Deploys on Render/Railway via env-based configuration.
