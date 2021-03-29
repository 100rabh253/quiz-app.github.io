import react from "react";
function Menu({ setgameState, setname }) {
  return (
    <div className="Menu-container">
      <label for="name">ENTER YOUR NAME:</label>
      <br />
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <br />
      <br />
      <br />
      <button onClick={() => setgameState("quiz")}>START QUIZ</button>
    </div>
  );
}
export default Menu;
