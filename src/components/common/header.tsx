import { useNavigate } from 'react-router-dom';
import Notification from '../../assets/icons/bell';
import Logo from '../../assets/prophius_logo.jpeg';
import DownArrow from '../../assets/icons/down';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const Routes = [
    {
      name: 'Transactions',
      path: '/dashbaord',
    },
  ];

  const user = localStorage.getItem('email');

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogin = () => {
    localStorage.clear();
  };

  const menuItems = [{ name: 'Logout', path: '/', handleLogin: handleLogin }];
  return (
    <div className='flex justify-between items-center w-full py-6'>
      <div className='flex items-center gap-8 cursor-pointer'>
        <div>
          <img src={Logo} alt='logo' width={40} />
        </div>
        {Routes.map((nav) => (
          <div key={nav.name} onClick={() => navigate(nav.path)}>
            <p className='text-xl font-semibold text-[#101042]'>{nav.name}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-3'>
        <Notification />
        <div className='rounded-full flex justify-center items-center p-3 bg-slate-300 uppercase'>
          {user?.[0] ?? 'Prophius'}
        </div>

        <div className='relative'>
          <div onClick={toggleMenu}>
            <DownArrow />
          </div>
          {isOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-md shadow-lg'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => {
                      navigate(item.path), handleLogin();
                    }}
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
