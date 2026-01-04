let arr = [1,5,4,8,7,2,3,6];

const partition = (arr,lb,ub) => {
  let pivot = arr[lb]

  let start = lb
  let end = ub

  while(start < end){
    while(arr[start] <= pivot){
      start++
    }
    while(arr[end] > pivot){
      end--
    }
    if(start < end){
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
    }
  }

  let temp = arr[lb]
  arr[lb] = arr[end]
  arr[end] = temp
  
  return end
}

const quickSort = (arr,lb,ub) => {
  if(lb < ub){
    let pivot = partition(arr,lb,ub)
    quickSort(arr,lb,pivot-1)
    quickSort(arr,pivot+1,ub)
  }
}

quickSort(arr,0,arr.length-1);

console.log(arr);