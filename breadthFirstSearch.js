/*
  Breadth First Search
*/
// Find the shortest way from start to finish
const exercise6_1 = [

  {
    name: 'A',
    finish: false,
    children: [
      {
        name: 'A-1',
        finish: true,
        children: [],
      },
      {
        name: 'A-2',
        finish: false,
        children: [],
      },
    ],
  },
  
  {
    name: 'B',
    finish: false,
    children: [
      {
        name: 'B-1',
        finish: false,
        children: [],
      },
      {
        name: 'B-2',
        finish: false,
        children: [
          {
            name: 'B-2-1',
            finish: false,
            children: [
              {
                name: 'B-2-1-1',
                finish: true,
                children: [],
              }
            ],
          }
        ],
      },
    ],
  },

]

const findShortestWay = (ways) => {
  let childrenQueue = []
  const waysLength = ways.length

  if (waysLength) {
    
    for (let i = 0; i < waysLength; i++) {
      const way = ways[i]
      
      if (way.finish) {
        return way.name
      }
  
      if (way.children.length) {
        childrenQueue = [
          ...childrenQueue,
          ...way.children,
        ]
      }
    }
  
    return findShortestWay(childrenQueue)
  } else {
    return null
  }
}

// console.log(
//   `Breadth First Search: ${findShortestWay(exercise6_1)}`
// )