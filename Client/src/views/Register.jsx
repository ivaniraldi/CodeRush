import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { register, errorRegister, setErrorRegister } = useAuth();
  const navigate = useNavigate();

  const formatName = (name) =>
    name
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (name.length < 3) {
      newErrors.name = "Debe tener al menos 3 caracteres.";
    }

    if (!email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Formato de email inválido.";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await register(formatName(name), email, password);
      setErrorRegister("");
      navigate("/");
    } catch (error) {
      setErrorRegister("Error en el registro: " + (error.response?.data?.message || "Inténtalo de nuevo."));
    }
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="bg-base-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          
          {/* Sección del formulario */}
          <div className="w-full md:w-1/2">
            <div className="bg-base-100 p-6 md:p-8 rounded-lg shadow-lg">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)} // ✅ Permite enviar con Enter
              >
                <div>
                  <label className="block font-medium">Nombre</label>
                  <input
                    type="text"
                    className="input input-bordered w-full mt-1"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-medium">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full mt-1"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-medium">Contraseña</label>
                  <input
                    type="password"
                    className="input input-bordered w-full mt-1"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block font-medium">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="input input-bordered w-full mt-1"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <p className="text-sm">
                  ¿Ya tienes cuenta?{" "}
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Inicia sesión aquí
                  </Link>
                </p>

                {errorRegister && <p className="alert alert-error text-center mt-2">{errorRegister}</p>}

                <button className="btn btn-warning btn-soft w-full mt-2" type="submit">
                  Registrarse
                </button>
              </form>
            </div>
          </div>

          {/* Sección de texto */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">¡Únete a la diversión!</h1>
            <p className="py-4 text-lg">
              Regístrate para desafiar a otros jugadores, aprender nuevas habilidades
              y alcanzar la cima de nuestra tabla de clasificación.
            </p>
            <p className="text-lg font-semibold">¡Juega y aprende al mismo tiempo!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
