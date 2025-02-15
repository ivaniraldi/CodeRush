import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  

  // Cargar el usuario desde el localStorage si hay un token
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);
  

// Función para registrar un usuario
const register = async (name, email, password) => {
  try {
    const response = await axios.post('/api/auth/register', { name, email, password });
    console.log(response.data);

    const { token, user } = response.data.data;

    // Guardar el token y el usuario en el estado
    setToken(token);
    setUser(user);

    // Almacenar el token y el usuario en el localStorage después de actualizar el estado
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    setErrorRegister('Error en el registro: ' + error.response?.data?.message);
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    const { token, user } = response.data.data;

    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Error al iniciar sesión";
    setErrorLogin(errorMessage);
    
    throw new Error(errorMessage); // 🔴 Lanza un error para que `handleSubmit` lo capture
  }
};



  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout, errorLogin, errorRegister, setErrorLogin, setErrorRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
