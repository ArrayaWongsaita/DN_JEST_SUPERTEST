import { calculateDiscount } from "./calculateDiscount";

// ================================================
// บทที่ 04: เปรียบเทียบตัวเลข
// ฝึก: toBeGreaterThan, toBeLessThan, toBeCloseTo
// ตัวอย่าง: expect(5).toBeGreaterThan(3);
// หมายเหตุ: 0.1 + 0.2 ไม่ได้เท่ากับ 0.3 พอดี (ทศนิยมในคอมพิวเตอร์คลาดเคลื่อนนิดหน่อย)
//           จึงต้องใช้ toBeCloseTo แทน toBe: expect(0.1 + 0.2).toBeCloseTo(0.3);
// ================================================


// ------------------------------------------------
// ข้อ 1: calculateDiscount(200, 10) ต้องได้ 180
// แนวทาง: expect(calculateDiscount(...)).toBe(...)
// ------------------------------------------------
test.todo("calculateDiscount(200, 10) ต้องได้ 180");
// 👉 เขียน test ของข้อ 1 ตรงนี้


// ------------------------------------------------
// ข้อ 2: calculateDiscount(100, 25) ต้องน้อยกว่า 100
// แนวทาง: expect(calculateDiscount(...)).toBeLessThan(...)
// ------------------------------------------------
test.todo("calculateDiscount(100, 25) ต้องน้อยกว่า 100");
// 👉 เขียน test ของข้อ 2 ตรงนี้


// ------------------------------------------------
// ข้อ 3: calculateDiscount(500, 20) ต้องมากกว่า 300
// แนวทาง: expect(calculateDiscount(...)).toBeGreaterThan(...)
// ------------------------------------------------
test.todo("calculateDiscount(500, 20) ต้องมากกว่า 300");
// 👉 เขียน test ของข้อ 3 ตรงนี้
