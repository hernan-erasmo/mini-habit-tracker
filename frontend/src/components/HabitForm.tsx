import React, { useState } from 'react';
import { createHabit } from '../services/api';
import { Habit } from '../types';

interface HabitFormProps {
  onHabitAdded: (habit: Habit) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onHabitAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Habit name is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      const newHabit = await createHabit({
        name,
        description: description || undefined,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
      
      onHabitAdded(newHabit);
      
      // Reset form
      setName('');
      setDescription('');
    } catch (err) {
      console.error('Failed to create habit:', err);
      setError('Failed to create habit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <h3>Create New Habit</h3>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="form-group">
        <label htmlFor="habit-name">Habit Name*</label>
        <input
          id="habit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Drink 2L of water"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="habit-description">Description (Optional)</label>
        <textarea
          id="habit-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add some details about your habit"
          disabled={isSubmitting}
        />
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Habit'}
      </button>
    </form>
  );
};

export default HabitForm;
