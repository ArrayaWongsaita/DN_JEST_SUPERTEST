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
// 👉 เขียนโค้ดของข้อ 1 ตรงนี้


// ------------------------------------------------
// ข้อ 2: POST /users ด้วย name "Nida" ต้องได้ status 201
// แนวทาง: request(app).post("/users").send({ name: "Nida" }) แล้วใช้ toBe(201)
// ------------------------------------------------
test.todo("POST /users ด้วย name \"Nida\" ต้องได้ status 201");
// 👉 เขียน test ของข้อ 2 ตรงนี้


// ------------------------------------------------
// ข้อ 3: POST /users ด้วย name "Nida" ต้องได้ body ที่มี name และ id
// แนวทาง: ใช้ toMatchObject({ name: "Nida" }) และ toHaveProperty("id") กับ response.body
// ------------------------------------------------
test.todo("POST /users ด้วย name \"Nida\" ต้องได้ body ที่มี name และ id");
// 👉 เขียน test ของข้อ 3 ตรงนี้


// ------------------------------------------------
// ข้อ 4: POST /users โดยไม่ส่ง name ต้องได้ status 400
// แนวทาง: ส่ง body เปล่า .send({}) แล้วใช้ toBe(400)
// ------------------------------------------------
test.todo("POST /users โดยไม่ส่ง name ต้องได้ status 400");
// 👉 เขียน test ของข้อ 4 ตรงนี้


// ------------------------------------------------
// ข้อ 5: POST /users โดยไม่ส่ง name ต้องได้ข้อความ "Name is required"
// แนวทาง: ใช้ toEqual({ message: "..." }) กับ response.body
// ------------------------------------------------
test.todo("POST /users โดยไม่ส่ง name ต้องได้ข้อความ \"Name is required\"");
// 👉 เขียน test ของข้อ 5 ตรงนี้


// ------------------------------------------------
// ข้อ 6: POST /users แล้ว GET /users ต้องมีผู้ใช้ 3 คน
// แนวทาง: POST หนึ่งครั้ง แล้ว GET /users ใช้ toHaveLength(3) กับ response.body
// ------------------------------------------------
test.todo("POST /users แล้ว GET /users ต้องมีผู้ใช้ 3 คน");
// 👉 เขียน test ของข้อ 6 ตรงนี้
