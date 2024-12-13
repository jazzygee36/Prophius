import HomeButton from '../../common/button';
import HomeInput from '../../common/input';
import Logo from '../../../assets/loginLogo.png';
import { useState, ChangeEvent, FormEvent } from 'react';
import LoadingSpinner from '../../common/loadingState';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  // Handle login submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (email === 'prophius@example.com' && password === 'password123') {
      localStorage.setItem('token', 'mock-jwt-token');
      setTimeout(() => {
        setLoading(true);
      }, 2000);
      setLoading(false);
      window.location.href = '/dashboard';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-[#264ECA] h-screen flex items-center'>
          <div className='w-[300px] m-auto px-3 py-3'>
            <div className='flex justify-center mb-5 rounded-lg'>
              <img src={Logo} alt='logo' width={120} />
            </div>
            {error && (
              <p className='text-red-500 text-sm text-center mb-3'>{error}</p>
            )}
            <form onSubmit={handleSubmit}>
              <HomeInput
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email'
                autoFocus={!!error} // Auto-focus if there's an error
              />
              <HomeInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Password'
                autoFocus={!!error} // Auto-focus if there's an error
              />
              <div className='mt-4'>
                <HomeButton type='submit' title='Login' />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
