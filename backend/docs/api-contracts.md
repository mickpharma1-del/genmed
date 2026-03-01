# SuperGenKart API Contracts

## Authentication
- `POST /auth/otp/request`
- `POST /auth/otp/verify`
- `POST /auth/google`
- `POST /auth/guest`

## User Commerce
- `GET /categories`
- `GET /products?category=&sort=&brand=&salt=&price=`
- `GET /products/:id`
- `POST /prescriptions`
- `POST /cart/checkout`
- `GET /orders/:id/tracking`

## Admin ERP
- `GET /admin/dashboard`
- `POST /admin/products/bulk-csv`
- `POST /admin/products/generate-description`
- `PATCH /admin/orders/:id/status`
- `POST /admin/inventory/batch-update`

## AI SuperSmartCare
- `POST /ai/supersmartcare`
  - Supports Hindi + English
  - Supports voice-enabled client input metadata
  - Writes interactions to AI Logs
