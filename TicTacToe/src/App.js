import "./styles.css";
import { Board } from "./Component/board.jsx";
import { useState } from "react";
import { Input } from "./Component/input.jsx";
import { Head } from "./Component/head.jsx";
import { Rule } from "./Component/rules.jsx";

export default function App() {
  let [boolean, setBoolean] = useState(false);

  let [pone, setPOne] = useState("");

  let [pobool, setpoBool] = useState(false);

  let [psec, setPSec] = useState("");

  let [psbool, setpsbool] = useState(false);

  let [isAgree, setIsAgree] = useState(false);

  let handlepone = (e) => {
    setPOne(e.target.value);
    if (pone.length > 1) {
      setpoBool(true);
    } else {
      setpoBool(false);
    }
  };

  let handlepsec = (e) => {
    setPSec(e.target.value);
    if (psec.length > 1) {
      setpsbool(true);
    } else {
      setpsbool(false);
    }
  };

  let letsplay = () => {
    if (psbool && pobool) {
      setBoolean(true);
    } else {
      alert("Please fill up the details");
    }
  };

  let startagain = () => {
    setBoolean(false);
    setPOne("");
    setPSec("");
    setpoBool(false);
    setpsbool(false);
  };

  let handlerules = () => {
    setIsAgree(true);
  };

  return (
    <div className="App">
      {!isAgree ? (
        <Rule handlerules={handlerules} />
      ) : !boolean ? (
        <>
          <Head />
          <Input
            psec={psec}
            pone={pone}
            handlepsec={handlepsec}
            handlepone={handlepone}
            letsplay={letsplay}
          />
        </>
      ) : (
        <Board startagain={startagain} player1Name={pone} player2Name={psec} />
      )}
    </div>
  );
}

// -----------------------
// =----------------=====
