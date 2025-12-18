let arr = [1,5,4,8,7]

const bubbleSort = (arr) => {

  let arrLength = arr.length

  for (let i =0 ; i < arrLength ; i++){
    let isSwapped = false

    for (let j = 0 ; j < arrLength -i- 1 ; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        isSwapped = true
      }
    }

    if (!isSwapped){
      break
    }
  }
}

bubbleSort(arr);

console.log(arr);