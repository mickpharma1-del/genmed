import React from 'react';

const cards = [
  { label: 'Total Sales', value: '₹12,84,000' },
  { label: 'Orders Today', value: '286' },
  { label: 'Low Stock Alert', value: '17 SKUs' },
  { label: 'Expiry Alert', value: '9 batches' }
];

export function Dashboard() {
  return (
    <div>
      <h1>SuperGenKart ERP Dashboard</h1>
      <p>Revenue graph, top products, and customer analytics enabled.</p>
      <section>
        {cards.map((card) => (
          <article key={card.label}>
            <h2>{card.label}</h2>
            <p>{card.value}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>AI Controls</h2>
        <ul>
          <li>Approve AI suggestions</li>
          <li>Block restricted medicines</li>
          <li>Update AI response database</li>
        </ul>
      </section>
    </div>
  );
}
