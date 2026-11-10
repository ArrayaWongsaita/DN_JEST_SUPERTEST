// ซ่อนรหัสผ่านด้วย * ให้ยาวเท่าเดิม
export function maskPassword(password: string): string {
  return "*".repeat(password.length);
}
