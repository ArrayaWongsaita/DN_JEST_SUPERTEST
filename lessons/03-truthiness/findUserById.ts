type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: "Mali" },
  { id: 2, name: "Somchai" },
];

// หาผู้ใช้จาก id ถ้าไม่เจอคืน null
export function findUserById(id: number): User | null {
  return users.find((user) => user.id === id) ?? null;
}
