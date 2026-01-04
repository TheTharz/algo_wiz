import { useEffect, useState } from "react";
import { randomArray } from "../utils/randomArray";

export function useArray(size:number=50){
  const [array,setArray] = useState<number[]>([]);

  const generateNewArray = ():void => {
    setArray(randomArray(size));
  }

  useEffect(()=>{
    generateNewArray();
  },[size])

  return {
    array,
    setArray,
    generateNewArray
  }
}