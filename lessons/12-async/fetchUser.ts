// จำลองการดึงผู้ใช้ (ไม่ได้ยิง network จริง) id 1 เจอ ที่เหลือ reject
export async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  if (id === 1) {
    return { id: 1, name: "Mali" };
  }
  throw new Error("User not found");
}
