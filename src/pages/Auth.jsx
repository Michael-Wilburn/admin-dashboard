import { useEffect, useContext} from 'react';
import { supabase } from '../supabase/supabaseClient';
import logo from '../assets/LogoNegocioMW.svg';
import { ReactNotifications } from 'react-notifications-component';
import AuthContext from '../context/authContext/AuthContext';
import 'react-notifications-component/dist/theme.css';
import Login from '../components/login/Login';
import PasswordRecovery from '../components/passwordRecovery/PasswordRecovery';

export default function Auth() {

  const {navigate,recovery} = useContext(AuthContext)

  useEffect(()=>{
    supabase.auth.getSession()
      .then((res)=> {
        if(res.data.session){
          navigate('/');
        }
    }).catch(error =>{
      console.log(error)
    })
  },[])

 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
      <ReactNotifications />
      <img src={logo} className="w-96 " />
      <div className="divider"></div>
        <div className="text-center lg:text-center mt-6" >
          <div className='card w-96 bg-base-100 shadow-xl'>
            {recovery ? <PasswordRecovery/>:<Login/>}
          </div>
        </div>
      </div>
    </div>
  )
}