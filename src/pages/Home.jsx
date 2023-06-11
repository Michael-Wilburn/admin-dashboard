import { useEffect } from "react"
import { supabase } from "../supabase/supabaseClient"
import { useNavigate } from "react-router-dom";
import CarForm from "../components/carForm/CarForm";

export default function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        supabase.auth.onAuthStateChange((event, session)=>{
            if(event === 'PASSWORD_RECOVERY'){navigate('/')}

            if(!session & (event === 'SIGNED_OUT' || event === 'INITIAL_SESSION')){
              navigate('/login');
            } 
          })
    },[])
    useEffect(()=>{
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == "PASSWORD_RECOVERY") {
          navigate('/recovery')
        }
      })
    },[])
    return(
    <div>
        <h1>Home</h1>
        <CarForm />
        <button onClick={()=>supabase.auth.signOut()}>Cerrar Sesión</button>
    </div>
    )
}