import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, errorLogin, setErrorLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    login(email, password)
    setErrorLogin('');
    navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-12 flex items-center justify-center">
      <div className="violeta p-8 rounded-lg shadow-lg w-full md:max-w-2xl max-w-md border-3 border-white">
        <h2
          className="font-coderush mb-4 text-center "
          style={{ fontSize: "2.5rem" }}
        >
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg bg-white text-gray-600 border-2 border-white focus:outline-none focus:border-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded-lg bg-white text-gray-400 border-2 border-white focus:outline-none focus:border-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorLogin && (
            <div className="text-red-400 border-fuente text-sm my-4">
              {errorLogin}
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 rosa text-white font-semibold rounded-lg hover:violeta hover:text-white transition-all"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-white">
          ¿No tienes cuenta?{" "}
          <a
            href="/register"
            className="borde-fuente text-gray-400 hover:underline"
          >
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
