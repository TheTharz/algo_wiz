export function bubbleSort(array:number[]):number[]{
  const arr = [...array];
  const n = arr.length;

  for (let i=0;i<n;i++){
    for (let j=0;j<n-i;j++){
      let isSwapped = false;
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