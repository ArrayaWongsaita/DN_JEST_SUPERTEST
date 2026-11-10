// ส่งอีเมลทักทายผู้ใช้ โดยรับฟังก์ชันส่งอีเมลเข้ามา
export function notifyUser(
  user: { name: string; email: string },
  sendEmail: (to: string, message: string) => void,
): void {
  sendEmail(user.email, `Hello, ${user.name}!`);
}
