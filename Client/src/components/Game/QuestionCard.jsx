/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Timer from "./Timer";
import Answer from "./Answer";

const QuestionCard = ({ question, totalQuestions, currentStep, onAnswer }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return(alert("Tiempo agotado"));
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Steps */}
      <ul className="steps w-full">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <li
            key={index}
            className={`step ${index < currentStep ? "step-primary" : ""}`}
          >
        
          </li>
        ))}
      </ul>

      {/* Tarjeta de pregunta */}
      <div className="card bg-base-100 w-96 shadow-sm">
        {question.image_url ? <figure>
          <img
            src={question.image_url || "https://via.placeholder.com/300"}
            alt="Pregunta"
          />
        </figure>: null}
        <div className="card-body">
          {/* Temporizador */}
         

          <h2 className="card-title text-center">{question.question_text}</h2>

          {/* Opciones de respuesta */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {question.answers.map((answer, index) => (
              <Answer 
                key={index}
                answer={answer}
                question={question}
                onAnswer={onAnswer}
                check={check}
                handleCheck={handleCheck}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Timer timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
