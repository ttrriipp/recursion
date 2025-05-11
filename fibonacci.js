// iteration
function fibs(n) {
  const arr = [0, 1];
  let first = 0;
  let second = 1;
  let val = 0;
  for (let i = 0; i < n - 2; i++) {
    val = first + second;
    first = second;
    second = val;
    arr.push(val);
  }
  return arr;
}

console.log(fibs(8));

// recursion
function fibsRec(n) {
  console.log('this was printed recursively');
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  const val = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(val);

  return arr;
}

console.log(fibsRec(8));

// yeah that was fun
