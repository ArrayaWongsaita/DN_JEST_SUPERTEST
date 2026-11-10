import request from "supertest";
import { app, resetUsers } from "./app";

// ================================================
// บทที่ 17: ทดสอบ API แบบ POST
// ฝึก: request(app).post(...).send(...)
//
// ตัวอย่าง:
//   const response = await request(app).post("/users").send({ name: "Nida" });
//   expect(response.status).toBe(201);
//
// ส่ง body ไปกับ .send({ ... })
// หมายเหตุ: ข้อมูลผู้ใช้ใน app เก็บไว้ในตัวแปรของไฟล์ จึงต้องรีเซ็ตก่อนทุก test
//          (ทวนบท 10 ใช้ beforeEach เรียก resetUsers())
// ================================================


// ------------------------------------------------
// ข้อ 1: เพิ่ม beforeEach(() => resetUsers())
// แนวทาง: beforeEach(() => { resetUsers(); }); ไว้บนสุดของไฟล์ ใต้บรรทัดนี้
// ------------------------------------------------
beforeEach(() => {
  resetUsers();
});


// ------------------------------------------------
// ข้อ 2: POST /users ด้วย name "Nida" ต้องได้ status 201
// แนวทาง: request(app).post("/users").send({ name: "Nida" }) แล้วใช้ toBe(201)
// ------------------------------------------------
test("POST /users ด้วย name \"Nida\" ต้องได้ status 201", async () => {
  const response = await request(app).post("/users").send({ name: "Nida" });
  expect(response.status).toBe(201);
});


// ------------------------------------------------
// ข้อ 3: POST /users ด้วย name "Nida" ต้องได้ body ที่มี name และ id
// แนวทาง: ใช้ toMatchObject({ name: "Nida" }) และ toHaveProperty("id") กับ response.body
// ------------------------------------------------
test("POST /users ด้วย name \"Nida\" ต้องได้ body ที่มี name และ id", async () => {
  const response = await request(app).post("/users").send({ name: "Nida" });
  expect(response.body).toMatchObject({ name: "Nida" });
  expect(response.body).toHaveProperty("id");
});


// ------------------------------------------------
// ข้อ 4: POST /users โดยไม่ส่ง name ต้องได้ status 400
// แนวทาง: ส่ง body เปล่า .send({}) แล้วใช้ toBe(400)
// ------------------------------------------------
test("POST /users โดยไม่ส่ง name ต้องได้ status 400", async () => {
  const response = await request(app).post("/users").send({});
  expect(response.status).toBe(400);
});


// ------------------------------------------------
// ข้อ 5: POST /users โดยไม่ส่ง name ต้องได้ข้อความ "Name is required"
// แนวทาง: ใช้ toEqual({ message: "..." }) กับ response.body
// ------------------------------------------------
test("POST /users โดยไม่ส่ง name ต้องได้ข้อความ \"Name is required\"", async () => {
  const response = await request(app).post("/users").send({});
  expect(response.body).toEqual({ message: "Name is required" });
});


// ------------------------------------------------
// ข้อ 6: POST /users แล้ว GET /users ต้องมีผู้ใช้ 3 คน
// แนวทาง: POST หนึ่งครั้ง แล้ว GET /users ใช้ toHaveLength(3) กับ response.body
// ------------------------------------------------
test("POST /users แล้ว GET /users ต้องมีผู้ใช้ 3 คน", async () => {
  await request(app).post("/users").send({ name: "Nida" });
  const response = await request(app).get("/users");
  expect(response.body).toHaveLength(3);
});
