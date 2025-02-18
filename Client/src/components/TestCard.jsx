/* eslint-disable react/prop-types */

export default function TestCard({ test, color }) {
  const { name, category, number_of_questions } = test;
  return (
    <div className="card w-full h-50 bg-base-100 card-sm shadow-sm mb-3">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
        <p>{category}</p>
        <p >
          <span className={`badge ${color.badge}`}>
              {number_of_questions} Preguntas
          </span>
            </p>
        <div className=" flex justify-end card-actions">
          <button
            className={`btn btn-soft ${color.button} border-2 border-base-300 hover:border-base-100`}
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}
