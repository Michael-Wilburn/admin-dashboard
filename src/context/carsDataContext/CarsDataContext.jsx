import { supabase } from '../../supabase/supabaseClient';
import { useState, createContext} from 'react';

const CarsDataContext = createContext();

export function CarsDataProvider({ children }) {
    const [data, setData] = useState([])
    const [check, setCheck] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
 
    const getResponse =()=> {
        supabase.from('vehicules').select()
        .then((r)=>{
            console.log(r);
            setData(r.data);
            setCheck(r.data.map(car => ({id:car.id, web:car.web, marketplace:car.marketplace})));
            setIsLoaded(true);
        })
        .catch((e) => {
            setIsLoaded(false);
            console.log(e);
        });
    }


    const orderByYear = () =>{
        supabase.from('vehicules').select().order('year', { ascending: true })
        .then((r)=>{
            console.log(r);
            setData(r.data);
            setCheck(r.data.map(car => ({id:car.id, web:car.web, marketplace:car.marketplace})));
            setIsLoaded(true);
    
        })
        .catch((e) => {
            setIsLoaded(false);
            console.log(e);
        });

    }

  return (
    <CarsDataContext.Provider value={{data,getResponse,isLoaded, check, setCheck ,orderByYear}}>{children}</CarsDataContext.Provider>
  );
}

export default CarsDataContext;
