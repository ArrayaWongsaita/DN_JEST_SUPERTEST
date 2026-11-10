import { formatEmail } from "./formatEmail";

// ================================================
// บทที่ 05: ข้อความ
// ฝึก: toMatch, toContain (กับข้อความ)
// ตัวอย่าง: expect("hello world").toContain("world");
//          expect("hello world").toMatch(/world/);
// ================================================


// ------------------------------------------------
// ข้อ 1: formatEmail("  Mali@Example.COM ") ต้องได้ "mali@example.com"
// แนวทาง: ใช้ toBe
// ------------------------------------------------
test("formatEmail(\"  Mali@Example.COM \") ต้องได้ \"mali@example.com\"", () => {
  expect(formatEmail("  Mali@Example.COM ")).toBe("mali@example.com");
});


// ------------------------------------------------
// ข้อ 2 (เลือกเอง): formatEmail("TEST@MAIL.COM") ต้องมี "@mail.com"
// แนวทาง: เลือก matcher เองว่าจะใช้ตัวไหน
// ------------------------------------------------
test("formatEmail(\"TEST@MAIL.COM\") ต้องมี \"@mail.com\"", () => {
  expect(formatEmail("TEST@MAIL.COM")).toContain("@mail.com");
});
