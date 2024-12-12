import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
