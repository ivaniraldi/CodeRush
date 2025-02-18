/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const mockQuestion = {
    id: 1,
    question_text: "¿Cuál es el resultado de 2 + 2?",
    image_url: null, // Imagen de prueba
    correct_answer: "4",
    answers: ["3", "4", "5", "6"], // Una correcta y tres incorrectas
  };

  const handleAnswer = (answer) => {
    console.log(answer);
    const correct = answer === mockQuestion.correct_answer;

    alert(correct ? "Correcto" : "Incorrecto");
    setCurrentStep(currentStep + 1);
  };

  return (
    <GameContext.Provider value={{ game, setGame, currentStep, setCurrentStep, mockQuestion, handleAnswer }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);