import { maskPassword } from "./maskPassword";

// ================================================
// บทที่ 08: not
// ฝึก: .not (กลับด้านผลของ matcher)
// ตัวอย่าง: expect(5).not.toBe(3);
// ================================================


// ------------------------------------------------
// ข้อ 1: maskPassword("secret") ต้องไม่ใช่ "secret"
// แนวทาง: ใช้ not กับ toBe
// ------------------------------------------------
test("maskPassword(\"secret\") ต้องไม่ใช่ \"secret\"", () => {
  expect(maskPassword("secret")).not.toBe("secret");
});


// ------------------------------------------------
// ข้อ 2: maskPassword("secret") ต้องไม่มีคำว่า secret
// แนวทาง: ใช้ not กับ toMatch
// ------------------------------------------------
test("maskPassword(\"secret\") ต้องไม่มีคำว่า secret", () => {
  expect(maskPassword("secret")).not.toMatch(/secret/);
});


// ------------------------------------------------
// ข้อ 3 (เลือกเอง): maskPassword("1234") ต้องไม่มี "1"
// แนวทาง: เลือก matcher เองว่าจะใช้ตัวไหน
// ------------------------------------------------
test("maskPassword(\"1234\") ต้องไม่มี \"1\"", () => {
  expect(maskPassword("1234")).not.toContain("1");
});
