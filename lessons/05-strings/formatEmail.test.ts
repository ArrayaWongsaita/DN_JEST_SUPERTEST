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
test.todo("formatEmail(\"  Mali@Example.COM \") ต้องได้ \"mali@example.com\"");
// 👉 เขียน test ของข้อ 1 ตรงนี้


// ------------------------------------------------
// ข้อ 2 (เลือกเอง): formatEmail("TEST@MAIL.COM") ต้องมี "@mail.com"
// แนวทาง: เลือก matcher เองว่าจะใช้ตัวไหน
// ------------------------------------------------
test.todo("formatEmail(\"TEST@MAIL.COM\") ต้องมี \"@mail.com\"");
// 👉 เขียน test ของข้อ 2 ตรงนี้
