import { supabase } from '../../supabase/supabaseClient';
import { useState, createContext} from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
    const [formData,setFormData] = useState()

    const dataPrint = () =>{
        console.log(formData)
    }

  return (
    <FormContext.Provider value={{formData, setFormData, dataPrint}}>{children}</FormContext.Provider>
  );
}

export default FormContext;