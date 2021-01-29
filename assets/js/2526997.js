// timestamp 시간표에 맞는 그래프의 인터벤
let nullArray_timestamp = []
for (let i in dataValue[4]) {
    nullArray_timestamp.push(null)
}

dataValue[25] = [...nullArray_timestamp]
dataValue[26] = [...nullArray_timestamp]
dataValue[27] = [...nullArray_timestamp]


//ex
dataValue[25][0] = minInterval
dataValue[26][0] = maxInterval
dataValue[27][0] = "adjust oxygenation"






// input 시간표에 맞는 그래프 인터벤션
let nullArray_inputChart = []
for (let i in dataValue[0]) {
    nullArray_inputChart.push(null)
}

dataValue[1] = [...nullArray_inputChart]
dataValue[2] = [...nullArray_inputChart]
dataValue[3] = [...nullArray_inputChart]


//ex
dataValue[1][0] = minInterval
dataValue[2][0] = maxInterval
dataValue[3][0] = "adjust oxygenation"
