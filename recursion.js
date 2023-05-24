// Recursive sum function
const sum = (arr) => {

  if (arr.length) {
    return arr.shift() + sum(arr)
  } else {
    return 0
  }
}

// console.log(
//   sum([2,4,6])
// )