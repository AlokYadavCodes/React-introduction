import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [copyMsg,setCopyMsg] = useState("Copy to Clipboard")
  const inputRef=useRef(null)

  useEffect(() => {
    passwordGenerator();
  }, [includeNumbers, includeCharacters, length]);

  function handleIncludeNumbers(e) {
    e.target.checked ? setIncludeNumbers(true) : setIncludeNumbers(false);
  }
  function handleIncludeCharacters(e) {
    e.target.checked ? setIncludeCharacters(true) : setIncludeCharacters(false);
  }

  const passwordGenerator= useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) str += "0123456789";
    if (includeCharacters) str += "!@#$%^&*()_{}[]";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  },[includeNumbers, includeCharacters,length])  // empty array dependency, means function is created once and remain the same throughout the component's lifecycle
  
  const copyToClipboard = useCallback(()=> {

    inputRef.current.select()

    try{
      navigator.clipboard.writeText(password)
      setCopyMsg("Copied!")
    }
    catch(err){
      setCopyMsg("Copy manually")
    }

    setTimeout(() => {
      setCopyMsg("Copy to Clipboard")
    }, 2000);
  },[password])

  function handleMouseLeave(){
    if(copyMsg==='Copied!'){
      setCopyMsg('Copy to Clipboard')
    }
  }
  return (
    <>
      <div className="container">
        <div className="display-container">
          <input ref={inputRef} type="text" name="" id="display" value={password} readOnly />
          <div id="copy-btn-container">
            <button id="copy-btn" onClick={copyToClipboard} onMouseLeave={handleMouseLeave}>
              Copy
            </button>
            <span id="copy-btn-msg">{copyMsg}</span>
          </div>
        </div>
        <div className="controls">
          <div className="length-container">
            <input
              type="range"
              name=""
              id="length"
              min="8"
              max="30"
              value={length}
              onInput={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="length">Length({length})</label>
          </div>

          <div className="numbers-container">
            <input
              type="checkbox"
              name=""
              id="numbers"
              onChange={handleIncludeNumbers}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="characters-container">
            <input
              type="checkbox"
              name=""
              id="characters"
              onChange={handleIncludeCharacters}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
