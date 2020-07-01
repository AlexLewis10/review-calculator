export default class Calculator {
  
  calculate(sum) {
    let splitSum = sum.split(" ")
    if (splitSum.length < 2) {
      let answer = parseInt(sum)
      return [`${sum}`, answer]
    }
   
    
    
    if (splitSum[1] === "+") {
      let answer = parseInt(splitSum[0]) + parseInt(splitSum[2])
      return [`${sum}`, answer]
    } 
    if (splitSum[1] === "-") {
      let answer = parseInt(splitSum[0]) - parseInt(splitSum[2])
      return [`${sum}`, answer]
    }
    if (splitSum[1] === "*") {
      let answer = parseInt(splitSum[0]) * parseInt(splitSum[2])
      return [`${sum}`, answer]
    }
    if (splitSum[1] === "/") {
      let answer = parseInt(splitSum[0]) / parseInt(splitSum[2])
      return [`${sum}`, answer]
    }
  }
}