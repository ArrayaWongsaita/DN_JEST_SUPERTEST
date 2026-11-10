import { validateAge } from "./validateAge";

// ================================================
// บทที่ 09: error
// ฝึก: toThrow
// สำคัญ: ต้องห่อการเรียกฟังก์ชันด้วย arrow function
//        expect(() => divide(1, 0)).toThrow();
//        ถ้าเขียน expect(divide(1, 0)) ตรงๆ error จะเกิดก่อน expect ทำงาน test จะพังเลย
// ================================================


// ------------------------------------------------
// ข้อ 1: validateAge(20) ต้องได้ true
// แนวทาง: ใช้ toBe (ข้อนี้ไม่ต้องห่อ arrow function)
// ------------------------------------------------
test("validateAge(20) ต้องได้ true", () => {
  expect(validateAge(20)).toBe(true);
});


// ------------------------------------------------
// ข้อ 2: validateAge(-1) ต้อง throw ข้อความ "Age must be a positive number"
// แนวทาง: ห่อด้วย arrow function แล้วใช้ toThrow พร้อมข้อความ
// ------------------------------------------------
test("validateAge(-1) ต้อง throw ข้อความ \"Age must be a positive number\"", () => {
  expect(() => validateAge(-1)).toThrow("Age must be a positive number");
});


// ------------------------------------------------
// ข้อ 3 (เลือกเอง): validateAge(18) ต้องไม่ throw
// แนวทาง: เลือก matcher เองว่าจะใช้ตัวไหน (คำใบ้: ลองนึกถึงบท 08)
// ------------------------------------------------
test("validateAge(18) ต้องไม่ throw", () => {
  expect(() => validateAge(18)).not.toThrow();
});
