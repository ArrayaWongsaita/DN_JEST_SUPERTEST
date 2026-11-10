import { notifyUser } from "./notifyUser";

// ================================================
// บทที่ 13: ฟังก์ชันปลอม (mock function)
// ฝึก: jest.fn, toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith
//
// jest.fn() สร้างฟังก์ชันปลอมที่จดไว้ว่า "ถูกเรียกกี่ครั้ง ด้วยค่าอะไร"
// เราส่งมันเข้าไปแทนฟังก์ชันจริง แล้วตรวจว่าถูกเรียกตามที่คาดไหม
//
// ตัวอย่าง:
//   const callback = jest.fn();
//   callback("x");
//   expect(callback).toHaveBeenCalledWith("x");
// ================================================

// ผู้ใช้ที่ใช้ในโจทย์: { name: "Mali", email: "mali@example.com" }


// ------------------------------------------------
// ข้อ 1: notifyUser ต้องเรียก sendEmail 1 ครั้ง
// แนวทาง: const sendEmail = jest.fn(); ส่งเข้า notifyUser แล้วใช้ toHaveBeenCalledTimes(1)
// ------------------------------------------------
test.todo("notifyUser ต้องเรียก sendEmail 1 ครั้ง");
// 👉 เขียน test ของข้อ 1 ตรงนี้


// ------------------------------------------------
// ข้อ 2: notifyUser ต้องส่งถึง "mali@example.com" ด้วยข้อความ "Hello, Mali!"
// แนวทาง: ใช้ toHaveBeenCalledWith(ค่าที่ 1, ค่าที่ 2) เรียงตามลำดับ argument
// ------------------------------------------------
test.todo("notifyUser ต้องส่งถึง \"mali@example.com\" ด้วยข้อความ \"Hello, Mali!\"");
// 👉 เขียน test ของข้อ 2 ตรงนี้
