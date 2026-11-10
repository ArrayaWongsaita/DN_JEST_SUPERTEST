// สร้าง object ผู้ใช้จากชื่อและอายุ
export function createUser(name: string, age: number): { name: string; age: number } {
  return { name, age };
}
