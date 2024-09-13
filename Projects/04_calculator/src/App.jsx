import { evaluate } from "mathjs";
import Display from "./components/Dispaly";
import Buttons from "./components/Buttons";
import { useState, useSyncExternalStore } from "react";
import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];

  let [displayValue, setDisplayValue] = useState("");

  function handleButtonClick(e) {
    let newDisplayValue;

    // to prevent first char as .,*,/,
    if (displayValue === "" && [".", "*", "/"].includes(e.target.innerText)) {
      // console.log("a");
      return;
    }
    // to prevent . if the last char is not a number
    else if (
      !numbers.includes(Number(displayValue.slice(-1))) &&
      e.target.innerText === "."
    ) {
      // console.log("b");
      return;
    }
    // for clearing the display
    else if (e.target.innerText === "C") {
      // console.log("c");
      newDisplayValue = "";
    }
    // for back button
    else if (e.target.innerText === "backspace") {
      // console.log("d");

      newDisplayValue = displayValue.slice(0, -1);
    }
    // for replacing operator if last char is already operator
    else if (
      operators.includes(displayValue.slice(-1)) &&
      operators.includes(e.target.innerText)
    ) {
      // console.log("e");
      newDisplayValue = displayValue.slice(0, -1) + e.target.innerText;
    }
    // for preventing two times . in a single number [ex: 23.43.2 ]
    else if (e.target.innerText === ".") {
      for (let i = displayValue.length - 1; i >= 0; i--) {
        if (operators.includes(displayValue[i])) {
          // console.log("f");
          newDisplayValue = displayValue + ".";
          break;
        } else if (displayValue[i] === ".") {
          newDisplayValue = displayValue;
          // console.log("ff");
          break;
        } else if (i == 0) {
          newDisplayValue = displayValue + ".";
        }
      }
    }
    // for evaluation
    else if (e.target.innerText === "=") {
      if (displayValue === "") {
        return;
      } else if (operators.includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1);
      }
      try {
        newDisplayValue = String(evaluate(displayValue));
      } catch (error) {
        newDisplayValue="Error"
      }

    } else {
      // console.log("g");
      newDisplayValue = displayValue + e.target.innerText;
    }
    setDisplayValue(newDisplayValue);
  }

  return (
    <>
      <div className="calc-body">
        <Display displayValue={displayValue}></Display>
        <Buttons handleButtonClick={handleButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
