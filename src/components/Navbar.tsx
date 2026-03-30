import { Link } from "react-router-dom"
import supabase from '../helper/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/");
    }
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/">
                        <span className='font-semibold text-2xl flex items-center gap-3 text-blue-400'>
                            Hone
                        </span>
                    </Link>

                    <div className='hidden md:flex items-center gap-8'>
                        <Link
                            to="/Home"
                            className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'
                        >
                            Home
                        </Link>
                        <Link
                            to="/About"
                            className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'
                        >
                            About
                        </Link>
                    </div>
                    <button
                        onClick={signOut}
                        className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                        Sign out
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar