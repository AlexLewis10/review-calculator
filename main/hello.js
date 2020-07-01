export default class Calculator {
  
  calculate(sum) {
    
    if (sum.length > 1) {
      let splitSum = sum.split(" ")
      const number1 = parseInt(splitSum[0])
      const number2 = parseInt(splitSum[2])
      let answer = number1 + number2
      return [`${sum}`, answer]
    }
    let answer = parseInt(sum)
    return [`${sum}`, answer]
  }
}