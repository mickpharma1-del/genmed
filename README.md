# SuperGenKart Monorepo

AI powered pharmacy + multi-category commerce starter for India-first operations.

## Monorepo Layout

- `apps/web`: Customer app (mobile-first web/PWA-ready)
- `apps/admin`: ERP/admin dashboard
- `packages/shared`: Shared types, constants, theme tokens
- `backend/supabase`: SQL schema, RLS and policies
- `backend/api`: API contracts and AI assistant endpoint specs

## Brand Rules Enforced

- Official theme colors: `#FF6B00` and `#FFD700`
- Currency in `₹` only
- Sticky header/footer and minimum-order strip
- CTA support: `Order Now`, `Buy from Mick Pharma`

## Run checks

```bash
npm test
```
