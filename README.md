# DN_JEST_SUPERTEST — ฝึกเขียน test ด้วย Jest

repo นี้คือแบบฝึกหัด 17 บท สำหรับคนที่ยังไม่เคยเขียน test ทุกบทมีฟังก์ชันเล็กๆ ที่เตรียมไว้ให้ และไฟล์ `.test.ts` ที่บอกว่าให้ทดสอบอะไร ค่อยๆ เพิ่ม matcher ทีละนิด ตั้งแต่ `toBe` ไปจนถึง `@jest-mock/express` และ `supertest`

## ติดตั้ง

```bash
git clone https://github.com/ArrayaWongsaita/DN_JEST_SUPERTEST.git
cd DN_JEST_SUPERTEST
npm install
```

## วิธีทำแบบฝึกหัด

1. เปิดโฟลเดอร์ของบท เช่น `lessons/01-first-test/`
2. อ่านไฟล์ฟังก์ชัน เช่น `add.ts` ให้เข้าใจว่าฟังก์ชันทำอะไร
3. เปิดไฟล์ `.test.ts` คู่กัน อ่านโจทย์และแนวทางของแต่ละข้อ
4. ลบบรรทัด `test.todo(...)` ของข้อนั้น แล้วเขียน `test("ชื่อ", () => { ... })` ตรงจุดที่มี 👉
5. รัน test ดูผล ทำทีละข้อ

## วิธีรัน

```bash
npm test                          # รันทุกบท
npm test lessons/01               # รันเฉพาะบท 01
npm test -- --watch lessons/01    # รันซ้ำอัตโนมัติทุกครั้งที่บันทึกไฟล์
```

## วิธีอ่านผล

- `todo` (สีม่วง/เหลือง) = ข้อที่ยังไม่ได้เขียน ยังไม่นับว่าผ่าน
- `✓` = test ผ่าน
- ไฟล์ที่มีแต่ todo จะขึ้นคำว่า `PASS` ตรงชื่อไฟล์ได้ ไม่ได้แปลว่าทำเสร็จ ให้ดูรายข้อว่ายังมี todo เหลืออยู่หรือไม่
- `✕` = test ไม่ผ่าน ดูส่วน **Expected** (ค่าที่เราคาดหวัง) เทียบกับ **Received** (ค่าที่ได้จริง) เพื่อหาว่าพลาดตรงไหน

## สารบัญ

### ช่วงที่ 1: matcher พื้นฐาน

| บท | โฟลเดอร์ | ฝึก |
|---|---|---|
| 01 | `01-first-test` | `test`, `expect`, `toBe` |
| 02 | `02-to-equal` | `toEqual` |
| 03 | `03-truthiness` | `toBeNull`, `toBeUndefined`, `toBeTruthy`, `toBeFalsy` |
| 04 | `04-numbers` | `toBeGreaterThan`, `toBeLessThan`, `toBeCloseTo` |

### ช่วงที่ 2: ข้อความ, array, object, error

| บท | โฟลเดอร์ | ฝึก |
|---|---|---|
| 05 | `05-strings` | `toMatch`, `toContain` กับข้อความ |
| 06 | `06-arrays` | `toContain` กับ array, `toHaveLength` |
| 07 | `07-objects` | `toHaveProperty`, `toMatchObject` |
| 08 | `08-not` | `.not` |
| 09 | `09-errors` | `toThrow` |

### ช่วงที่ 3: จัดระเบียบ test, async, mock

| บท | โฟลเดอร์ | ฝึก |
|---|---|---|
| 10 | `10-describe-before-each` | `describe`, `beforeEach` |
| 11 | `11-setup-teardown` | `beforeAll`, `afterEach`, `afterAll` |
| 12 | `12-async` | `async/await`, `resolves`, `rejects` |
| 13 | `13-mock-functions` | `jest.fn`, `toHaveBeenCalled...` |

### ช่วงที่ 4: Express

ทวนก่อนเริ่ม: `req` คือคำขอที่เข้ามา (params, headers, body), `res` คือตัวส่งคำตอบกลับ (`res.status(...)`, `res.json(...)`), `next` คือฟังก์ชันส่งต่อให้ตัวถัดไป

| บท | โฟลเดอร์ | ฝึก |
|---|---|---|
| 14 | `14-mock-req-res` | `getMockReq`, `getMockRes` จาก `@jest-mock/express` |
| 15 | `15-mock-middleware` | ตรวจ `next` ใน middleware |
| 16 | `16-supertest-get` | `request(app).get` |
| 17 | `17-supertest-post` | `request(app).post().send()` |

## เฉลย

เปิดดูบนเว็บได้ที่ https://github.com/ArrayaWongsaita/DN_JEST_SUPERTEST/tree/solutions/lessons — ไม่ต้อง checkout branch ลองทำเองก่อนแล้วค่อยเปิดดู
