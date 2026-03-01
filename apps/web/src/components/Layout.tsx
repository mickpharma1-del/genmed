import React from 'react';

const navItems = ['Home', 'Categories', 'Cart', 'Orders', 'Profile'];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <header className="fixed-header">
        <div className="logo">
          <span className="super">SuperGen</span>
          <span className="kart">Kart</span>
          <small>Sehat Ka Superhero 🦸</small>
        </div>
        <div className="actions">Search | Cart | Profile</div>
      </header>

      <div className="minimum-order-strip">
        🛒 Minimum Order: ₹500 Required | Below ₹500 → Delivery charges paid by customer |
        ₹500 & above → Delivery Free ✅
      </div>

      <main>{children}</main>

      <button className="ai-float" aria-label="SuperSmartCare">
        SuperSmartCare AI
      </button>

      <footer className="fixed-footer">
        {navItems.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </footer>
    </div>
  );
}
