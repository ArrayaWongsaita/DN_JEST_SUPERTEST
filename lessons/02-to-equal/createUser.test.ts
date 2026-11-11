
import { createUser } from "./createUser";

// ================================================
// บทที่ 02: toEqual
// ฝึก: toEqual
// toBe ใช้กับ object หรือ array ไม่ได้ เพราะมันเช็คว่าเป็น "ตัวเดียวกัน" ไหม
// toEqual จะเทียบ "ค่าข้างใน" ให้แทน
// ตัวอย่าง: expect({ a: 1 }).toEqual({ a: 1 });
// ================================================

// ------------------------------------------------
// ข้อ 1: createUser("Mali", 20) ต้องได้ object ที่มี name และ age ตรงกัน
// แนวทาง: expect(createUser(...)).toEqual({ name: ..., age: ... })
// ------------------------------------------------
// test.todo("createUser(\"Mali\", 20) ต้องได้ object ที่มี name และ age ตรงกัน");
// 👉 เขียน test ของข้อ 1 ตรงนี้
test(`createUser("Mali", 20) ต้องได้ object ที่มี name และ age ตรงกัน`, () => {
    // Arrange
    const name = "Mali"
    const age = 20

    const expected = {name: "Mali", age: 20}

    // Act
    const result = createUser(name,age)

   // Assert
    expect(result).toEqual(expected)
})


// ------------------------------------------------
// ข้อ 2: createUser("Somchai", 35) ต้องได้ object ที่ถูกต้อง
// แนวทาง: expect(createUser(...)).toEqual({ ... })
// ------------------------------------------------
// test.todo("createUser(\"Somchai\", 35) ต้องได้ object ที่ถูกต้อง");
// 👉 เขียน test ของข้อ 2 ตรงนี้
test("createUser(\"Somchai\", 35) ต้องได้ object ที่ถูกต้อง", () => {

    // Ar
    const name = "Somchai"
    const age = 35
    const expected = {name, age}

    // Ac
    const result = createUser(name,age)

    // As
    expect(result).toEqual(expected);
});
