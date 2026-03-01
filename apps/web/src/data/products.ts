import type { Product } from '../../../../packages/shared/src/types';

export const demoProducts: Product[] = [
  {
    id: 'p1',
    name: 'Paracetamol 650',
    category: 'Pharmacy',
    saltComposition: 'Paracetamol',
    strength: '650mg',
    manufacturer: 'Mick Pharma',
    packSize: '15 tablets',
    sku: 'SGK-PARA-650',
    batchNo: 'BATCHA32',
    expiry: '2027-01-31',
    mrp: 120,
    discountPercent: 20,
    sellingPrice: 96,
    inStock: true,
    prescriptionRequired: false,
    substituteSuggestion: 'Acetaminophen 650',
    description: 'Effective relief for fever and mild pain.',
    sideEffects: 'Rare nausea or rash.',
    storageInfo: 'Store below 25°C away from moisture.'
  }
];
