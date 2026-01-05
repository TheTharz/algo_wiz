import { SortStep } from './types';

export function selectionSort(array:number[]):number[]{
  const arr = [...array];
  const n = arr.length;

  for(let i = 0;i<n-1;i++){
    let minIndex = i;

    for(let j=i+1;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j;
      }
    }

    if(minIndex!==i){
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

export function* selectionSortVisualize(array:number[]):Generator<SortStep>{
  const arr = [...array];
  const n = arr.length;

  for(let i=0;i<n-1;i++){
    let minIndex = i;

    for(let j=i;j<n;j++){

      yield {
        array:[...arr],
        comparing:[minIndex,j],
        swapped:[]
      };

      if(arr[j]<arr[minIndex]){
        minIndex=j;
      }
    }

    if(minIndex!==i){
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      yield {
        array:[...arr],
        comparing:[],
        swapped:[i,minIndex]
      };
    }
  }

  yield {
    array:[...arr],
    comparing:[],
    swapped:[]
  };

}