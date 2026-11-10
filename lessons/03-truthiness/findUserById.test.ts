import { findUserById } from "./findUserById";

// ================================================
// บทที่ 03: ค่าว่างและจริง/เท็จ
// ฝึก: toBeNull, toBeUndefined, toBeTruthy, toBeFalsy
// ตัวอย่าง: expect(null).toBeNull();  expect(1).toBeTruthy();
// ================================================


// ------------------------------------------------
// ข้อ 1: findUserById(99) ต้องได้ null
// แนวทาง: expect(findUserById(...)).toBeNull()
// ------------------------------------------------
test("findUserById(99) ต้องได้ null", () => {
  expect(findUserById(99)).toBeNull();
});


// ------------------------------------------------
// ข้อ 2: findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)
// แนวทาง: expect(findUserById(...)).toBeTruthy()
// ------------------------------------------------
test("findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)", () => {
  expect(findUserById(1)).toBeTruthy();
});
