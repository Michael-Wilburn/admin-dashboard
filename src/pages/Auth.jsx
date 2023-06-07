import { useState, useEffect} from 'react'
import { supabase } from '../supabase/supabaseClient'
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [active, setActive] = useState(false);

  useEffect(()=>{
    
    supabase.auth.getSession()
      .then((res)=> {
        if(res.data.session){
          navigate('/');
        }
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
      alert(error.error_description || error.message);
    } else {
      navigate('/');
    }
    setLoading(false)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
      <h1 className="text-4xl font-bold mb-6">Automotores MW</h1>
      <div className="divider">*******</div>
        <div className="text-center lg:text-center" >
          <div className='card w-96 bg-base-100 shadow-xl'>
            <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-4xl font-bold mb-6">Login</h2>
              <div className="form-control">
                <input
                  className="input input-bordered input-primary input-md w-full max-w-xs"
                  type="email"
                  placeholder="Correo electrónico o número de teléfono"
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
              <a href="#" className="label-text-alt link link-hover">¿Olvidaste tu contraseña?</a>
              </label>
              </div>
              <div className="form-control mt-6">
                <button disabled={loading} className="btn btn-outline btn-primary">
                  {loading ? <span className="loading loading-spinner"></span> : <span>Iniciar sesión</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}