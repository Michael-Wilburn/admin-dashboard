import { useState, useEffect} from 'react'
import { supabase } from '../supabase/supabaseClient'
import { useNavigate } from "react-router-dom";
import logo from '../assets/LogoNegocioMW.svg';
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export default function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [recovery, setRecovery] = useState(false);

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

  const handleLogin = async (event) => {
    event.preventDefault()
    
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password:password
    })
  
    if (error) {
      const msg = error.message;
      Store.addNotification({
        title: "Error",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true
        }
      });
    } else {
      navigate('/');
    }
    setLoading(false)
  }

  const handleRecovery = async(event) =>{
    event.preventDefault()
    setLoading(true)
    const res = await supabase.auth.resetPasswordForEmail(email, {redirectTo: 'http://localhost:5173/recovery'})
    console.log(res);
    setLoading(false);
    setRecovery(false);
  }
 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
      <ReactNotifications />
      <img src={logo} className="w-96 " />
      <div className="divider"></div>
        <div className="text-center lg:text-center mt-6" >
          <div className='card w-96 bg-base-100 shadow-xl'>
            {recovery ? 
            <form onSubmit={handleRecovery} className="card-body">
            <h3 className="text-4xl font-bold mb-6">Recuperar contraseña</h3>
              <div className="form-control">
                <label className="label">
                  Ingresa tu correo electrónico para recuperar tu contraseña.
                </label>
                <input
                  className="input input-bordered input-primary input-md w-full max-w-xs text-center"
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control mt-6 flex-row justify-between">
                <button className="btn btn-outline btn-primary" onClick={()=>{setRecovery(false)}} >
                  <span>Cancelar</span>
                </button>
                <button disabled={loading} className="btn btn-outline btn-primary" onClick={()=>{handleRecovery}}>
                  {loading ? <span className="loading loading-spinner"></span> : <span>Enviar email</span>}
                </button>
              </div>
            </form>
            
              :

            <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-4xl font-bold mb-6">Login</h2>
              <div className="form-control">
                <input
                  className="input input-bordered input-primary input-md w-full max-w-xs"
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <input
                  className="input input-bordered input-primary input-md w-full max-w-xs"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              <label className="label text-center">
              <span href="#" onClick={()=>{setRecovery(true)}} className="label-text-alt link link-hover">¿Olvidaste tu contraseña?</span>
              </label>
              </div>
              <div className="form-control mt-6">
                <button disabled={loading} className="btn btn-outline btn-primary">
                  {loading ? <span className="loading loading-spinner"></span> : <span>Iniciar sesión</span>}
                </button>
              </div>
            </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}