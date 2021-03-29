import { useState } from "react";
import "./App.css";
import Mainmenu from "./components/menu";
import Quiz from "./components/quiz";
import EndScreen from "./components/endscreen";

function App() {
  const [gameState, setgameState] = useState("menu");
  const [score, setscore] = useState(0);
  const [name, setname] = useState("");
  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      {gameState === "menu" && (
        <Mainmenu setgameState={setgameState} setname={setname} />
      )}
      {gameState === "quiz" && (
        <Quiz score={score} setscore={setscore} setgameState={setgameState} />
      )}
      {gameState === "endScreen" && (
        <EndScreen
          score={score}
          setscore={setscore}
          setgameState={setgameState}
          name={name}
          setname={setname}
        />
      )}
    </div>
  );
}
export default App;
