# Implementation Notes

- Mobile-first with fixed header/footer and bottom AI CTA in customer app.
- Cart logic enforces free-delivery threshold of ₹500.
- Prescription-required products must enforce upload before checkout.
- Supabase schema includes audit-friendly timestamps and role-ready user table.
- ERP features modelled: inventory batches, supplier linkage, coupons, AI logs.
- Future-ready: web app structure is PWA/Flutter migration friendly via API-first contracts.
