import { updateProfile } from "./updateProfile";

// ================================================
// บทที่ 07: object
// ฝึก: toHaveProperty, toMatchObject
// ตัวอย่าง: expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
//          (toMatchObject เช็คเฉพาะ property ที่เราระบุ ตัวอื่นไม่สนใจ)
// ================================================

// โปรไฟล์ตั้งต้นที่ใช้ในโจทย์: { name: "Mali", age: 20, city: "Bangkok" }


// ------------------------------------------------
// ข้อ 1: เปลี่ยน city เป็น "Chiang Mai" แล้ว city ต้องเปลี่ยน
// แนวทาง: ใช้ toMatchObject
// ------------------------------------------------
test("เปลี่ยน city เป็น \"Chiang Mai\" แล้ว city ต้องเปลี่ยน", () => {
  const profile = { name: "Mali", age: 20, city: "Bangkok" };
  expect(updateProfile(profile, { city: "Chiang Mai" })).toMatchObject({ city: "Chiang Mai" });
});


// ------------------------------------------------
// ข้อ 2 (เลือกเอง): เปลี่ยน city แล้ว name ต้องยังเป็น "Mali"
// แนวทาง: เลือก matcher เองว่าจะใช้ตัวไหน
// ------------------------------------------------
test("เปลี่ยน city แล้ว name ต้องยังเป็น \"Mali\"", () => {
  const profile = { name: "Mali", age: 20, city: "Bangkok" };
  expect(updateProfile(profile, { city: "Chiang Mai" })).toHaveProperty("name", "Mali");
});
