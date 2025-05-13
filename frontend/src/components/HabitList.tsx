import React from 'react';
import { Habit } from '../types';
import HabitItem from './HabitItem';

interface HabitListProps {
  habits: Habit[];
}

const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  if (!habits.length) {
    return <div>No habits found. Create a new habit to get started!</div>;
  }

  return (
    <div className="habit-list">
      <ul>
        {habits.map(habit => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
