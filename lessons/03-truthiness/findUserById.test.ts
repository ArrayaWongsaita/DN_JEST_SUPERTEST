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
// test.todo("findUserById(99) ต้องได้ null");
// 👉 เขียน test ของข้อ 1 ตรงนี้
test("findUserById(99) ต้องได้ null", () => {
    expect(findUserById(99)).toBeNull()
})


// ------------------------------------------------
// ข้อ 2: findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)
// แนวทาง: expect(findUserById(...)).toBeTruthy()
// ------------------------------------------------
// test.todo("findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)");
// 👉 เขียน test ของข้อ 2 ตรงนี้
// test.todo("findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)");
test("findUserById(1) ต้องเจอผู้ใช้ (ค่าเป็นจริง)", () => {
    // expect(Boolean(findUserById(1))).toBe(true)
    expect(findUserById(1)).toBeTruthy()
});

