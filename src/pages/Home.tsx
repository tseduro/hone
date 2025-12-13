import supabase from '../helper/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Home() {
const navigate = useNavigate();

const signOut = async () => {
  const {error} = await supabase.auth.signOut();
  if(error) throw error;
  navigate("/");
}

  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home