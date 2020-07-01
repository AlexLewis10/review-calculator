import Calculator from "./hello"

let calculator;

beforeEach(() => {
  calculator = new Calculator()
})

describe("1", () => {
  it ('returns an array with 1 and 1', () => {
    expect(calculator.calculate("1")).toEqual(["1", 1])
  })
})
