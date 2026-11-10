import { addToCart } from "./addToCart";

// ================================================
// บทที่ 06: array
// ฝึก: toContain (กับ array), toHaveLength
// ตัวอย่าง: expect(["a", "b"]).toContain("a");
// ================================================


// ------------------------------------------------
// ข้อ 1: addToCart([], "apple") ต้องมี "apple" อยู่ในตะกร้า
// แนวทาง: ใช้ toContain
// ------------------------------------------------
test("addToCart([], \"apple\") ต้องมี \"apple\" อยู่ในตะกร้า", () => {
  expect(addToCart([], "apple")).toContain("apple");
});


// ------------------------------------------------
// ข้อ 2: addToCart(["apple"], "banana") ตะกร้าต้องมี 2 ชิ้น
// แนวทาง: ใช้ toHaveLength
// ------------------------------------------------
test("addToCart([\"apple\"], \"banana\") ตะกร้าต้องมี 2 ชิ้น", () => {
  expect(addToCart(["apple"], "banana")).toHaveLength(2);
});


// ------------------------------------------------
// ข้อ 3: addToCart(["apple"], "banana") ต้องได้ ["apple", "banana"]
// แนวทาง: ใช้ matcher จากบท 02 (เทียบ array ทั้งก้อน)
// ------------------------------------------------
test("addToCart([\"apple\"], \"banana\") ต้องได้ [\"apple\", \"banana\"]", () => {
  expect(addToCart(["apple"], "banana")).toEqual(["apple", "banana"]);
});
