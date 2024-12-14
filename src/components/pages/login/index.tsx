import HomeButton from '../../common/button';
import HomeInput from '../../common/input';
import Logo from '../../../assets/loginLogo.png';
import { useState, ChangeEvent, FormEvent } from 'react';

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

    if (email && password && password.length > 5) {
      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('email', email);

      setTimeout(() => {
        setLoading(true);
      }, 400);
      window.location.href = '/dashboard';
      setLoading(false);
    } else {
      setError('Password must be 6 characters');
    }
  };

  return (
    <div className='bg-[#0c1632] h-screen flex items-center'>
      <div className='w-[80%] md:w-[300px] m-auto px-3 py-3'>
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
            <HomeButton
              type='submit'
              title={`${loading ? 'Login...' : 'Login'}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
