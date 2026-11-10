// เอาของที่ระบุออกจาก array (คืน array ใหม่)
export function removeItem(items: string[], item: string): string[] {
  return items.filter((i) => i !== item);
}
