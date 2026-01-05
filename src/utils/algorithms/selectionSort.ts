import type { SortStep } from './types';

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

    for(let j=i+1;j<n;j++){

      yield {
        array:[...arr],
        comparing:[minIndex,j],
        swapped:[],
        metadata: {
          currentPass: i + 1,
          totalPasses: n - 1,
          minIndex: minIndex,
          sortedUpTo: i,
          message: `Finding minimum in range [${i}, ${n-1}]. Current min at index ${minIndex}`
        }
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
        swapped:[i,minIndex],
        metadata: {
          currentPass: i + 1,
          totalPasses: n - 1,
          minIndex: minIndex,
          sortedUpTo: i + 1,
          message: `Swapped minimum element from index ${minIndex} to position ${i}`
        }
      };
    }
  }

  yield {
    array:[...arr],
    comparing:[],
    swapped:[],
    metadata: {
      message: 'Sorting complete!'
    }
  };

}