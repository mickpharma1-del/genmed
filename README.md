# SuperGenKart Monorepo (Starter)

This repository now contains a deploy-ready **backend foundation** for SuperGenKart (Node.js + Express + MongoDB), plus documentation for building the full Pharmacy E-commerce + Admin + AI workflow.

## Structure

- `backend/` → Express API with role-based scaffolding and pharmacy-oriented models
- `frontend/` → Reserved for Next.js App Router app
- `docs/supergenkart-master-plan.md` → Consolidated product + delivery blueprint

## Quick start (backend)

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Deployment targets

- Frontend: Vercel
- Backend: Render / Railway
- DB: MongoDB Atlas
- Auth: Firebase Auth
- Payments: Razorpay (INR only)

See `docs/supergenkart-master-plan.md` for complete requirements.
