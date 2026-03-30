import supabase from '../helper/supabaseClient';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import type { Habit } from '../types/types';


function Home() {
  const [newHabit, setNewHabit] = useState<Habit>({ id: 0, title: '', description: '', frequency: '' });
  const [habits, setHabits] = useState<Habit[]>([]);
  const [editId, setEditId] = useState(0);
  const [editForm, setEditForm] = useState<Habit>({ id: 0, title: '', description: '', frequency: '' });

  useEffect(() => {
    fetchHabits();
  }, [])

  async function fetchHabits() {
    const { data, error } = await supabase
      .from("habits")
      .select("*")
    if (error) console.error(error);
    else { setHabits(data) }
  }

  const addHabit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('habits')
      .insert([{ title: newHabit.title, description: newHabit.description, frequency: newHabit.frequency }])

    if (error) {
      console.error('Error inserting data: ', error)
    } else {
      console.log('Data inserted: ', data)
    }
    setNewHabit({ id: 0, title: '', description: '', frequency: '' });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewHabit(prev =>
    ({
      ...prev,
      [name]: value
    }));
  }

  const handleDelete = async (id: number) => {

    const { error } = await supabase
      .from('habits')
      .delete()
      .eq('id', id)
      .select()

    if (error) { console.log('Could not delete row', error) };
  }

  const startEdit = (habit: Habit) => {
    setEditId(habit.id)
    setEditForm({
      id: habit.id,
      title: habit.title,
      description: habit.description,
      frequency: habit.frequency
    })
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = async (id: number) => {

    const { data, error } = await supabase
      .from('habits')
      .update({
        id: editForm.id,
        title: editForm.title,
        description: editForm.description,
        frequency: editForm.frequency
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Error updating data: ', error)
    } else {
      console.log('Data updated: ', data)
    }
    if (!error && data) {
      setEditId(0);

    }
  }


  return (
    <>
      <div>
        <Navbar />
        <div className='text-center space-y-8'>
          <h2 className="font-serif text-6xl font-bold text-balance gradient-text">Welcome Back!</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">Here's your progress report</p>

          <div className='w-full max-w-md bg-card border border-border rounded-lg shadow-lg p-8'>
            <>
              {habits.map(habit =>
                <div key={habit.id}>
                  {editId === habit.id ? (
                    <>
                      <input
                        type='text'
                        name="title"
                        value={editForm.title || ''}
                        onChange={handleEditChange}
                      />
                      <input
                        type='text'
                        name="description"
                        value={editForm.description || ''}
                        onChange={handleEditChange}
                      />
                      <input
                        type='text'
                        name="frequency"
                        value={editForm.frequency || ''}
                        onChange={handleEditChange}
                      />
                      <button onClick={() => handleEdit(habit.id)}>Save</button>
                      <button onClick={() => setEditId(0)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      {habit.title}
                      <button type='button' onClick={() => handleDelete(habit.id)} className='border hover:bg-blue-800 btn-primary px-1 py-1 rounded-lg font-semibold text-md'> delete</button>
                      <button type='button' onClick={() => startEdit(habit)} className='border hover:bg-blue-800 btn-primary px-1 py-1 rounded-lg font-semibold text-md'> edit</button>
                    </>
                  )}
                </div>
              )}
            </>
          </div>

          <div>
            <h2 className='font-serif text-3xl font-bold text-balance gradient-text'>Add Habit</h2>
            <form onSubmit={addHabit}>
              <label htmlFor="title">Name</label>
              <input
                type="text"
                name='title'
                placeholder='Habit name'
                className='w-full px-4 py-3 bg-background border border-input rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                onChange={handleChange}
                value={newHabit.title}
              />
              <label htmlFor="description">description</label>
              <input
                type="text"
                name='description'
                placeholder='Habit name'
                className='w-full px-4 py-3 bg-background border border-input rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                onChange={handleChange}
                value={newHabit.description}
              />
              <label htmlFor="frequency">frequency</label>
              <input
                type="text"
                name='frequency'
                placeholder='Habit name'
                className='w-full px-4 py-3 bg-background border border-input rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                onChange={handleChange}
                value={newHabit.frequency}
              />
              <button type='submit' className='border hover:bg-blue-800 btn-primary px-1 py-1 rounded-lg font-semibold text-md'> Create Habit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home