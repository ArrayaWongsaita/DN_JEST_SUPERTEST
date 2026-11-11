
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
// test.todo("getEvenNumbers([1, 2, 3, 4]) ต้องได้ [2, 4]");
// 👉 เขียน test ของข้อ 1 ตรงนี้
test("getEvenNumbers([1, 2, 3, 4]) ต้องได้ [2, 4]", () => {
    // Ar
    const nums = [1,2,3,4]
    const expected = [2,4]
    // Ac
    const result = getEvenNumbers(nums)
    // As
    expect(result).toEqual(expected);
})


// ------------------------------------------------
// ข้อ 2: getEvenNumbers([1, 3, 5]) ต้องได้ array ว่าง
// แนวทาง: expect(getEvenNumbers(...)).toEqual([])
// ------------------------------------------------
// test.todo("getEvenNumbers([1, 3, 5]) ต้องได้ array ว่าง");
// 👉 เขียน test ของข้อ 2 ตรงนี้

test("getEvenNumbers([1, 3, 5]) ต้องได้ array ว่าง", () => {
      // Ar
    const nums = [1,3,5]
    const expected:number[] = []

    // Ac
    const result = getEvenNumbers(nums)
    // As
    expect(result).toEqual(expected);
})


// ------------------------------------------------
// ข้อ 3: getEvenNumbers([]) ต้องได้ array ว่าง
// แนวทาง: expect(getEvenNumbers(...)).toEqual([])
// ------------------------------------------------
// test.todo("getEvenNumbers([]) ต้องได้ array ว่าง");
// 👉 เขียน test ของข้อ 3 ตรงนี้

test("getEvenNumbers([]) ต้องได้ array ว่าง", () => {
      // Ar
    const nums:[] = []
    const expected: [] = []
    // Ac
    const result = getEvenNumbers(nums)
    // As
    expect(result).toEqual(expected);
})
