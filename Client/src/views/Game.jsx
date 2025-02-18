import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import QuestionCard from "../components/Game/QuestionCard";

export default function Game() {
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
    const { user } = useAuth();
  return (
    <div className="h-full flex justify-center items-center">
    <div className="bg-base-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-12">
    

    {user? 
    <QuestionCard
    question={mockQuestion} 
    totalQuestions={10} 
    currentStep={currentStep} 
    onAnswer={handleAnswer}
  />:
  "inicia sesion"
  }
  
    </div>
  </div>
  )
}
