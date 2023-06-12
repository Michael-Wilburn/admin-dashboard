import { useEffect,useContext } from "react"
import { supabase } from "../supabase/supabaseClient"
import { useNavigate } from "react-router-dom";
import CarForm from "../components/carForm/CarForm";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import {CarsDataProvider} from '../context/carsDataContext/CarsDataContext';
import CarsDataContext from "../context/carsDataContext/CarsDataContext";

export default function Home() {
    const data = useContext(CarsDataContext);
    

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
      <CarsDataProvider>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div>
              <Navbar />
              <Table/>
              <Footer />
            </div>
          </div> 
          <div className="drawer-side content-center">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <CarForm/>
          </div>
        </div>
      </CarsDataProvider>
    // <div>
    //     <Navbar />
    //     <div className="flex flex-row">
    //       <CarForm/>
    //       <Table/>
    //     </div>
    //     <Footer />
    // </div>
    
    )
}