import { useState, useCallback,useEffect,useRef } from "react";


function App() {
  const [length, setLenght] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");
  const [clicktext,setClickText] = useState("Copy");

  //useref hook
  const passRef = useRef(null);


  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += " !@#$%^&*-_+=[]{}~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllowed, charAllowed, setPass]);

  const copyPassToClip = useCallback(()=>{

    if (pass) {
      passRef.current?.select();
      passRef.current?.setSelectionRange(0,999); //select range(from where to where)

      window.navigator.clipboard.writeText(pass);
      textChange(); // Call textChange after copying
    }

  },[pass])

  useEffect(()=>{
    passwordGenrator();
  },[length, numAllowed, charAllowed,passwordGenrator]);

  const textChange = ()=>{
    setClickText("Copied");

    setTimeout(()=> setClickText("Copy"),1000);
  };

  return (
    <>
      
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-800">
      <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
           type="text"
           value={pass}
           className="outline-none w-full py-1 px-3"
           placeholder="password"
           readOnly
           ref={passRef}
           />

          <button
          onClick={copyPassToClip}
          className="outline-none w-20 bg-blue-700 text-white px-3 py-2 shrink-0 hover:bg-sky-500 active:bg-red-600 transition ease-in-out "
          >{clicktext}</button>
          
          </div>

          <div className="flex justify-evenly text-sm gap-x-2">

            <div className="flex  items-center w-60 gap-x-1">
              <input 
                
                type="range"
                min={6} 
                max={100}
                value={length}
                className="cursor-pointer "
                
                onChange={(e)=>{setLenght(e.target.value)}}
              />
                <label>Length:{length}</label>

            </div>

              <div className="flex items-center gap-x-1 ">
             <input 
                className="cursor-pointer"
                type="checkbox" 
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumAllowed((prev)=>!prev);
                }} 
             />
             <label htmlFor="numberInput">Numbers</label>
              </div>

              <div className="flex items-center gap-x-1 ">
             <input 
                className="cursor-pointer"
                type="checkbox" 
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={()=>{
                  setCharAllowed((prev)=> !prev )
                  
                }} 
             />
             <label htmlFor="characterInput">Character</label>
              </div>

          </div>

      </div>
    </>
  );
}

export default App;
