let arr = [1,5,4,8,7]

const selectionSort = (arr) => {
  let n = arr.length

  for (let i = 0 ;i<n;i++){
    let min = i

    for (let j=i+1;j<n;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
}

selectionSort(arr);

console.log(arr);