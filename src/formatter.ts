import { computeTotal, Item } from './math';

export function formatReceipt(items: Item[]): string {
  const lines = items.map(i => `${i.name}: $${(i.price * i.quantity).toFixed(2)}`);
  const total = computeTotal(items);
  lines.push(`---\nTotal: $${total.toFixed(2)}`);
  return lines.join('\n');
}
