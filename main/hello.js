export default class Calculator {
  
  calculate(sum) {
    let splitSum = sum.split(" ")
    if (splitSum.length < 2) {
      let answer = parseInt(sum)
      return [`${sum}`, answer]
    }
    // let numbersArray = splitSum.filter(item => item != "+")
    // console.log(numbersArray)
    // numbersArray = splitSum.map((item) => {
    // parseInt(item)
    // })
    // console.log(numbersArray)
    
    if (splitSum[1] === "+") {
      splitSum = splitSum.filter(item => item != "+")
      splitSum = splitSum.map((item) => {
        return parseInt(item)
      })
      let answer = splitSum.reduce((a, b) => a + b)
      return [`${sum}`, answer]
    } 
    if (splitSum[1] === "-") {
      splitSum = splitSum.filter(item => item != "-")
      splitSum = splitSum.map((item) => {
        return parseInt(item)
      })
      let answer = splitSum.reduce((a, b) => a - b)
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

  // [1, 2, 3, 4].reduce((a, b) => a + b, 0)
