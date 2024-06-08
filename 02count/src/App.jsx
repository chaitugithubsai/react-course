import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  // let count = 5;
  

  const addValue = () => {
    if (count== 20){
      setCount(count = 20)
    }
    else{
      setCount(count+1)
    }
      
    }
    
    const removeValue = () => {
      if (count > 0){
        setCount(count - 1)
      }
      else{
        setCount(count= 0)
      }
     
    }

    // const addValue =()=>{
    //   setCount(count+1)
    // }

    // count removeValue =()=>{
    //   setCount(count-1)
    // }

  return (
    <>
      <h1> chaitu count react pro </h1>
      <h2>counter value {count}</h2>

      

      <button onClick={addValue}> add value{count}</button>
      <br />
      <button onClick={removeValue}> remove value{count}</button>
      
    </>
  );
}

export default App
