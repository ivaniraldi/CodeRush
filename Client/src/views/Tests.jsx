import { useEffect, useState } from "react";
import { useTests } from "../context/TestsContext";
import { useAuth } from "../context/AuthContext";
import TestCard from "../components/TestCard";

export default function TestsPage() {
  const { tests } = useTests();
  const { user } = useAuth();
  const [filteredTests, setFilteredTests] = useState([]);

  const colors = [
    { button: "btn-accent", badge: "badge-accent" },
    { button: "btn-success", badge: "badge-success" },
    { button: "btn-warning", badge: "badge-warning" },
    { button: "btn-error", badge: "badge-error" },
  ];

  const handleFilter = (category) => {
    if (!category) {
      setFilteredTests(tests);
    } else {
      setFilteredTests(tests.filter((test) => test.category === category));
    }
  };

  useEffect(() => {
    setFilteredTests(tests);
  }, [tests]);

  const categories = tests
    .map((test) => test.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] h-full">
      {/* Barra lateral izquierda fija */}
      <div className="bg-base-200 p-4 sticky top-0">
        <div className="flex justify-between border-b border-base-300 pb-2">
          <h2 className="menu-title">Categorias:</h2>
          
          {user && user.role === "admin" ? (
            <div className="flex">
              <button className="btn btn-sm btn-ghost">Public</button>
              <button className="btn btn-sm btn-ghost">Private</button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <ul className="menu bg-base-100 rounded-box w-full mt-3">
          <li
               
                className="btn btn-warning btn-sm btn-soft"
                onClick={() => handleFilter(false)}
              >
                Ver todos
              </li>
          {categories.map((category) => (
              <li
                key={category}
                className="btn btn-ghost"
                onClick={() => handleFilter(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>


      </div>

      {/* Contenido de la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] bg-base-200 gap-2 rounded-lg p-4 m-2 md:m-5">
        {filteredTests.map((test, index) => {
          const color = colors[index % colors.length]; // Cicla los colores en orden

          return (
            <div key={test.id} className="flex justify-between">
              <TestCard test={test} color={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
