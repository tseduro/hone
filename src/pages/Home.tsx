import supabase from '../helper/supabaseClient';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function Home() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, [])

  async function fetchHabits() {
    const { data, error } = await supabase.from("habitsTable").select("*").order("created_at", { ascending: true })
    if (error) console.error(error);
    else if (typeof data === "string") { setHabits(data) }
  }

  return (
    <>
      <Navbar />
      <div>
        <h2>Welcome!</h2>
        <div>
          {
            habits.map(habit => (
              <div key={habit}>
                <span>{habit}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home