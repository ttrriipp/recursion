function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      const newArr = [arr[1], arr[0]];
      return newArr;
    }
    return arr;
  }

  // split the array
  const firstHalf = Math.ceil(arr.length / 2);
  const secondHalf = arr.length - firstHalf;

  const firstArr = arr.slice(0, firstHalf);
  const secondArr = arr.slice(secondHalf);

  const fArr = mergeSort(firstArr);
  const sArr = mergeSort(secondArr);
  const newArr = [];

  for (let i = 0, f = 0, s = 0; i < firstHalf + secondHalf; i++) {
    if (sArr[s] != null) {
      if (fArr[f] < sArr[s]) {
        newArr.push(fArr[f]);
        f++;
      } else {
        newArr.push(sArr[s]);
        s++;
      }
    } else {
      newArr.push(fArr[f]);
      f++;
    }
  }

  return newArr;
}

// mergeSort([3, 2, 1 , 13, 8, 5, 0, 1]) => [0, 1, 1, 2, 3, 5, 8, 13];
// mergeSort([105, 79, 100, 110]) => [79, 100, 105, 110];
// mergeSort([]) => []
// mergeSort([1]) => [1]
// mergeSort([2, 1]) => [1, 2]
// mergeSort([2, 3, 1]) => [1, 2, 3]
// mergeSort([2, 3, 1, 4]) => [1, 2, 3, 4]

console.log(mergeSort([2, 3, 1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([]));
console.log(mergeSort([1]));
