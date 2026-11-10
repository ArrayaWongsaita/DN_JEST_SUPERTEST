// หาค่าเฉลี่ย ถ้า array ว่างคืน 0
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}
