import express from "express";

const users = [
  { id: 1, name: "Mali" },
  { id: 2, name: "Somchai" },
];

// แอป Express (ไม่เรียก listen เพื่อให้ supertest ใช้ทดสอบได้)
export const app = express();

// เช็คว่าเซิร์ฟเวอร์ทำงานอยู่
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// ดูผู้ใช้ตาม id ถ้าไม่เจอ (หรือ id ไม่ใช่ตัวเลข) ตอบ 404
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).json(user);
});
