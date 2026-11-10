// เพิ่มสินค้าลงตะกร้า (คืน array ใหม่ ไม่แก้ตัวเดิม)
export function addToCart(cart: string[], item: string): string[] {
  return [...cart, item];
}
