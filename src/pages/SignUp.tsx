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
        <div className='w-full max-w-md bg-card border border-border rounded-lg shadow-lg p-8'>
            <div className='text-center mb-8'>
                <h1 className='font-serif text-4xl font-bold mb-2'>Account Setup</h1>
                <p className='text-muted-foreground'>Get started on your journey</p>
            </div>

            {message && <span>{message}</span>}
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium mb-2'>Email Address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder='Enter your Email'
                        className='w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder='Choose your Password'
                        className='w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                        required
                    />
                </div>
                <button type='submit' className='border hover:bg-blue-800 w-full btn-primary px-1 py-1 rounded-lg font-semibold text-md'> Create Account</button>
            </form>
        </div>
        <div className='mt-6 text-center'>
            <p className='text-sm text-muted-foreground'>Already have an Account?</p>
            <Link to='/SignIn'className='text-primary hover:underline font-medium'> Sign In </Link>
        </div>    
        </div>
    );

}
export default SignUp