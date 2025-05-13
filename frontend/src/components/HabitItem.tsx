import React from 'react';
import { Link } from 'react-router-dom';
import { Habit } from '../types';

// Define props interface properly
interface HabitItemProps {
  habit: Habit;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  return (
    <li className="habit-item">
      <div className="habit-info">
        <h3>{habit.name}</h3>
        {habit.description && <p>{habit.description}</p>}
      </div>
      <div className="habit-actions">
        <Link to={`/habits/${habit.id}`} className="view-btn">
          View Details
        </Link>
        <button 
          onClick={async (e) => {
            e.preventDefault();
            // Quick check-in functionality could be added here
            try {
              // Example: await checkInHabit(habit.id);
              alert('Checked in!');
            } catch (err) {
              console.error('Check-in failed', err);
            }
          }}
          className="checkin-btn"
        >
          Check-in
        </button>
      </div>
    </li>
  );
};

export default HabitItem;
