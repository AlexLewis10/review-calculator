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

describe('1 and 1', () => {
  it('1 + 1 returns an array with the sum and the answer 2', () => {
    expect(calculator.calculate("1 + 1")).toEqual(["1 + 1", 2])
  })
})