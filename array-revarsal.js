function ArrayReversal(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example:
console.log(ArrayReversal([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
