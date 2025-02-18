/* eslint-disable react/prop-types */
export default function Timer({timeLeft}) {
    let colorChange = function () {
        if(timeLeft < 10) {
            return "text-red-500";
        } else if (timeLeft < 20) {
            return "text-error";
        } else if (timeLeft < 30) {
            return "text-warning";
        }
        else if (timeLeft < 45) {
            return "text-success";
        } else {
            return "text-green-500";
        }
    };
  return (
    <span className="countdown font-mono text-5xl p-2">   
    <span style={{ "--value": timeLeft }} className={`${colorChange()}`}>
      {timeLeft}
    </span>
  </span>
  )
}
