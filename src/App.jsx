import './App.css'
import { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Recovery from './pages/Recovery'
import { supabase } from './supabase/supabaseClient'
import { AuthProvider } from './context/authContext/AuthContext'
import {CarsDataProvider} from './context/carsDataContext/CarsDataContext';
import {FormProvider} from './context/formContext/formContext'

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
    <FormProvider>
    <CarsDataProvider>
    <AuthProvider>
        <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/recovery" element={<Recovery/>}/>
        </Routes>
        </div>
    </AuthProvider>
    </CarsDataProvider>
    </FormProvider>
  )
}

export default App
