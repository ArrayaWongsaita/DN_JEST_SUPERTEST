import { loadPlayers, addScore, getScore, resetScores, clearPlayers } from "./scoreBoard";

// ================================================
// บทที่ 11: เตรียมและเก็บกวาด
// ฝึก: beforeAll, afterEach, afterAll
//
// ลำดับการทำงานของ hook:
//   beforeAll  -> รัน 1 ครั้ง ก่อน test แรก
//   beforeEach -> รันก่อนทุก test
//   (test)
//   afterEach  -> รันหลังทุก test
//   afterAll   -> รัน 1 ครั้ง หลัง test สุดท้าย
//
// describe ด้านล่างเขียนไว้ให้แล้ว ให้เขียนโค้ดทุกข้อ "ข้างใน" describe นี้
// ผู้เล่นใน scoreBoard.ts มี "Mali" และ "Somchai" (เริ่มที่ 0 คะแนน หลังเรียก loadPlayers)
// ================================================


describe("scoreBoard", () => {
  // ------------------------------------------------
  // ข้อ 6: ใส่ console.log บอกชื่อใน hook ทั้งสามตัว เพิ่ม beforeEach ที่มีแค่ console.log
  //         และใส่ console.log ในแต่ละ test แล้วรันดูลำดับ
  // แนวทาง: console.log("beforeAll"); เป็นต้น
  // สรุปลำดับ: beforeAll -> (beforeEach -> test -> afterEach) ซ้ำทุก test -> afterAll
  // ------------------------------------------------
  beforeEach(() => {
    console.log("beforeEach");
  });


  // ------------------------------------------------
  // ข้อ 1: เพิ่ม beforeAll(() => loadPlayers())
  // แนวทาง: beforeAll(() => { loadPlayers(); });
  // ------------------------------------------------
  beforeAll(() => {
    console.log("beforeAll");
    loadPlayers();
  });


  // ------------------------------------------------
  // ข้อ 4: ผู้เล่นที่ยังไม่ได้คะแนนใน test นี้ต้องได้ 0
  // โจทย์: เพิ่ม afterEach(() => resetScores()) แล้วเขียน test นี้
  // แนวทาง: afterEach(() => { resetScores(); }); แล้วใช้ toBe(0) กับ getScore("Mali")
  // ------------------------------------------------
  afterEach(() => {
    console.log("afterEach");
    resetScores();
  });


  // ------------------------------------------------
  // ข้อ 5: เพิ่ม afterAll(() => clearPlayers())
  // แนวทาง: afterAll(() => { clearPlayers(); });
  // ------------------------------------------------
  afterAll(() => {
    console.log("afterAll");
    clearPlayers();
  });


  // ------------------------------------------------
  // ข้อ 2: addScore ให้ Mali 10 คะแนน แล้ว getScore("Mali") ต้องได้ 10
  // แนวทาง: addScore("Mali", 10) แล้วใช้ toBe กับ getScore("Mali")
  // ------------------------------------------------
  test("addScore ให้ Mali 10 คะแนน แล้ว getScore(\"Mali\") ต้องได้ 10", () => {
    console.log("test: Mali 10");
    addScore("Mali", 10);
    expect(getScore("Mali")).toBe(10);
  });


  // ------------------------------------------------
  // ข้อ 3: addScore ให้ Somchai 5 และ 7 คะแนน แล้ว getScore("Somchai") ต้องได้ 12
  // แนวทาง: addScore สองครั้ง แล้วใช้ toBe กับ getScore("Somchai")
  // ------------------------------------------------
  test("addScore ให้ Somchai 5 และ 7 คะแนน แล้ว getScore(\"Somchai\") ต้องได้ 12", () => {
    console.log("test: Somchai 12");
    addScore("Somchai", 5);
    addScore("Somchai", 7);
    expect(getScore("Somchai")).toBe(12);
  });


  // ------------------------------------------------
  // ข้อ 4 (test): ผู้เล่นที่ยังไม่ได้คะแนนใน test นี้ต้องได้ 0
  // แนวทาง: ไม่ต้อง addScore แล้วใช้ toBe(0) กับ getScore("Mali")
  // ------------------------------------------------
  test("ผู้เล่นที่ยังไม่ได้คะแนนใน test นี้ต้องได้ 0", () => {
    console.log("test: Mali 0");
    expect(getScore("Mali")).toBe(0);
  });
});
