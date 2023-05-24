/**
 * Approximate alghorithms
 */

const statesNeeded = new Set([
  'mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az',
])

const stations = {}
stations.kone = new Set([
  'id', 'nv', 'ut',
])
stations.ktwo = new Set([
  'wa', 'id', 'mt',
])
stations.kthree = new Set([
  'or', 'nv', 'cv',
])
stations.kfour = new Set([
  'nv', 'ut',
])
stations.kfive = new Set([
  'ca', 'az',
])

const findMostProfitStations = (stations, statesNeeded) => {
  const result = new Set()

  while (statesNeeded.size) {
    let bestStation = null
    let bestStationName = null
    let bestStationCoveredCount = 0

    for (let stationName in stations) {
      const station = stations[stationName]
      let coveredCount = 0

      for (let state of station) {
        if (statesNeeded.has(state)) {
          coveredCount++
        }
      }

      if (coveredCount > bestStationCoveredCount) {
        bestStation = station
        bestStationName = stationName
        bestStationCoveredCount = coveredCount
      }
    }

    for (let state of bestStation) {
      statesNeeded.delete(state)
    }

    delete stations[bestStationName]
    result.add(bestStationName)
  }

  return result
}

console.log(findMostProfitStations(stations, statesNeeded))