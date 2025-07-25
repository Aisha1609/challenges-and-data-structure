function MostFrequentNumber(arr) {
  let counts = {};
  let maxCount = 0;
  let mostFrequent = arr[0];

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;

    if (counts[num] > maxCount || 
       (counts[num] === maxCount && arr.indexOf(num) < arr.indexOf(mostFrequent))) {
      maxCount = counts[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
}
// Example:
console.log(MostFrequentNumber([1,1,2,2,3,3,3,1,5,5,6,7,8,2,1,1])); // 1