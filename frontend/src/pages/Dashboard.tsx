import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import { fetchHabits } from '../services/api';
import { Habit } from '../types';

const Dashboard: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const loadHabits = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHabits();
        setHabits(data);
        setError(null);
      } catch (err) {
        setError('Failed to load habits');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadHabits();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>My Habits</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add New Habit'}
        </button>
      </div>

      {showForm && <HabitForm onHabitAdded={(habit) => setHabits([...habits, habit])} />}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <HabitList habits={habits} />
      )}
    </div>
  );
};

export default Dashboard;
