import { Request, Response, NextFunction } from "express";

// ให้ผ่านเฉพาะคำขอที่มี token ถูกต้อง ไม่เช่นนั้นตอบ 401
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.headers.authorization === "Bearer secret-token") {
    next();
    return;
  }
  res.status(401).json({ message: "Unauthorized" });
}
