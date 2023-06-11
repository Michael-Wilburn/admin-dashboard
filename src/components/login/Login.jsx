import AuthContext from '../../context/authContext/AuthContext';
import { useContext } from "react";

export default function Login(){
    const {
        email,
        password,
        loading,
        handleLogin,
        setEmail,
        setPassword,
        setRecovery} = useContext(AuthContext)
   


    return(
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
              <span onClick={()=>{setRecovery(true)}} className="label-text-alt link link-hover">¿Olvidaste tu contraseña?</span>
              </label>
              </div>
              <div className="form-control mt-6">
                <button disabled={loading} className="btn btn-outline btn-primary">
                  {loading ? <span className="loading loading-spinner loading-lg"></span> : <span>Iniciar sesión</span>}
                </button>
              </div>
        </form>
    )
}




