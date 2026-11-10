import { getMockReq, getMockRes } from "@jest-mock/express";
import { requireAuth } from "./requireAuth";

// ================================================
// บทที่ 15: ทดสอบ middleware
// ฝึก: ตรวจว่า next ถูกเรียกหรือไม่
//
// middleware ต้องเลือกอย่างใดอย่างหนึ่ง: เรียก next() เพื่อไปต่อ หรือตอบกลับเลย
// สิ่งที่ @jest-mock/express ให้เรา:
//   getMockReq({ ... })  สร้าง req ปลอม ใส่ค่าที่ต้องการได้ เช่น params, headers, body
//   getMockRes()         สร้าง res ปลอม (และ next ปลอม) ให้ใช้งานได้ทันที
//
// ตัวอย่าง:
//   const req = getMockReq({ params: { id: "1" } });
//   const { res, next } = getMockRes();
//
// res.status, res.json และ next เป็น jest.fn เหมือนบท 13
// จึงตรวจด้วย toHaveBeenCalledWith(...) ได้เลย
//
// requireAuth ผ่านเมื่อ header authorization เป็น "Bearer secret-token"
// ใส่ header ปลอมได้แบบนี้: getMockReq({ headers: { authorization: "Bearer secret-token" } })
// ================================================


// ------------------------------------------------
// ข้อ 1: มี token ถูกต้อง ต้องเรียก next
// แนวทาง: เรียก requireAuth(req, res, next) แล้วใช้ toHaveBeenCalled() กับ next
// ------------------------------------------------
test("มี token ถูกต้อง ต้องเรียก next", () => {
  const req = getMockReq({ headers: { authorization: "Bearer secret-token" } });
  const { res, next } = getMockRes();
  requireAuth(req, res, next);
  expect(next).toHaveBeenCalled();
});


// ------------------------------------------------
// ข้อ 2: มี token ถูกต้อง ต้องไม่เรียก res.status
// แนวทาง: ใช้ not.toHaveBeenCalled() กับ res.status
// ------------------------------------------------
test("มี token ถูกต้อง ต้องไม่เรียก res.status", () => {
  const req = getMockReq({ headers: { authorization: "Bearer secret-token" } });
  const { res, next } = getMockRes();
  requireAuth(req, res, next);
  expect(res.status).not.toHaveBeenCalled();
});


// ------------------------------------------------
// ข้อ 3: ไม่มี token ต้องตอบ status 401
// แนวทาง: สร้าง req ด้วย getMockReq() เปล่าๆ แล้วใช้ toHaveBeenCalledWith(401) กับ res.status
// ------------------------------------------------
test("ไม่มี token ต้องตอบ status 401", () => {
  const req = getMockReq();
  const { res, next } = getMockRes();
  requireAuth(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
});


// ------------------------------------------------
// ข้อ 4: ไม่มี token ต้องตอบข้อความ "Unauthorized"
// แนวทาง: ใช้ toHaveBeenCalledWith({ message: "..." }) กับ res.json
// ------------------------------------------------
test("ไม่มี token ต้องตอบข้อความ \"Unauthorized\"", () => {
  const req = getMockReq();
  const { res, next } = getMockRes();
  requireAuth(req, res, next);
  expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized" });
});


// ------------------------------------------------
// ข้อ 5: ไม่มี token ต้องไม่เรียก next
// แนวทาง: ใช้ not.toHaveBeenCalled() กับ next
// ------------------------------------------------
test("ไม่มี token ต้องไม่เรียก next", () => {
  const req = getMockReq();
  const { res, next } = getMockRes();
  requireAuth(req, res, next);
  expect(next).not.toHaveBeenCalled();
});
