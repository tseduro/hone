import React from 'react';
import {useState, useEffect} from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://elvnswrwvepdjcjspwil.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdm5zd3J3dmVwZGpjanNwd2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjIzMzQsImV4cCI6MjA3OTU5ODMzNH0.xjxsxydWLjIlZqVkP7dPyHZfwXCPExnypg22VTJjQdM"
)

function App() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[userData, setUserData] = useState(null);

  useEffect(() => {

    async function checkData() {

      const{data, error} = await supabase.auth.getSession();
      setUserData(data);
    }

    checkData();
  }, [] )

  async function signUp() {
    
    const {data, error} = await supabase.auth.signUp({
      email:email,
      password:password,
    });

    if(error){
      alert("Error Signing Up");
    }else{
      setUserData(data);
      console.log(data);
    }
  }

  async function signIn() {
    
    const {data, error} = await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });

    if(error){
      alert("Error Signing In");
    }else{
      setUserData(data);
      console.log(data);
    }
  }

  async function signOut() {
    
    const {data, error} = await supabase.auth.signOut();
    setUserData(null);
  }

  return userData?.session != null ?(
  <>
  <div>
    <h1>Hello, {userData.session.user.email}</h1>
    <button onClick={signOut}>Sign Out</button>
  </div>
  </>
  ):(
  <>
  <div>
    <input 
    onChange={(e) => {
      setEmail(e.target.value)
    }} 
    type ="email" 
    placeholder='Enter your email'
    />
    <input 
    onChange={(e)=>{
      setPassword(e.target.value)
      }} 
      type="password" 
      placeholder='Choose a password' 
    />
    <button onClick={signUp}>Sign up</button>
    <hr />
    <input 
    onChange={(e) => {
      setEmail(e.target.value)
      }} 
      type ="email" 
      placeholder='Enter your email'
    />
    <input 
    onChange={(e) => 
      {setPassword(e.target.value)
    }} 
    type="password" 
    placeholder='Enter your password' 
    />
    <button onClick={signIn}>Login</button>  
  </div>
  </>
)}

export default App