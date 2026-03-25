export interface Item {
  name: string;
  price: number;
  quantity: number;
}

export function computeTotal(items: Item[]): number {
export function calculateTotal(items: Item[]): number {
}

export function applyDiscount(total: number, percent: number): number {
  return total * (1 - percent / 100);
}
