// ตรวจอายุ ถ้าติดลบจะ throw error ไม่เช่นนั้นคืน true
export function validateAge(age: number): boolean {
  if (age < 0) {
    throw new Error("Age must be a positive number");
  }
  return true;
}
