import type { JSX } from "react";
import { useArray } from "../hooks/useArray";

const BAR_WIDTH = 10;
interface ArrayBarProps {
  array: number[],
  comparing?: number[],
  swapped?: number[]
}

export default function ArrayBars({
  array,
  comparing = [],
  swapped = []
}:ArrayBarProps):JSX.Element {
  const maxValue = Math.max(...array);
  
  return (
    <>
      <div className="array-container">
        {
          array.map((value,index)=>{
            let className = 'bar';
            if (comparing.includes(index)){
              className += ' comparing';
            }
            if (swapped.includes(index)){
              className += ' swapped';
            }
            return (
              <div 
                key={index}
                className={className}
                style={{
                  height: `${value/maxValue*100}%`,
                  width: `${BAR_WIDTH}px`
                }}
              />
            )
          })
        }
      </div>
    </>
  );
}