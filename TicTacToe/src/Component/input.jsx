function Input({ handlepone, handlepsec, letsplay, pone, psec }) {
  return (
    <>
      <div>
        <p>Player 1 UserName - X</p>
        <input onInput={handlepone} value={pone} type="text" />
        &nbsp;
      </div>
      <div>
        <p>Player 2 UserName - O</p>
        <input onInput={handlepsec} value={psec} type="text" />
        &nbsp;
      </div>
      <br />
      <button onClick={letsplay}>Start</button>
    </>
  );
}

export { Input };
