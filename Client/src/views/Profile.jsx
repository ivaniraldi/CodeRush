import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth(); // Obtiene los datos del usuario desde el contexto

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Cargando perfil...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-full p-4 md:p-8 bg-base-100">
      <div className="bg-base-200 w-full max-w-3xl rounded-lg shadow-lg p-6 md:p-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">
              Perfil de <span className="text-info">{user.name}</span>
            </h1>
            <p className="text-lg text-gray-600">{user.email}</p>
          </div>
          
          {/* Botón flotante en móviles */}
          <button className="btn btn-square btn-warning absolute top-2 right-2 md:static">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1.5em]">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </button>
        </div>

        {/* Sección de estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-base-100 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold text-success">{user.total_wins}</p>
            <p className="text-sm text-gray-500">Victorias</p>
          </div>
          <div className="p-4 bg-base-100 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold text-error">{user.total_losses}</p>
            <p className="text-sm text-gray-500">Derrotas</p>
          </div>
          <div className="p-4 bg-base-100 rounded-lg shadow-md text-center col-span-2 sm:col-span-1">
            <p className="text-2xl font-bold text-primary">{user.total_points}</p>
            <p className="text-sm text-gray-500">Puntos Totales</p>
          </div>
        </div>

        {/* Estadísticas avanzadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="stat bg-base-100 p-4 rounded-lg shadow-md">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Tiempo de reacción</div>
            <div className="stat-value text-primary">{user.average_time}s</div>
          </div>

          <div className="stat bg-base-100 p-4 rounded-lg shadow-md">
            <div className="stat-figure text-info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="stat-title">Respuestas correctas</div>
            <div className="stat-value text-info">{user.correct_answers}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
