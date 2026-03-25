export interface Item {
  name: string;
  price: number;
  quantity: number;
}

export function computeTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function applyDiscount(total: number, percent: number): number {
  return total * (1 - percent / 100);
}
