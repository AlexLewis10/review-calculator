export default class Calculator {
  
  calculate(sum) {
    if (sum.length < 2) {
      let answer = parseInt(sum)
      return [`${sum}`, answer]
    }

    let splitSum = sum.split(" ")
    let answer = parseInt(splitSum[0]) + parseInt(splitSum[2])
    return [`${sum}`, answer]
  }
}