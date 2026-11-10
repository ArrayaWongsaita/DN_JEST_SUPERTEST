import { getEvenNumbers } from "./getEvenNumbers";

// ================================================
// บทที่ 02: toEqual
// ฝึก: toEqual
// toBe ใช้กับ object หรือ array ไม่ได้ เพราะมันเช็คว่าเป็น "ตัวเดียวกัน" ไหม
// toEqual จะเทียบ "ค่าข้างใน" ให้แทน
// ตัวอย่าง: expect([1, 2]).toEqual([1, 2]);
// ================================================


// ------------------------------------------------
// ข้อ 1: getEvenNumbers([1, 2, 3, 4]) ต้องได้ [2, 4]
// แนวทาง: expect(getEvenNumbers(...)).toEqual([...])
// ------------------------------------------------
test("getEvenNumbers([1, 2, 3, 4]) ต้องได้ [2, 4]", () => {
  expect(getEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
});


// ------------------------------------------------
// ข้อ 2: getEvenNumbers([1, 3, 5]) ต้องได้ array ว่าง
// แนวทาง: expect(getEvenNumbers(...)).toEqual([])
// ------------------------------------------------
test("getEvenNumbers([1, 3, 5]) ต้องได้ array ว่าง", () => {
  expect(getEvenNumbers([1, 3, 5])).toEqual([]);
});


// ------------------------------------------------
// ข้อ 3: getEvenNumbers([]) ต้องได้ array ว่าง
// แนวทาง: expect(getEvenNumbers(...)).toEqual([])
// ------------------------------------------------
test("getEvenNumbers([]) ต้องได้ array ว่าง", () => {
  expect(getEvenNumbers([])).toEqual([]);
});
