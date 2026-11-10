export type CartItem = { name: string; price: number };

// ตะกร้าเก็บของไว้ในตัวแปรของไฟล์ จึงจำของข้ามการเรียกไปเรื่อยๆ
let items: CartItem[] = [];

// เพิ่มสินค้าลงตะกร้า
export function addItem(item: CartItem): void {
  items.push(item);
}

// ดูสินค้าทั้งหมดในตะกร้า
export function getItems(): CartItem[] {
  return items;
}

// รวมราคาสินค้าทั้งหมด
export function getTotal(): number {
  return items.reduce((total, item) => total + item.price, 0);
}

// ล้างตะกร้าให้ว่าง
export function clearCart(): void {
  items = [];
}
