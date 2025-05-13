import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchHabitById, checkInHabit, deleteHabit } from '../services/api';
import { Habit } from '../types';

const HabitDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [habit, setHabit] = useState<Habit | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHabit = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHabitById(Number(id));
        setHabit(data);
        setError(null);
      } catch (err) {
        setError('Failed to load habit details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadHabit();
    }
  }, [id]);

  const handleCheckIn = async () => {
    try {
      if (!id) return;
      await checkInHabit(Number(id));
      // You might want to refresh the habit data or show a success message
      alert('Check-in successful!');
    } catch (err) {
      console.error(err);
      alert('Failed to check in');
    }
  };

  const handleDelete = async () => {
    try {
      if (!id) return;
      await deleteHabit(Number(id));
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to delete habit');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!habit) return <p>Habit not found</p>;

  return (
    <div className="habit-detail">
      <h2>{habit.name}</h2>
      {habit.description && <p>{habit.description}</p>}
      <p>Created: {new Date(habit.created_at).toLocaleDateString()}</p>

      <div className="habit-actions">
        <button onClick={handleCheckIn} className="check-in-btn">
          Check-in Today
        </button>
        <button onClick={() => navigate(`/habits/edit/${id}`)} className="edit-btn">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>

      <button onClick={() => navigate('/')} className="back-btn">
        Back to Dashboard
      </button>
    </div>
  );
};

export default HabitDetail;
