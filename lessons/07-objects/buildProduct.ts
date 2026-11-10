// สร้างสินค้าใหม่ โดยสินค้าใหม่มีของพร้อมขายเสมอ
export function buildProduct(
  name: string,
  price: number,
): { name: string; price: number; inStock: boolean } {
  return { name, price, inStock: true };
}
