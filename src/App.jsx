import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';

// A utility function to check if the user is authenticated (i.e., if a token is stored)
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if there's a token, otherwise false
};

// A wrapper component to protect routes that require authentication
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to='/login' />;
};

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route: HomePage */}
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />

        {/* Public route: Login */}
        <Route path='/login' element={<Login />} />

        {/* Private route: Dashboard, accessible only if logged in */}
        <Route
          path='/dashboard'
          element={<PrivateRoute element={<Dashboard />} />}
        />

        {/* Fallback route: Redirect to HomePage if no route is matched */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;
