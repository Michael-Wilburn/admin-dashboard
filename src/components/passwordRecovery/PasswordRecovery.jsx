import AuthContext from '../../context/authContext/AuthContext';
import { useContext } from "react";

export default function Login(){
    const {
        email,
        loading,
        handleRecovery,
        setEmail,
        setRecovery} = useContext(AuthContext)

    return(
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
    )
}