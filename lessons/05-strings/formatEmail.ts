// ตัดช่องว่างหัวท้ายแล้วแปลงอีเมลเป็นตัวพิมพ์เล็ก
export function formatEmail(email: string): string {
  return email.trim().toLowerCase();
}
