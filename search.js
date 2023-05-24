/*
  Binary search
*/
const binarySearch = (arr, searchValue) => {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor(
    (right - left) / 2
  )

  while (arr[middle] !== searchValue && middle !== right) {
    const middleValue = arr[middle]

    if (middleValue > searchValue) {
      right = middle - 1
    } else {
      left = middle + 1
    }

    middle = Math.floor(
      (right + left) / 2
    )
  }

  return (arr[middle] === searchValue) ? middle : -1
}

// console.log(
//   binarySearch([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11], 6)
// )
// console.log(
//   binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6)
// )
