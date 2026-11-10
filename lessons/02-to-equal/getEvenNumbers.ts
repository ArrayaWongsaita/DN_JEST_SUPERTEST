// เลือกเฉพาะเลขคู่จาก array
export function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
