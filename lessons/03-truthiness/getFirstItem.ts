// คืนตัวแรกของ array ถ้า array ว่างจะได้ undefined
export function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}
