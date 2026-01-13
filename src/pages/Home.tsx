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
      <Navbar />
      <div>
        <h2>Welcome!</h2>
        <div>
          <button onClick={fetchHabits}> test </button>
        </div>
      </div>
    </>
  )
}

export default Home