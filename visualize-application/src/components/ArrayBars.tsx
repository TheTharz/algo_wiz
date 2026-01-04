import type { JSX } from "react";
import { useArray } from "../hooks/useArray";

const BAR_WIDTH = 10;

export default function ArrayBars():JSX.Element {
  const {array,generateNewArray} = useArray();
  
  return (
    <>
      <div className="array-container">
        {
          array.map((value,index)=>(
            <div key={index} style={{height:`${value}px`,width:`${BAR_WIDTH}px`}} className="bar"/>
          ))
        }
      </div>

      <button onClick={generateNewArray}>
        Generate
      </button>
    </>
  )
}