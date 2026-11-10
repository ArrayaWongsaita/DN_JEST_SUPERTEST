import { createUser } from "./createUser";

// ================================================
// บทที่ 02: toEqual
// ฝึก: toEqual
// toBe ใช้กับ object หรือ array ไม่ได้ เพราะมันเช็คว่าเป็น "ตัวเดียวกัน" ไหม
// toEqual จะเทียบ "ค่าข้างใน" ให้แทน
// ตัวอย่าง: expect({ a: 1 }).toEqual({ a: 1 });
// ================================================


// ------------------------------------------------
// ข้อ 1: createUser("Mali", 20) ต้องได้ object ที่มี name และ age ตรงกัน
// แนวทาง: expect(createUser(...)).toEqual({ name: ..., age: ... })
// ------------------------------------------------
test("createUser(\"Mali\", 20) ต้องได้ object ที่มี name และ age ตรงกัน", () => {
  expect(createUser("Mali", 20)).toEqual({ name: "Mali", age: 20 });
});


// ------------------------------------------------
// ข้อ 2: createUser("Somchai", 35) ต้องได้ object ที่ถูกต้อง
// แนวทาง: expect(createUser(...)).toEqual({ ... })
// ------------------------------------------------
test("createUser(\"Somchai\", 35) ต้องได้ object ที่ถูกต้อง", () => {
  expect(createUser("Somchai", 35)).toEqual({ name: "Somchai", age: 35 });
});
