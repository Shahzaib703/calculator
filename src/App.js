import "./App.css";
import react, { useState } from "react";

function App() {
  const [currentAction, setCurrentAction] = useState("");
  const [privousAction, setPrivousAction] = useState("");

  const ClickHandle = (value) => {
    setCurrentAction(currentAction + value);
  };

  const ActionComplete = () => {
    try {
      setCurrentAction(eval(currentAction).toString());
      setPrivousAction(currentAction);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Wrong Input");
      }
    }
  };

  const ClearAll = () => {
    setCurrentAction("");
    setPrivousAction("");
  };

  const delLastNumber = () => {
    setCurrentAction(currentAction.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="mainContent">
        <div className="outputContainer">
          <div className="privous_data">{privousAction}</div>
          <div className="current_data">{currentAction}</div>
        </div>
        <button className="span-two" onClick={ClearAll}>
          AC
        </button>
        <button onClick={delLastNumber}>Del</button>
        <button
          onClick={() => {
            ClickHandle("/");
          }}
        >
          /
        </button>

        <button
          onClick={() => {
            ClickHandle("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            ClickHandle("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            ClickHandle("3");
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            ClickHandle("*");
          }}
        >
          *
        </button>

        <button
          onClick={() => {
            ClickHandle("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            ClickHandle("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            ClickHandle("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            ClickHandle("+");
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            ClickHandle("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            ClickHandle("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            ClickHandle("9");
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            ClickHandle("-");
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            ClickHandle(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            ClickHandle("0");
          }}
        >
          0
        </button>
        <button
          className="span-two"
          onClick={() => {
            ActionComplete();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
