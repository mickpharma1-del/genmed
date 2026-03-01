import React from 'react';
import { Layout } from '../components/Layout';

const categories = [
  'Pharmacy',
  'OTC',
  'Personal Care',
  'Baby Care',
  'Devices',
  'Ayurvedic',
  'Cosmetics',
  'Women Care',
  'General Store'
];

export function HomePage() {
  return (
    <Layout>
      <section>
        <h1>SuperGenKart – AI Powered Care + Commerce</h1>
        <p>Flash deals starting ₹99. Free delivery on orders above ₹500.</p>
        <button>Order Now</button>
        <button>Buy from Mick Pharma</button>
      </section>

      <section>
        <h2>Dynamic Hero Banner</h2>
        <p>Animated campaign slots for medicine essentials and wellness.</p>
      </section>

      <section>
        <h2>Category Grid</h2>
        <div>
          {categories.map((category) => (
            <article key={category}>
              <h3>{category}</h3>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Prescription Upload</h2>
        <p>Upload JPG/PDF to unlock checkout for Rx items.</p>
      </section>

      <section>
        <h2>Best Sellers + Health Tips</h2>
      </section>
    </Layout>
  );
}
