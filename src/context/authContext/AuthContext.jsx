import { supabase } from '../../supabase/supabaseClient';
import { useState } from 'react';
import { Store } from 'react-notifications-component';
import { createContext } from 'react';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recovery, setRecovery] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      const msg = error.message;
      Store.addNotification({
        title: 'Error',
        message: msg,
        type: 'danger',
        insert: 'top',
        container: 'top-center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
      });
    } else {
      navigate('/');
    }
    setLoading(false);
  };

  const handleRecovery = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/recovery',
    });
    console.log(res);
    setLoading(false);
    setRecovery(false);
  };


  return (
    <AuthContext.Provider
      value={{
        navigate,
        email,
        password,
        recovery,
        loading,
        handleLogin,
        handleRecovery,
        setEmail,
        setPassword,
        setRecovery
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
