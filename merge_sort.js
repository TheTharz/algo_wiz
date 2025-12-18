let arr = [1,5,4,8,7,2,3,6];

const merge = (arr, L, R, lb, n1, n2) => {
  let i = 0, j = 0;
  let k = lb;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

const mergeSort = (arr, lb, ub) => {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);

    mergeSort(arr, lb, mid);
    mergeSort(arr, mid + 1, ub);

    let L = arr.slice(lb, mid + 1);
    let R = arr.slice(mid + 1, ub + 1);

    merge(arr, L, R, lb, L.length, R.length);
  }
};

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
