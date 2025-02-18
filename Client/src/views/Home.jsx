import QuestionCard from "../components/Game/QuestionCard";
import { useAuth } from "../context/AuthContext";
import { useGame } from "../context/GameContext";


export default function Home() {
  
  const { user } = useAuth();
  const { mockQuestion, handleAnswer, currentStep } = useGame();
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
    null
    }
    
      </div>
    </div>
  )
}
