import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAdmin } = useAuth();

  return (
    <Route
      {...rest}
      element={isAdmin() ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
