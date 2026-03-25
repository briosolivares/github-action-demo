import { getCartSummary } from './cart';
import { formatReceipt } from './formatter';
import { Item } from './math';

const items: Item[] = [
  { name: 'Widget', price: 9.99, quantity: 2 },
  { name: 'Gadget', price: 24.99, quantity: 1 },
];

console.log(getCartSummary(items));
console.log('\n--- Receipt ---');
console.log(formatReceipt(items));
