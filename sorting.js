/*
  Sorting
*/
// Selection sort
const selectionSort = (arr) => {
  const arrayLength = arr.length

  if (arrayLength > 1) {

    for (let i = 0; i < arrayLength; i++) {
      const compareElement = arr[i]
      let elementToSwapValue = null
      let elementToSwapIndex = null
  
      for (let j = i + 1; j < arrayLength; j++) {
        const compareElement2Temp = arr[j]

        if (compareElement > compareElement2Temp) {

          if (!elementToSwapValue || elementToSwapValue > compareElement2Temp) {
            elementToSwapValue = compareElement2Temp
            elementToSwapIndex = j
          }

        }

      }

      if (elementToSwapIndex) {
        const elementToSwapTemp = arr[elementToSwapIndex]

        arr[i] = elementToSwapTemp
        arr[elementToSwapIndex] = compareElement
      }
  
    }

    return arr
  } else {
    return arr
  }
}

// console.log(
//   `Selection sort: ${selectionSort([4, 2, 7, 3, 7, 3, 6, 8, 5])}`
// )

// Insertion sort
const insertionSort = (arr) => {
  const arrSorted = []
  const startLength = arr.length

  for (let i = 0; i < startLength; i++) {
    let currentMinimalIndex = 0
    let currentMinimalValue = arr[currentMinimalIndex]

    for (let j = 1; j < arr.length; j++) {
      const currentElement = arr[j]

      if (currentElement < currentMinimalValue) {
        currentMinimalValue = currentElement
        currentMinimalIndex = j
      }

    }

    arrSorted.push(
      arr.splice(currentMinimalIndex, 1)
    )

  }

  return arrSorted
}

// console.log(
//   `Insertion sort: ${insertionSort([4, 2, 7, 3, 7, 3, 6, 8, 5])}`
// )

// Bubble sort
const bubbleSort = (arr) => {

  const arrayLength = arr.length

  for (let i = 0; i < arrayLength; i++) {
    let numberOfSwaps = 0

    for (let j = 0; j < arrayLength - 1; j++) {

      const compareElement = arr[j]
      const compareElement2Temp = arr[j + 1]

      if (compareElement > compareElement2Temp) {
        arr[j] = compareElement2Temp
        arr[j + 1] = compareElement

        numberOfSwaps++
      }

    }

    if (numberOfSwaps === 0) {
      break
    }

  }
  
  return arr
}

// console.log(
//   `Bubble sort: ${bubbleSort([4, 2, 7, 3, 7, 3, 6, 8, 5])}`
// )

// Quick sort
const quickSort = (arr = []) => {
    if (arr.length > 2) {
      const middleIndex = Math.floor(arr.length / 2)
      const middleValue = arr.splice(middleIndex, 1)
      const less = []
      const greater = []

      for (let i = 0; i < arr.length; i ++) {
        const currentElement = arr[i]

        if (currentElement < middleValue) {
          less.push(currentElement)
        } else {
          greater.push(currentElement)
        }

      }

      return [
        ...quickSort(less),
        ...middleValue,
        ...quickSort(greater)
      ]
    } else {
      return arr
    }
}

// console.log(
//   `Quick sort: ${quickSort([4, 2, 7, 3, 7, 3, 6, 8, 5])}`
// )

// Merge two sorted arrays
const mergeTwoSortedArrays = (arr1, arr2) => {
  const newArray = []
  let i = 0
  let j = 0
  
  while (i < arr1.length || j < arr2.length) {

    if ( (!arr2[j]) || arr1[i] < arr2[j]) {
      newArray.push(arr1[i])

      i++
    } else {
      newArray.push(arr2[j])

      j++
    }
  }

  return newArray
}

// console.log(
//   `Merge two sorted arrays: ${mergeTwoSortedArrays([1, 3, 4, 8], [2, 4, 5, 6, 9])}`
// )

// Merge sort
const mergeSort = (arr) => {
  const arrayLength = arr.length

  if (arrayLength > 1) {
    const middleIndex = Math.floor(arrayLength / 2)
    const firstArr = arr.slice(0, middleIndex)
    const secondArr = arr.slice(middleIndex, arrayLength)
  
    return mergeTwoSortedArrays(
      mergeSort(firstArr),
      mergeSort(secondArr),
    )
  } else {
    return arr
  }
}

// console.log(
//   `Merge sort: ${mergeSort([4, 2, 7, 3, 7, 3, 6, 8, 5])}`
// )