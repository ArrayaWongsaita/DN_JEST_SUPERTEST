import { buildProduct } from "./buildProduct";

// ================================================
// บทที่ 07: object
// ฝึก: toHaveProperty, toMatchObject
// ตัวอย่าง: expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
//          (toMatchObject เช็คเฉพาะ property ที่เราระบุ ตัวอื่นไม่สนใจ)
// ================================================


// ------------------------------------------------
// ข้อ 1: buildProduct("Pen", 50) ต้องมี property ชื่อ name
// แนวทาง: ใช้ toHaveProperty ใส่ชื่อ property อย่างเดียว
// ------------------------------------------------
test("buildProduct(\"Pen\", 50) ต้องมี property ชื่อ name", () => {
  expect(buildProduct("Pen", 50)).toHaveProperty("name");
});


// ------------------------------------------------
// ข้อ 2: buildProduct("Pen", 50) ต้องมี price เท่ากับ 50
// แนวทาง: ใช้ toHaveProperty ใส่ทั้งชื่อ property และค่าที่คาดหวัง
// ------------------------------------------------
test("buildProduct(\"Pen\", 50) ต้องมี price เท่ากับ 50", () => {
  expect(buildProduct("Pen", 50)).toHaveProperty("price", 50);
});


// ------------------------------------------------
// ข้อ 3: buildProduct("Pen", 50) ต้องมี name เป็น "Pen" และ inStock เป็น true
// แนวทาง: ใช้ toMatchObject ใส่เฉพาะ property ที่อยากเช็ค
// ------------------------------------------------
test("buildProduct(\"Pen\", 50) ต้องมี name เป็น \"Pen\" และ inStock เป็น true", () => {
  expect(buildProduct("Pen", 50)).toMatchObject({ name: "Pen", inStock: true });
});
