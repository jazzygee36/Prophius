import { useNavigate } from 'react-router-dom';
import Notification from '../../assets/icons/bell';
import Logo from '../../assets/prophius_logo.jpeg';
import DownArrow from '../../assets/icons/down';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const Routes = [
    {
      name: 'Transactions',
      path: '/dashboard',
    },
  ];

  const user = localStorage.getItem('email');
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the menu container
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogin = () => {
    localStorage.clear();
  };

  const menuItems = [{ name: 'Logout', path: '/', handleLogin: handleLogin }];

  // Effect to close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between items-center w-full py-6'>
      <div className='flex items-center gap-4 md:gap-8 cursor-pointer'>
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

        <div className='rounded-full flex justify-center items-center w-7 h-7 md:w-10 md:h-10 bg-slate-300 uppercase text-sm md:text-md'>
          {user?.[0] ?? 'Pro'}
        </div>

        <div className='relative' ref={menuRef}>
          <div onClick={toggleMenu}>
            <DownArrow />
          </div>
          {isOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-md shadow-lg z-50'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => {
                      navigate(item.path);
                      handleLogin();
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
