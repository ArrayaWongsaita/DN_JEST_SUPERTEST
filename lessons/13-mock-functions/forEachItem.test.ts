import { forEachItem } from "./forEachItem";

// ================================================
// บทที่ 13: ฟังก์ชันปลอม (mock function)
// ฝึก: jest.fn, toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith
//
// jest.fn() สร้างฟังก์ชันปลอมที่จดไว้ว่า "ถูกเรียกกี่ครั้ง ด้วยค่าอะไร"
// เราส่งมันเข้าไปแทนฟังก์ชันจริง แล้วตรวจว่าถูกเรียกตามที่คาดไหม
//
// ตัวอย่าง:
//   const callback = jest.fn();
//   callback("x");
//   expect(callback).toHaveBeenCalledWith("x");
// ================================================


// ------------------------------------------------
// ข้อ 1: forEachItem(["a", "b"], callback) ต้องเรียก callback
// แนวทาง: const callback = jest.fn(); เรียก forEachItem แล้วใช้ toHaveBeenCalled()
// ------------------------------------------------
test("forEachItem([\"a\", \"b\"], callback) ต้องเรียก callback", () => {
  const callback = jest.fn();
  forEachItem(["a", "b"], callback);
  expect(callback).toHaveBeenCalled();
});


// ------------------------------------------------
// ข้อ 2: forEachItem(["a", "b"], callback) ต้องเรียก callback 2 ครั้ง
// แนวทาง: ใช้ toHaveBeenCalledTimes(จำนวนครั้ง)
// ------------------------------------------------
test("forEachItem([\"a\", \"b\"], callback) ต้องเรียก callback 2 ครั้ง", () => {
  const callback = jest.fn();
  forEachItem(["a", "b"], callback);
  expect(callback).toHaveBeenCalledTimes(2);
});


// ------------------------------------------------
// ข้อ 3: forEachItem(["a", "b"], callback) ต้องเรียก callback ด้วย "a"
// แนวทาง: ใช้ toHaveBeenCalledWith("a")
// ------------------------------------------------
test("forEachItem([\"a\", \"b\"], callback) ต้องเรียก callback ด้วย \"a\"", () => {
  const callback = jest.fn();
  forEachItem(["a", "b"], callback);
  expect(callback).toHaveBeenCalledWith("a");
});


// ------------------------------------------------
// ข้อ 4: forEachItem([], callback) ต้องไม่เรียก callback
// แนวทาง: ใช้ not ร่วมกับ toHaveBeenCalled()
// ------------------------------------------------
test("forEachItem([], callback) ต้องไม่เรียก callback", () => {
  const callback = jest.fn();
  forEachItem([], callback);
  expect(callback).not.toHaveBeenCalled();
});
