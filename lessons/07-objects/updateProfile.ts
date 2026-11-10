export type Profile = { name: string; age: number; city: string };

// แก้โปรไฟล์ตามที่ส่งมา (คืน object ใหม่ ไม่แก้ตัวเดิม)
export function updateProfile(profile: Profile, changes: Partial<Profile>): Profile {
  return { ...profile, ...changes };
}
