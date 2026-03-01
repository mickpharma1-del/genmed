export type Category =
  | 'Pharmacy'
  | 'OTC'
  | 'Personal Care'
  | 'Baby Care'
  | 'Devices'
  | 'Ayurvedic'
  | 'Cosmetics'
  | 'Women Care'
  | 'General Store';

export interface Product {
  id: string;
  name: string;
  category: Category;
  saltComposition: string;
  strength: string;
  manufacturer: string;
  packSize: string;
  sku: string;
  batchNo: string;
  expiry: string;
  mrp: number;
  discountPercent: number;
  sellingPrice: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  substituteSuggestion: string;
  description: string;
  sideEffects: string;
  storageInfo: string;
}
