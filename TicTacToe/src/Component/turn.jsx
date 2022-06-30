function Turn({ innertex }) {
  return (
    <h2 style={{ position: "absolute", left: "200px", top: "-10px" }}>
      It's{" "}
      <h2 style={!innertex ? { color: "red" } : { color: "green" }}>
        {!innertex ? "X" : "O"}
      </h2>{" "}
      Turn{" "}
    </h2>
  );
}

export { Turn };
