import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HabitDetail from './pages/HabitDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Habit Tracker</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/habits/:id" element={<HabitDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
