import { getMockReq, getMockRes } from "@jest-mock/express";
import { getUserController } from "./getUserController";

// ================================================
// บทที่ 14: ทดสอบ controller ด้วย req / res ปลอม
// ฝึก: getMockReq, getMockRes
//
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
// ================================================


// ------------------------------------------------
// ข้อ 1: ขอผู้ใช้ id "1" ต้องตอบ status 200
// แนวทาง: สร้าง req ด้วย getMockReq({ params: { id: "1" } }) และ res ด้วย getMockRes()
//         เรียก getUserController(req, res) แล้วใช้ toHaveBeenCalledWith(200) กับ res.status
// ------------------------------------------------
test.todo("ขอผู้ใช้ id \"1\" ต้องตอบ status 200");
// 👉 เขียน test ของข้อ 1 ตรงนี้


// ------------------------------------------------
// ข้อ 2: ขอผู้ใช้ id "1" ต้องตอบข้อมูลของ Mali
// แนวทาง: ใช้ toHaveBeenCalledWith({ id: 1, name: "Mali" }) กับ res.json
// ------------------------------------------------
test.todo("ขอผู้ใช้ id \"1\" ต้องตอบข้อมูลของ Mali");
// 👉 เขียน test ของข้อ 2 ตรงนี้


// ------------------------------------------------
// ข้อ 3: ขอผู้ใช้ id "99" ต้องตอบ status 404
// แนวทาง: เหมือนข้อ 1 แต่เปลี่ยน id และตัวเลข status
// ------------------------------------------------
test.todo("ขอผู้ใช้ id \"99\" ต้องตอบ status 404");
// 👉 เขียน test ของข้อ 3 ตรงนี้


// ------------------------------------------------
// ข้อ 4: ขอผู้ใช้ id "99" ต้องตอบข้อความ "User not found"
// แนวทาง: ใช้ toHaveBeenCalledWith({ message: "..." }) กับ res.json
// ------------------------------------------------
test.todo("ขอผู้ใช้ id \"99\" ต้องตอบข้อความ \"User not found\"");
// 👉 เขียน test ของข้อ 4 ตรงนี้
