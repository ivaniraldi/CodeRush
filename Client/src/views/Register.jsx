import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, errorRegister, setErrorRegister } = useAuth();

  const formatName = (name) => {
    // Regla de formato: Nombre Completo
    return name
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    setName(formatName(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorRegister("Las contraseñas no coinciden");
      return;
    }
    try {
      console.log(email, password, name);
      register(name, email, password).then(() => {
        setErrorRegister('');
      });
    } catch (error) {
      setErrorRegister('Error en el registro: ' + error.response?.data?.message);
    }
  };

  return (
    <div className="my-12 flex items-center justify-center">
      <div className="violeta p-8 rounded-lg shadow-lg w-full md:max-w-2xl max-w-md border-3 border-white">
        <h2
          className="font-coderush mb-4 text-center text-white"
          style={{ fontSize: "2.5rem" }}
        >
          Crear una Cuenta
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm mb-2">
              Tu nombre
            </label>
            <input
              type="name"
              id="name"
              className="w-full p-2 rounded-lg bg-white text-gray-600 border-2 border-white focus:outline-none focus:border-gray-700"
              value={name}
              onChange={(e) => handleNameChange(e)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg bg-white text-gray-600 border-2 border-white focus:outline-none focus:border-gray-700"
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
              className="w-full p-2 rounded-lg bg-white text-gray-600 border-2 border-white focus:outline-none focus:border-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-white text-sm mb-2"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 rounded-lg bg-white text-gray-600 border-2 border-white focus:outline-none focus:border-gray-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {errorRegister && (
            <div className="text-red-400 text-sm my-4 text-center borde-fuente">
              {errorRegister}
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 rosa text-white font-semibold rounded-lg hover:violeta hover:text-white transition-all"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-white">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="borde-fuente text-gray-400 hover:underline"
          >
            Inicia sesión aquí
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
