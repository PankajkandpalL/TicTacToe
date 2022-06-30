const style = {
  color: "crimson",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "yellow",
  position: "absolute",
  left: "60px",
  top: "170px",
  padding: "4px 10px",
  cursor: "pointer"
};

function Button({ handlereset }) {
  return (
    <button style={style} onClick={handlereset}>
      Reset
    </button>
  );
}

export { Button };
