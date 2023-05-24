/*
  Dijkstra's algorithm
*/
// Find the shortest way from start to finish
const firstExample = [
  {
    name: 'A',
    weight: 6,
    finish: false,
    children: [
      {
        name: 'Finish',
        weight: 1,
        finish: true,
        children: [],
      },
    ],
  },
  {
    name: 'B',
    weight: 2,
    finish: false,
    children: [
      {
        name: 'Finish',
        weight: 5,
        finish: true,
        children: [],
      },
      {
        name: 'A',
        weight: 3,
        finish: false,
        children: [
          {
            name: 'Finish',
            weight: 1,
            finish: true,
            children: [],
          },
        ],
      },
    ],
  },
]

const findShortestWay = (arr) => {
  const arrayLength = arr.length

  const table = {}
  let queue = []
  let currentMinValue = null

  for (let i = 0; i < arrayLength; i++) {
    const compareElement = arr[i]
    const { weight, name } = compareElement
    table[name] = {
      weight,
      parent: '',
    }

    if (!currentMinValue || currentMinValue > weight) {
      queue = [compareElement]
      currentMinValue = weight
    }
  }

  while (queue.length) {
    const { children, name: parentName } = queue.shift()

    for (let i = 0; i < children.length; i++) {
      const compareElement = children[i]
      const { weight: childWeight, name: childName, children: childChildren } = compareElement

      if (childChildren.length) {
        queue.push(compareElement)
      }

      if (
        (!table[childName])
        || table[childName].weight > table[parentName].weight + childWeight
      ) {
        table[childName] = {}
        table[childName].weight = table[parentName].weight + childWeight
        table[childName].parent = parentName
      }
    }
  }

  return table
}

console.log(
  `Dijkstra's algorithm: ${JSON.stringify(findShortestWay(firstExample))}`
)