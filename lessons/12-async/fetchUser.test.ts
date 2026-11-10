import { fetchUser } from "./fetchUser";

// ================================================
// บทที่ 12: ฟังก์ชันที่ต้องรอ (async)
// ฝึก: async/await, resolves, rejects
//
// fetchUser คืน Promise ซึ่งต้อง "รอ" ก่อนจะได้ค่า
// สำคัญ: test ต้องมี async หน้า () => และต้องมี await เสมอ ถ้าลืม test จะจบก่อนได้ผลจริง
//
// ตัวอย่าง:
//   test("...", async () => {
//     const user = await fetchUser(1);
//     expect(user).toEqual({ ... });
//   });
// ================================================


// ------------------------------------------------
// ข้อ 1: fetchUser(1) ต้องได้ผู้ใช้ชื่อ Mali
// แนวทาง: const user = await fetchUser(1); แล้วใช้ toEqual({ id: 1, name: "Mali" })
// ------------------------------------------------
test("fetchUser(1) ต้องได้ผู้ใช้ชื่อ Mali", async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({ id: 1, name: "Mali" });
});


// ------------------------------------------------
// ข้อ 2: fetchUser(1) ต้องมี name เป็น "Mali"
// แนวทาง: await แล้วใช้ toHaveProperty("name", "Mali")
// ------------------------------------------------
test("fetchUser(1) ต้องมี name เป็น \"Mali\"", async () => {
  const user = await fetchUser(1);
  expect(user).toHaveProperty("name", "Mali");
});


// ------------------------------------------------
// ข้อ 3: fetchUser(1) ต้อง resolve เป็นผู้ใช้ Mali (ใช้ resolves)
// แนวทาง: await expect(fetchUser(1)).resolves.toEqual({ ... })
// ------------------------------------------------
test("fetchUser(1) ต้อง resolve เป็นผู้ใช้ Mali", async () => {
  await expect(fetchUser(1)).resolves.toEqual({ id: 1, name: "Mali" });
});


// ------------------------------------------------
// ข้อ 4: fetchUser(99) ต้อง reject ด้วยข้อความ "User not found"
// แนวทาง: await expect(fetchUser(99)).rejects.toThrow("...")
// ------------------------------------------------
test("fetchUser(99) ต้อง reject ด้วยข้อความ \"User not found\"", async () => {
  await expect(fetchUser(99)).rejects.toThrow("User not found");
});
