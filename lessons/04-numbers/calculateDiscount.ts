// คำนวณราคาหลังลด percent เปอร์เซ็นต์
export function calculateDiscount(price: number, percent: number): number {
  return price - (price * percent) / 100;
}
