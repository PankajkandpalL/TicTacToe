const x_style = {
  border: "1px solid",
  height: "50px",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "red"
};
const o_style = {
  border: "1px solid",
  height: "50px",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "green"
};

const n_style = {
  border: "1px solid",
  height: "50px",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: ""
};

function Tic({ data, handletext }) {
  // console.log(data)

  return (
    <div
      key={data.id}
      // onClick={handlewinner}
      onClick={
        data.status
          ? data.innertext === "X"
            ? () => alert(`Already played, Cannot change from 'X' to 'O' `)
            : () => alert(`Already played, Cannot Change from 'O' to 'X' `)
          : () => handletext(data.id)
      }
      style={
        data.innertext === ""
          ? n_style
          : data.innertext === "X"
          ? x_style
          : o_style
      }
    >
      {data.innertext}
    </div>
  );
}

export { Tic };
