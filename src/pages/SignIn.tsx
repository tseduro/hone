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
    <div>
      <h2>Sign In</h2>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" placeholder='Enter your Email'
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" placeholder='Choose your Password' />
        <button type='submit'> Sign In</button>
      </form>
      <span>Don't have an Account?</span>
      <Link to='/SignUp'> Sign Up </Link>
    </div>
  );

}

export default SignIn