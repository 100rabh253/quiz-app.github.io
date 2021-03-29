import react, { useState } from "react";
import { Question } from "./Questionbank";
function Quiz({ score, setscore, setgameState }) {
  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  function nextQuestion() {
    if (Question[currQuestion].answer === optionChosen) {
      setscore(score + 1);
    }
    setcurrQuestion(currQuestion + 1);
  }
  function finishtest() {
    if (Question[currQuestion].answer === optionChosen) {
      setscore(score + 1);
    }
    setgameState("endScreen");
  }
  return (
    <div className="Quiz">
      <h1>{Question[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setoptionChosen("A")}>
          {Question[currQuestion].optionA}
        </button>
        <button onClick={() => setoptionChosen("B")}>
          {Question[currQuestion].optionB}
        </button>
        <button onClick={() => setoptionChosen("C")}>
          {Question[currQuestion].optionC}
        </button>
        <button onClick={() => setoptionChosen("D")}>
          {Question[currQuestion].optionD}
        </button>
      </div>
      <br />
      {currQuestion === Question.length - 1 ? (
        <button onClick={finishtest}>FINISH QUIZ</button>
      ) : (
        <button onClick={nextQuestion}>NEXT QUESTION</button>
      )}
    </div>
  );
}
export default Quiz;
