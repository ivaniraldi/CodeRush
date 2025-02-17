import Chat from "../components/Chat";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="h-full flex justify-center items-center">
      <div className="bg-base-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-12">
      {user ? <Chat user={user} /> : <div className="text-center">
        <h1 className="text-4xl font-bold">Bienvenido a CodeRush</h1>
        <p className="text-gray-500 mt-4">
          ¡Bienvenido a CodeRush, un chat de código abierto y gratuito! ¡Disfruta de una comunidad de programadores y desarrolladores de todo el mundo!
        </p>
        <p className="text-gray-500 mt-4">
          ¿Quieres comenzar a programar? ¡No te preocupes, CodeRush te ayudará a aprender lenguajes de programación y a mejorar tus habilidades!
        </p>
        <p className="text-gray-500 mt-4">
          ¿Tienes alguna pregunta o necesitas ayuda? ¡No dudes en preguntar! Estamos aquí para ayudarte.
        </p>
      </div>}
      </div>
    </div>
  )
}
