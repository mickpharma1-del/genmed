# SUPERGENKART – FULL DEPLOY READY MASTER PROMPT (NODE.JS)

Build a production-ready **SuperGenKart – Pharmacy E-commerce Platform** using:

- Frontend: Next.js (App Router, Mobile First)
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: Firebase Auth (Google Login Only + Email/Password Option)
- Hosting Ready: Vercel (Frontend) + Render/Railway (Backend)
- Payment: Razorpay (INR Only ₹)
- Maps: Google Maps API
- Storage: Firebase Storage / Cloudinary
- Architecture: Mono-repo (Web + Android PWA Ready)
- Currency: Always display in ₹ format only

## Branding rules (mandatory)

- Use official SuperGenKart logo:
  - “SuperGen” → `#FF6B00`
  - “Kart” → `#FFD700`
  - Tagline: “Sehat Ka Superhero”
- Use 3D style category images
- No Hindi text in category images
- Fixed header + footer on all pages
- Footer center button → AI Chat (SuperSmartCare)
- Banner CTA buttons only:
  - “Order Now”
  - “Buy from Mick Pharma”

## Role-based access system

### Public pages (no login required)

- Homepage
- Categories
- Product listing
- Search
- Offers
- About
- Contact

### Login-required pages

- Profile
- Cart
- Checkout
- Rewards
- Orders
- Prescription upload

### Admin-only pages/modules

- Dashboard
- Add product
- Purchase entry
- Order management
- User management
- Stock management
- Reports
- Banner management
- Coupon & referral system

## Customer features

### Authentication

- Google login option required
- Optional email/password
- JWT + Firebase role validation

### Product schema fields

Each product must include:

- Product name
- SKU
- Brand
- Salt composition
- Category
- MRP (₹)
- Selling price (₹)
- Discount %
- Stock quantity
- Expiry date
- Prescription required (Yes/No)
- Substitute medicines (auto suggest)
- Images
- Manufacturer
- GST %
- Description

### Smart substitute engine

If medicine is expensive:

- Suggest lower priced substitute
- Show % savings
- Highlight “Save ₹XXX”

### Cart rules

- Minimum order strip:
  - Minimum order: ₹500 required
  - Below ₹500 → delivery charges paid by customer
  - ₹500 & above → delivery free

### Referral & rewards

- Unique referral code
- ₹50 reward per successful signup
- Wallet system
- Cashback system
- Admin-adjustable reward %

### SuperSmartCare (AI chat)

- Floating footer center button
- AI answers medicine queries
- Suggests substitute
- Explains dosage (non-medical disclaimer included)
- Order tracking support

### Auto location system

- Auto detect location
- Show user location on map in admin panel
- Store latitude/longitude with order
- Admin map delivery view

### Checkout flow

- Address selection
- Razorpay payment
- COD option
- Order confirmation
- SMS + email notification

## Admin panel features

### Dashboard

- Total sales (₹)
- Orders today
- Pending orders
- Low stock alert
- Expiry alert

### Add product page

- All pharmacy fields
- Bulk CSV upload
- Auto SKU generator
- Image upload

### Purchase entry page

- Supplier name
- Batch no
- Purchase price
- GST
- Quantity
- Expiry
- Margin auto-calculate
- Auto stock update

### Order management

- Order status update
- Map view of delivery
- Invoice generation (₹ format)

### Reports

- Daily sales
- Monthly sales
- Profit margin
- GST report

## Security rules

- Firebase rules:
  - Public: read-only products/categories
  - User: own profile/cart/orders
  - Admin: full access
- JWT middleware
- Role-based API protection
- Input validation
- Rate limiting

## Database structure (MongoDB)

Collections:

- users
- products
- categories
- orders
- cart
- referrals
- rewards
- banners
- coupons
- purchase_entries

## Mobile-first requirements

- Fully responsive
- Android PWA installable
- Fast loading
- Optimized images
- Lazy loading

## Deployment structure

### Backend

- Express server
- Environment variables
- Production build ready
- CORS enabled
- API routes structured:
  - `/api/auth`
  - `/api/products`
  - `/api/orders`
  - `/api/admin`

### Frontend

- Next.js production build
- SEO optimized
- Meta tags
- Sitemap
- SSR for product pages

## Extra features

- Coupon system
- Push notifications
- Stock alert system
- Expiry alert system
- AI demand prediction
- Review & rating system

## Final output requirements

Generate:

- Folder structure
- package.json files
- Complete backend code
- Complete frontend structure
- Firebase config
- Deployment instructions
- Environment variable sample
- README file

Deliverables must be production-ready with no placeholder logic, proper error handling, clean architecture, and scalable structure.
