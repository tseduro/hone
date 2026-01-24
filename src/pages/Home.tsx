import supabase from '../helper/supabaseClient';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

type Habit = {
  id: number
  title: string
  description?: string
  frequency: string
}

function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    fetchHabits();
  }, [])

  async function fetchHabits() {
    const { data, error } = await supabase
      .from("habitsTable")
      .select("*")
    if (error) console.error(error);
    else { setHabits(data) }
  }

  return (
    <>
      <div>
        <Navbar />
        <div className='text-center space-y-8'>
          <h2 className="font-serif text-6xl font-bold text-balance gradient-text">Welcome Back!</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">Here's your progress report</p>

          <div>
            <button onClick={fetchHabits} className='border border-border hover:bg-blue-600 px-2 rounded-lg'> fetch habits </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home