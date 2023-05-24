/*
  Greedy algorhitms
*/

const schedule = [
  {
    name: 'Painting',
    start: 900, // 9:00
    end: 1000, // 10:00
  },
  {
    name: 'English',
    start: 930, // 9:30
    end: 1030, // 10:30
  },
  {
    name: 'Math',
    start: 1000, // 10:00
    end: 1100, // 11:00
  },
  {
    name: 'Informatics',
    start: 1030, // 10:30
    end: 1130, // 11:30
  },
  {
    name: 'Music',
    start: 1100, // 11:00
    end: 1200, // 12:00
  },
]

const findBestSchedule = (schedule) => {
  let endsEarlierThanAllItem = null

  for (let i = 0; i < schedule.length; i++) {
    const scheduleItem = schedule[i]

    if (!endsEarlierThanAllItem
       || scheduleItem.end < endsEarlierThanAllItem.end) {
        endsEarlierThanAllItem = scheduleItem
       }
  }

  let theBestSchedule = [
    endsEarlierThanAllItem,
  ]
  let newItem = null
  let isScheduleOver = false

  while (!isScheduleOver) {
    const prevItem = theBestSchedule[theBestSchedule.length - 1]
    
    for (let i = 0; i < schedule.length; i++) {
      const scheduleItem = schedule[i]

      if (
        scheduleItem.start >= prevItem.end &&
        (!newItem
          || scheduleItem.end < newItem.end)
        ) {
          newItem = scheduleItem
         }
    }

    if (newItem) {
      theBestSchedule.push(newItem)
      newItem = null
    } else {
      isScheduleOver = true
    }
  }

  return theBestSchedule
}

console.log(
  `Find the best schedule: ${findBestSchedule(schedule).map(({name}) => name)}`
)