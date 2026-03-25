import { calculateTotal, applyDiscount, Item } from './math';

export function getCartSummary(items: Item[]): string {
  const total = calculateTotal(items);
  const discounted = applyDiscount(total, 10);
  return `Total: $${total.toFixed(2)}, After discount: $${discounted.toFixed(2)}`;
}
