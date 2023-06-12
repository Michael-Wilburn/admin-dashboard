import { supabase } from "../../supabase/supabaseClient"
import logo from '../../assets/LogoNegocioMW.svg';

export default function Navbar(){
    return(
        <div className="navbar bg-base-100 shadow-xl mb-2 z-10">
        <div className="flex-1">
          {/* <a className="btn btn-ghost normal-case text-xl">Automotores MW</a> */}
          <img className="max-w-xs	" src={logo} />
        </div>

        <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
        </ul>
        </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://vkffqmiclcyuvuaxkorj.supabase.co/storage/v1/object/public/profile_pictures/IMG_6360.jpeg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-2 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10	">
              <li><a className="justify-between">Profile</a></li>
              <li><a>Settings</a></li>
              <li><button onClick={()=>supabase.auth.signOut()}>Cerrar Sesión</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
}