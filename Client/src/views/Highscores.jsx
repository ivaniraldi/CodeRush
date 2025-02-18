import highscoresImg from "../assets/img/highscores.png";
export default function Highscores() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] h-full">
        <div className="h-full flex bg-base-300 justify-center items-center mb-4 md:mb-0">
          <img
            src={highscoresImg}
            alt="Highscores"
            className="w-50 h-50 md:mb-0 md:w-100 md:h-100 rounded-2xl"
          />
        </div>
        <div className="bg-base-200 p-4 h-full grid gap-2 justify-between grid-rows-2[auto_1fr] grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <div>
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-success animate-ping text-cemn"></div>
              <div className="status status-success"></div>
            </div>
            <span>
              <span className="text-sm font-bold ml-2">
                Se están registrando nuevas puntuaciones.</span>
            </span>

            </div>
          </div>
          <div className=" h-full overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="table table-xs md:table-md">
                {/* head */}
                <thead className="text-center">
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Puntuación</th>
                    <th>Partidas jugadas</th>
                    <th>Puntuación media</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="text-center">
                    <th className="text-center">
                      <label className="text-2xl text-warning">1.</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 text-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Kimera</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-warning badge-sm text-nowrap font-bold">
                        666.999 puntos.
                      </span>
                    </td>
                    <td className="text-center font-bold text-lg text-warning">
                      15
                    </td>
                    <td className="text-center font-bold text-lg text-warning">
                      1890
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="text-center">
                    <th className="text-center">
                      <label className="text-2xl text-info">2.</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 text-info">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Sarah</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-info badge-sm text-nowrap font-bold">
                        596.499 puntos.
                      </span>
                    </td>
                    <td className="text-center font-bold text-lg text-info">
                      8
                    </td>
                    <td className="text-center font-bold text-lg text-info">
                      1570
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr className="text-center">
                    <th className="text-center">
                      <label className="text-2xl text-success">3.</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 text-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Ramon</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-success badge-sm text-nowrap font-bold">
                        468.779 puntos.
                      </span>
                    </td>
                    <td className="text-center font-bold text-lg text-success">
                      4
                    </td>
                    <td className="text-center font-bold text-lg text-success">
                      780
                    </td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-center">
                      <label className="text-2xl text-">4.</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 text-">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Ramon</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge- badge-sm text-nowrap font-bold">
                        468.779 puntos.
                      </span>
                    </td>
                    <td className="text-center font-bold text-lg text-">4</td>
                    <td className="text-center font-bold text-lg text-">780</td>
                  </tr>
                  <tr className="text-center">
                    <th className="text-center">
                      <label className="text-2xl text-">5.</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 text-">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Ramon</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge- badge-sm text-nowrap font-bold">
                        468.779 puntos.
                      </span>
                    </td>
                    <td className="text-center font-bold text-lg text-">4</td>
                    <td className="text-center font-bold text-lg text-">780</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
