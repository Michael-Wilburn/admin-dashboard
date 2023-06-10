import {useEffect} from 'react'
import { supabase } from '../supabase/supabaseClient'
import { useNavigate } from "react-router-dom";


export default function Recovery() {
  const navigate = useNavigate();
  const recuperar = async() =>{
    const newPassword = prompt("What would you like your new password to be?");
    const { data, error } = await supabase.auth
      .updateUser({ password: newPassword })

    if (data) { 
      alert("Password updated successfully!")
      supabase.auth.signOut()
      navigate('/login')
    }
    if (error) alert("There was an error updating your password.")
    
  }

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session)=>{
      if(event === 'PASSWORD_RECOVERY'){
        recuperar()
      }
    })
  },[])

    return(
    <div>
        <h1>Actualice su contraseña</h1>
    </div>
    )
}