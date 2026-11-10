// เรียก callback ทีละตัวใน array
export function forEachItem<T>(items: T[], callback: (item: T) => void): void {
  for (const item of items) {
    callback(item);
  }
}
