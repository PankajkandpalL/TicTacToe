const mainstyle = {
  border: "1px solid black",
  borderRadius: "5px",
  height: "510px",
  width: "800px",
  padding: "10px 30px",
  backgroundColor: "black",
  color: "white",
  margin: "auto"
};

function Rule({ handlerules }) {
  return (
    <>
      <h1 style={{ color: "crimson" }}>Tic-Tac-Toe</h1>
      <h3 style={{ color: "cyan" }}>( By PANKAJ KANDPAL )</h3>
      <h5>RuleBook</h5>
      <div style={mainstyle}>
        <h1 style={{ marginBottom: "30px" }}>About</h1>
        <i>
          <p>
            Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil
            game for two players who take turns marking the spaces in a
            three-by-three grid with X or O. The player who succeeds in placing
            three of their marks in a horizontal, vertical, or diagonal row is
            the winner
          </p>
        </i>
        <div>
          <h1 style={{ color: "yellow", marginTop: "40px" }}>Rules</h1>
          <ul style={{ color: "yellowgreen", textAlign: "left" }}>
            <li style={{ marginTop: "20px" }}>
              There is a countdown of 10 seconds given for every player's
              chance. If a player didn't play under those 10 seconds then that
              player's chance will get skipped and the opponent will get a
              advantage of playing again or say opponent will be playing two
              times in a row.
            </li>
            <li style={{ marginTop: "20px" }}>
              There is a Reset button (provided in the game screen) which will
              reset only that particular part of your game.
            </li>
            <li style={{ marginTop: "20px" }}>
              There is a Start New Game button which will end the current
              existing game and a fresh new game with new players can be started
              again.
            </li>
            <li style={{ marginTop: "20px" }}>
              Click On Let's Play! and Get Started.
            </li>
          </ul>
        </div>
        <button
          onClick={handlerules}
          style={{
            backgroundColor: "red",
            padding: "0.5rem",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Lets Play!
        </button>
      </div>
    </>
  );
}

export { Rule };
