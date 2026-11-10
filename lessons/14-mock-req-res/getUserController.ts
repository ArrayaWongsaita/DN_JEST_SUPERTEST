import { Request, Response } from "express";

const users = [
  { id: 1, name: "Mali" },
  { id: 2, name: "Somchai" },
];

// ตอบข้อมูลผู้ใช้ตาม id ที่ขอ ถ้าไม่เจอ (หรือ id ไม่ใช่ตัวเลข) ตอบ 404
export function getUserController(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).json(user);
}
