import './App.css'
import { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/supabaseClient'

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session)=>{
      if(!session & event === 'SIGNED_OUT'){
        navigate('/login');
      } 
    })
  },[])

  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Auth/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
