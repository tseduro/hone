import { useState } from 'react'
import supabase from '../helper/supabaseClient';
import { Link } from 'react-router-dom';




function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("User Account Created!");
        }

        setEmail(""); {/* empty email after sign up */ }
        setPassword(""); {/* empty password after sign up */ }
    };

    return (
        <div>
            <h2>Sign Up</h2>
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
                <button type='submit'> Create Account</button>
            </form>
            <span>Already have an Account?</span>
            <Link to='/SignIn'> Sign In </Link>
        </div>
    );

}
export default SignUp