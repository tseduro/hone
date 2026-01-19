import { useState } from 'react'
import supabase from '../helper/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      setEmail(""); {/* empty email after sign up */ }
      setPassword(""); {/* empty password after sign up */ }
      return;
    }

    if (data) {
      navigate('/Home');
      return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-lg p-8">
        <div className='text-center mb-8'>
          <h1 className='font-serif text-4xl font-bold mb-2'>Welcome Back</h1>
          <p className='text-muted-foreground'>Sign in to continue to your account</p>
        </div>
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium mb-2'> Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" placeholder='Enter your Email'
              className='w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all'
              required
            />
          </div>

          <div>
            <label htmlFor="password" className='block text-sm font-medium mb-2'> Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" placeholder='Enter your Password'
              className='w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all'
              required
            />
          </div>
          <button type='submit' className='border hover:bg-blue-800 w-full btn-primary px-4 py-3 rounded-lg font-semibold text-lg'> Sign In</button>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-sm text-muted-foreground'>Don't have an Account?</p>
          <Link to='/SignUp' className='text-primary hover:underline font-medium'> Sign Up </Link>
        </div>
      </div>
    </div>
  );

}

export default SignIn