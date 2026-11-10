import request from "supertest";
import { app } from "./app";

// ================================================
// บทที่ 16: ทดสอบ API แบบ GET
// ฝึก: request(app).get(...), response.status, response.body
//
// supertest ช่วยให้เราส่งคำขอเข้า app ได้เหมือนมีคนเรียกจริง โดยไม่ต้องเปิด server (ไม่มี listen)
//
// ตัวอย่าง:
//   import request from "supertest";
//   const response = await request(app).get("/health");
//   expect(response.status).toBe(200);
//   expect(response.body).toEqual({ ... });
//
// test ต้องเป็น async และต้องมี await หน้า request(...) เหมือนบท 12
// ================================================


// ------------------------------------------------
// ข้อ 1: GET /health ต้องได้ status 200
// แนวทาง: const response = await request(app).get("/health"); แล้วใช้ toBe(200) กับ response.status
// ------------------------------------------------
test("GET /health ต้องได้ status 200", async () => {
  const response = await request(app).get("/health");
  expect(response.status).toBe(200);
});


// ------------------------------------------------
// ข้อ 2: GET /health ต้องได้ body เป็น { status: "ok" }
// แนวทาง: ใช้ toEqual กับ response.body
// ------------------------------------------------
test("GET /health ต้องได้ body เป็น { status: \"ok\" }", async () => {
  const response = await request(app).get("/health");
  expect(response.body).toEqual({ status: "ok" });
});


// ------------------------------------------------
// ข้อ 3: GET /users/1 ต้องได้ status 200 และข้อมูลของ Mali
// แนวทาง: ตรวจสองอย่างใน test เดียว คือ response.status และ response.body
// ------------------------------------------------
test("GET /users/1 ต้องได้ status 200 และข้อมูลของ Mali", async () => {
  const response = await request(app).get("/users/1");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ id: 1, name: "Mali" });
});


// ------------------------------------------------
// ข้อ 4: GET /users/99 ต้องได้ status 404
// แนวทาง: ใช้ toBe(404) กับ response.status
// ------------------------------------------------
test("GET /users/99 ต้องได้ status 404", async () => {
  const response = await request(app).get("/users/99");
  expect(response.status).toBe(404);
});


// ------------------------------------------------
// ข้อ 5: GET /users/99 ต้องได้ข้อความ "User not found"
// แนวทาง: ใช้ toHaveProperty("message", "...") กับ response.body
// ------------------------------------------------
test("GET /users/99 ต้องได้ข้อความ \"User not found\"", async () => {
  const response = await request(app).get("/users/99");
  expect(response.body).toHaveProperty("message", "User not found");
});
