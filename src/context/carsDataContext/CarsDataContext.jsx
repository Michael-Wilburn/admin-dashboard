import { supabase } from '../../supabase/supabaseClient';
import { useState, createContext} from 'react';

const CarsDataContext = createContext();

export function CarsDataProvider({ children }) {
    const [data, setData] = useState()
 
    const getData = async () =>{
        const result = await supabase.from('vehicules').select();
        console.log(result)
    }
    getData();
    
  return (
    <CarsDataContext.Provider
      value={{getData}}>
      {children}
    </CarsDataContext.Provider>
  );
}

export default CarsDataContext;
