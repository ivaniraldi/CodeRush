/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/img/logo.png";
import { IoLogOut } from "react-icons/io5";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="violeta-oscuro border-b-4 border-white text-white px-6 py-3 shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 🔹 Sección Izquierda */}
        <div className="hidden md:flex space-x-3 w-1/3">
          <NavItem to="/" text="Inicio" color="naranja" />
          <NavItem to="/tests" text="Tests" color="celeste" />
          <NavItem to="/highscores" text="Puntajes" color="rosa" />
        </div>

        {/* 🎨 Logo Centrado */}
        <div className="w-1/3 flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo de CodeRush"
              className="md:w-56 w-48 h-auto"
            />
          </Link>
        </div>

        {/* 🔹 Sección Derecha */}
        <div className="hidden md:flex space-x-3 w-1/3 justify-end">
          {user ? (
            <>
              <NavItem to="/profile" text="Perfil" color="naranja" />
              {user.role === "admin" && (
                <NavItem to="/admin" text="Admin" color="rosa" />
              )}
              <button
                className={`px-4 py-2 font-semibold rounded-lg text-center bg-red-300 borde-fuente gris-claro-text borde-fuente hover:bg-red-500 hover:scale-110 border-3 border-white transition-transform transform shadow-md`}
                onClick={() => handleLogout()}
              >
                {isOpen ? (
                  <IoLogOut className="text-red-400" size={28} />
                ) : (
                  <IoLogOut className="text-red-400" size={28} />
                )}
              </button>
            </>
          ) : (
            <>
              <NavItem to="/login" text="Login" color="naranja" />
              <NavItem to="/register" text="Registro" color="celeste" />
            </>
          )}
        </div>

        {/* 📱 Menú Móvil */}
        <button
          className="md:hidden naranja-text transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* 📱 Menú desplegable en móviles */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col mt-4 space-y-2 violeta-oscuro p-4 rounded-lg ">
          <NavItem to="/" text="Inicio" color={"naranja"} mobile />
          <NavItem to="/tests" text="Tests" mobile color={"celeste"} />
          <NavItem to="/highscores" text="Puntajes" mobile color={"rosa"} />
          <hr className="border border-gray-400 mt-2" />
          <br />
          {user ? (
            <>
              <NavItem to="/profile" text="Perfil" mobile color={"naranja"} />

              {user.role === "admin" && (
                <NavItem to="/admin" text="Admin" mobile color={"celeste"} />
              )}
              <button
                className={`px-4 py-2 font-semibold rounded-lg text-center bg-red-300 borde-fuente  gris-claro-text borde-fuente hover:bg-red-500 hover:scale-110 border-3 border-red-400 transition-transform transform shadow-md`} 
                onClick={() => handleLogout()}
              >
                {isOpen ? (
                  <span>Cerrar Sesion</span>
                ) : (
                  <span>Cerrar Sesion</span>
                )}
              </button>
            </>
          ) : (
            <>
              <NavItem to="/login" text="Login" mobile />
              <NavItem to="/register" text="Registro" mobile />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

// 🎨 Componente de botón de navegación
function NavItem({ to, text, color, mobile }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 font-semibold rounded-lg 
      ${
        mobile
          ? `text-center  ${color} borde-fuente`
          : `gris-claro-text borde-fuente hover:bg-white hover:scale-110 border-3  ${color} border-white transition-transform transform shadow-md`
      }`}
    >
      {text}
    </Link>
  );
}
