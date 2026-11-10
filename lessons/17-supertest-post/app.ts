import express from "express";

type User = { id: number; name: string };

let users: User[] = [];
let nextId = 3;

// คืนข้อมูลเป็นผู้ใช้สองคนตั้งต้น (ใช้ในการทดสอบ)
export function resetUsers(): void {
  users = [
    { id: 1, name: "Mali" },
    { id: 2, name: "Somchai" },
  ];
  nextId = 3;
}

resetUsers();

// แอป Express (ไม่เรียก listen เพื่อให้ supertest ใช้ทดสอบได้)
export const app = express();
app.use(express.json());

// ดูผู้ใช้ทั้งหมด
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// เพิ่มผู้ใช้ใหม่ ต้องมี name เป็นข้อความที่ไม่ว่าง
app.post("/users", (req, res) => {
  const name = req.body?.name;

  if (typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ message: "Name is required" });
    return;
  }
  const user = { id: nextId++, name };
  users.push(user);
  res.status(201).json(user);
});
