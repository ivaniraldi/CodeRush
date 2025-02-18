/* eslint-disable react/prop-types */
export default function Answer({ answer, question, onAnswer, check, handleCheck }) {
  return (
    <label
                className="card bg-base-200 shadow-md cursor-pointer p-4 flex items-center gap-2"
                onClick={() => onAnswer(answer)}
              >
                <input
                  type="checkbox"
                  
                  className={check? `checkbox ${
                    answer === question.correct_answer
                      ? "checkbox-success"
                      : "checkbox-error"
                  }` : `checkbox`}

                  defaultChecked={false}
                  onClick={handleCheck}
                  
                />
                {answer}
              </label>
  )
}
