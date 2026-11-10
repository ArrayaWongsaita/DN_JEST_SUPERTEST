// ตัดตัวเลขที่ซ้ำกันออก
export function removeDuplicates(items: number[]): number[] {
  return [...new Set(items)];
}
