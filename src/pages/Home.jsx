import { useEffect } from "react"
import { supabase } from "../supabase/supabaseClient"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        supabase.auth.onAuthStateChange((event, session)=>{
            if(!session & (event === 'SIGNED_OUT' || event === 'INITIAL_SESSION')){
              navigate('/login');
            } 
          })
    },[])

    return(
    <div>
        <h1>Home</h1>
        <button onClick={()=>supabase.auth.signOut()}>Cerrar Sesión</button>
    </div>
    )
}