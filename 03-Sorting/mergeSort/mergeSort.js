function split(wholeArray) {
  let cant = wholeArray.length;
  let half = Math.floor(cant / 2);
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);
  return [firstHalf, secondHalf];
}
console.log(split([15, 27, 84, 94, 54, 66, 7, 18]));

function merge(arr1, arr2) {
  let result = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] < arr2[i2] || !arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
  }

  return result;
}
console.log(merge([15, 27, 84, 94], [54, 66, 7, 18]));

function mergeSort(arr) {
  if (arr.length > 1) {
    let [firstHalf, secondHalf] = split(arr);
    let firstOrder = mergeSort(firstHalf);
    let secontOder = mergeSort(secondHalf);
    arr = merge(firstOrder, secontOder);
  }
  return arr;
}
console.log(mergeSort([15, 27, 84, 94, 54, 66, 7, 18]));
