import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, errorLogin, setErrorLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); 
      setErrorLogin("");  
      navigate("/"); // ✅ Solo se ejecuta si el login fue exitoso
    } catch (error) {
      console.log(error.message);
      setErrorLogin(error.message); // ✅ Muestra el mensaje de error correctamente
    }
  };
  
  return (
<div className="grid grid-cols-1 h-full m-4" >
<div className="hero bg-base-200 md:p-12 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center p-6 lg:text-left">
       <div>
         <h1 className="text-5xl font-bold">¡Comienza a jugar!</h1>
         <p className="py-6 w-md">
           Conectate con tu cuenta para competir online contra otros jugadores, ganar puntos y aparecer en nuestros rankings.
           <br />
           <br />
           ¡Aprende y juega al mismo tiempo!
         </p>
       </div>
      
    </div>
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div>
        <p>¿No tienes cuenta? <Link to={"/register"} className="link link-hover">Registrate</Link></p>
      
      </div>
          {errorLogin && 
            <p className="alert alert-error mt-4 text-center "> 
              {errorLogin}
            </p>
          }
          
          <button className="btn btn-primary text-primary-content mt-4" onClick={(e) => handleSubmit(e)}>Entrar</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>

</div>
  );
};

export default Login;
