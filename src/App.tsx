import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login';

import Transactions from './components/pages/transaction';

const Navigation = () => {
  // PrivateRoute component
  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? <>{children}</> : (window.location.href = '/');
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
