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
      navigate("/"); // ✅ Redirige solo si el login es exitoso
    } catch (error) {
      console.log(error.message);
      setErrorLogin(error.message); // ✅ Muestra mensaje de error
    }
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="bg-base-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
         
          {/* Sección del formulario */}
          <div className="w-full md:w-1/2">
            <div className="bg-base-100 p-6 md:p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-medium">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full mt-1"
                    placeholder="Ingresa tu email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-medium">Contraseña</label>
                  <input
                    type="password"
                    className="input input-bordered w-full mt-1"
                    placeholder="Ingresa tu contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-sm">
                  ¿No tienes cuenta?{" "}
                  <Link to="/register" className="text-blue-500 hover:underline">
                    Regístrate
                  </Link>
                </p>
                {errorLogin && (
                  <p className="alert alert-error text-center mt-2">{errorLogin}</p>
                )}
                <button className="btn btn-warning btn-soft w-full mt-2" type="submit">
                  Entrar
                </button>
              </form>
            </div>
          </div>
           {/* Sección de texto */}
           <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">¡Comienza a jugar!</h1>
            <p className="py-4 text-lg">
              Conéctate con tu cuenta para competir online contra otros jugadores,
              ganar puntos y aparecer en nuestros rankings.
            </p>
            <p className="text-lg font-semibold">¡Aprende y juega al mismo tiempo!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
