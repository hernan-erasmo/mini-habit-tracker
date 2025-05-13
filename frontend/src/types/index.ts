export interface Habit {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface CheckIn {
  id: number;
  habit_id: number;
  date: string;
  created_at: string;
}
