import type { SortStep } from './types';

export function bubbleSort(array:number[]):number[]{
  const arr = [...array];
  const n = arr.length;

  for (let i=0;i<n-1;i++){
    let isSwapped = false;
    
    for (let j=0;j<n-i-1;j++){
      if(arr[j]>arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        isSwapped = true;
      }
    }

    if(!isSwapped){
      break;
    }
  }

  return arr;
}

export function* bubbleSortVisualize(array:number[]): Generator<SortStep> {
  const arr = [...array];
  const n = arr.length;

  for(let i=0;i<n;i++){
    let isSwapped = false;

    for(let j=0;j<n-i;j++){

      yield {
        array:[...arr],
        comparing:[j,j+1],
        swapped:[]
      };

      if(arr[j]>arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        isSwapped = true;

        yield {
          array:[...arr],
          comparing: [],
          swapped:[j,j+1]
        };
      }

    }

    if(!isSwapped){
      break;
    }
  }

  yield {
    array:[...arr],
    comparing:[],
    swapped:[]
  }
}