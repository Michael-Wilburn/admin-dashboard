import { useEffect } from "react"
import { supabase } from "../supabase/supabaseClient"
import { useNavigate } from "react-router-dom";
import CarForm from "../components/carForm/CarForm";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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

    return(
    <div>
        <Navbar />
        <CarForm />
        <Footer />
    </div>
    )
}