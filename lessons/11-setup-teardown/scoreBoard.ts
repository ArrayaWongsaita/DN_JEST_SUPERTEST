// ตารางคะแนนเก็บไว้ในตัวแปรของไฟล์ (ชื่อผู้เล่น -> คะแนน)
let scores: Record<string, number> = {};

function assertPlayer(name: string): void {
  if (!(name in scores)) {
    throw new Error("Player not found");
  }
}

// ตั้งผู้เล่น "Mali" และ "Somchai" คะแนน 0
export function loadPlayers(): void {
  scores = { Mali: 0, Somchai: 0 };
}

// เพิ่มคะแนนให้ผู้เล่น ถ้าไม่มีชื่อนี้จะ throw error
export function addScore(name: string, points: number): void {
  assertPlayer(name);
  scores[name] += points;
}

// ดูคะแนนของผู้เล่น ถ้าไม่มีชื่อนี้จะ throw error
export function getScore(name: string): number {
  assertPlayer(name);
  return scores[name];
}

// ให้ทุกคนกลับเป็น 0 คะแนน
export function resetScores(): void {
  for (const name of Object.keys(scores)) {
    scores[name] = 0;
  }
}

// ลบผู้เล่นทั้งหมด
export function clearPlayers(): void {
  scores = {};
}
