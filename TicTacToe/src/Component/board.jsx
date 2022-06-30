import { Tic } from "./tic.jsx";
import { useState, useEffect } from "react";
import { Button } from "./button.jsx";
import { Turn } from "./turn.jsx";

function Board({ player1Name, startagain, player2Name }) {
  let arr = [
    {
      id: 0,
      innertext: "",
      status: false
    },
    {
      id: 1,
      innertext: "",
      status: false
    },
    {
      id: 2,
      innertext: "",
      status: false
    },
    {
      id: 3,
      innertext: "",
      status: false
    },
    {
      id: 4,
      innertext: "",
      status: false
    },
    {
      id: 5,
      innertext: "",
      status: false
    },
    {
      id: 6,
      innertext: "",
      status: false
    },
    {
      id: 7,
      innertext: "",
      status: false
    },
    {
      id: 8,
      innertext: "",
      status: false
    }
  ];

  let [text, setext] = useState(arr);

  let [winner, setwinner] = useState("");

  let [winboolean, setwinboolean] = useState(false);

  let [innertex, setinnertex] = useState(false);

  let [decidewin, setDecideWin] = useState(false);

  let [isPlay, setIsPlay] = useState(false);

  let [count, setcount] = useState(10);

  let handlewinner = (text) => {
    let p = 0;

    if (
      text[0].innertext === "X" &&
      text[1].innertext === "X" &&
      text[2].innertext === "X"
    ) {
      p = 1;
      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[0].innertext === "O" &&
      text[1].innertext === "O" &&
      text[2].innertext === "O"
    ) {
      p = 1;
      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[2].innertext === "O" &&
      text[5].innertext === "O" &&
      text[8].innertext === "O"
    ) {
      p = 1;
      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[2].innertext === "X" &&
      text[5].innertext === "X" &&
      text[8].innertext === "X"
    ) {
      p = 1;
      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[6].innertext === "X" &&
      text[7].innertext === "X" &&
      text[8].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[6].innertext === "O" &&
      text[7].innertext === "O" &&
      text[8].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[3].innertext === "O" &&
      text[4].innertext === "O" &&
      text[5].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[3].innertext === "X" &&
      text[4].innertext === "X" &&
      text[5].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[1].innertext === "X" &&
      text[4].innertext === "X" &&
      text[7].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[1].innertext === "O" &&
      text[4].innertext === "O" &&
      text[7].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[0].innertext === "O" &&
      text[3].innertext === "O" &&
      text[6].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[0].innertext === "X" &&
      text[3].innertext === "X" &&
      text[6].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[0].innertext === "X" &&
      text[4].innertext === "X" &&
      text[8].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }
    if (
      text[0].innertext === "O" &&
      text[4].innertext === "O" &&
      text[8].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[2].innertext === "O" &&
      text[4].innertext === "O" &&
      text[6].innertext === "O"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("O");
      mainhandlewinner("O");
      setTimeout(() => {
        alert("O won the game");
        handlereset();
      }, 300);
    }
    if (
      text[2].innertext === "X" &&
      text[4].innertext === "X" &&
      text[6].innertext === "X"
    ) {
      p = 1;

      setwinboolean(true);
      setwinner("X");
      mainhandlewinner("X");
      setTimeout(() => {
        alert("X won the game");
        handlereset();
      }, 300);
    }

    if (
      p !== 1 &&
      text[0].innertext !== "" &&
      text[1].innertext !== "" &&
      text[2].innertext !== "" &&
      text[3].innertext !== "" &&
      text[4].innertext !== "" &&
      text[5].innertext !== "" &&
      text[6].innertext !== "" &&
      text[7].innertext !== "" &&
      text[8].innertext !== ""
    ) {
      alert("Its a Draw");
      setwinboolean(false);
      setwinner("");
      mainhandlewinner("");
      handlereset();
    }
  };

  let mainhandlewinner = (val) => {
    if (winboolean === true && val === "X") {
      setDecideWin(false);
    }
    if (winboolean === true && val === "O") {
      setDecideWin(true);
    }
  };

  let handletext = (i) => {
    if (innertex === false) {
      setinnertex(true);
    } else {
      setinnertex(false);
    }

    setIsPlay(true);

    var updated = text.map((el) => {
      if (el.id === i && el.innertext === "" && innertex === false) {
        return {
          ...el,
          innertext: "X",
          status: true
        };
      } else if (el.id === i && el.innertext === "" && innertex === true) {
        return {
          ...el,
          innertext: "O",
          status: true
        };
      } else {
        return {
          ...el
        };
      }
    });
    setext(updated);

    handlewinner(updated);
  };

  let handlereset = () => {
    if (innertex === true) {
      setinnertex(false);
    }
    // else{
    // }
    setcount(10);

    var updated = text.map((el) => {
      return {
        ...el,
        innertext: "",
        status: false
      };
    });
    setext(updated);
  };

  useEffect(() => {
    let id = setInterval(() => {
      setcount((prev) => {
        if (prev === 0) {
          if (innertex === false) {
            setinnertex(true);
          } else {
            setinnertex(false);
          }
          clearInterval(id);
          return 10;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    const cleanup = () => {
      console.log("cleaned up");
      setcount(10);
      return clearInterval(id);
    };

    return cleanup;
  }, [innertex]);

  return (
    <div>
      <div
        style={{
          border: "1px solid",
          width: "155.5px",
          height: "155.5px",
          display: "grid",
          padding: "0px",
          gridTemplateColumns: "repeat(3,1fr)",
          gridTemplateRows: "repeat(3,1fr)"
        }}
      >
        {/* marginLeft:"10px", */}
        {text.map((el) => (
          <Tic handletext={handletext} data={el} />
        ))}
      </div>
      <Button handlereset={handlereset} />
      <Turn innertex={innertex} />
      <div style={{ position: "relative" }}>
        <button
          style={{
            left: "20px",
            cursor: "pointer",
            position: "absolute",
            backgroundColor: "crimson",
            color: "white",
            top: "40px"
          }}
          onClick={startagain}
        >
          Start New Game
          {/* <>{player2Name}</> : <>{player1Name}</> */}
        </button>
      </div>
      {/* {isPlay && <h2 style={!innertex ? { color: "green" } : { color: "red" }}>
        {!innertex ? "O" : "X"}'s turns comes in {count}s
      </h2>} */}
      <div style={{ position: "relative" }}>
        <h2
          style={
            !innertex
              ? { color: "green", position: "absolute", top: "120px" }
              : { color: "red", position: "absolute", top: "120px" }
          }
        >
          {!innertex ? <>{player2Name}</> : <>{player1Name}</>}'s turn will come
          in{" "}
          <span style={innertex ? { color: "green" } : { color: "red" }}>
            {count}
            <span style={{ fontSize: "18px" }}>s</span>
          </span>
        </h2>
      </div>
      <h2
        style={{
          fontSize: "30px",
          color: "blue",
          position: "absolute",
          left: "8px",
          top: "190px"
        }}
      >
        {winboolean ? (
          decidewin ? (
            <div style={{ display: "flex" }}>
              <p>Last Game Winner : </p>{" "}
              <p>
                {player2Name} [{winner}]
              </p>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              {" "}
              <p>Last Game Winner :&nbsp; </p>{" "}
              <p>
                {" "}
                {player1Name} [{winner}]
              </p>{" "}
            </div>
          )
        ) : (
          <></>
        )}
      </h2>
    </div>
  );
}

export { Board };
