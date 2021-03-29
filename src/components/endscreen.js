import react from "react";
function endscreen({ score, setscore, setgameState, name, setname }) {
  function restartquiz() {
    setgameState("menu");
    setscore(0);
    setname("");
  }
  return (
    <div className="endscreen">
      <h1>
        THANK YOU! <br /> <span style={{ color: "maroon" }}>{name}</span> <br />
        SCORE: {score} Point(s).
      </h1>
      <div className="restart-button">
        <button onClick={restartquiz}>RESTART</button>
      </div>
    </div>
  );
}
export default endscreen;
