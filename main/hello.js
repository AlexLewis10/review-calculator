export default class Calculator {
  
  calculate(sum) {
    if (sum.length > 1) {
      let splitSum = sum.split(" ")
      let answer = parseInt(splitSum[0]) + parseInt(splitSum[2])
      return [`${sum}`, answer]
    }
    let answer = parseInt(sum)
    return [`${sum}`, answer]
  }
}