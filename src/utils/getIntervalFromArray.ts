export const getIntervalsFromArr = (total: number, pageCount: number,intervalValue:number) => {
    const resultArr = []
    let iterationCount = 0
    pageCount = pageCount-1
    let startValue = 0
    let endValue = pageCount

    while (total >= 0) {
        if (iterationCount === 0) {
            resultArr.push([startValue, endValue])
            startValue += pageCount + 1
            endValue += pageCount + 1
            total -= pageCount
        } else {
            resultArr.push([startValue, endValue])
            startValue += pageCount
            endValue += pageCount
            total -= pageCount
        }
        if(total<=pageCount){
            resultArr.push([startValue,endValue+total])
        }

    }

    return resultArr[intervalValue-1]

}