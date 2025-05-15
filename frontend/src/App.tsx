import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Typography, Container, AppBar, Toolbar } from '@mui/material';
import Dashboard from './pages/Dashboard';
import HabitDetail from './pages/HabitDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Container maxWidth="lg">
              <Typography variant="h4" component="h1" align="center" sx={{ width: '100%' }}>
                Habit Tracker
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/habits/:id" element={<HabitDetail />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};

export default App;
