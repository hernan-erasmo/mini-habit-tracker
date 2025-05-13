import axios from 'axios';
import { Habit, CheckIn } from '../types';

// Set base URL for API requests
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Habits
export const fetchHabits = async (): Promise<Habit[]> => {
  const response = await api.get('/habits');
  return response.data;
};

export const fetchHabitById = async (id: number): Promise<Habit> => {
  const response = await api.get(`/habits/${id}`);
  return response.data;
};

export const createHabit = async (habit: Omit<Habit, 'id'>): Promise<Habit> => {
  const response = await api.post('/habits', habit);
  return response.data;
};

export const updateHabit = async (id: number, habit: Partial<Habit>): Promise<Habit> => {
  const response = await api.put(`/habits/${id}`, habit);
  return response.data;
};

export const deleteHabit = async (id: number): Promise<void> => {
  await api.delete(`/habits/${id}`);
};

// Check-ins
export const checkInHabit = async (id: number): Promise<CheckIn> => {
  const response = await api.post(`/habits/${id}/check-in`);
  return response.data;
};
