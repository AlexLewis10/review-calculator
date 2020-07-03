import Calculator from "./hello"

let calculator;

beforeEach(() => {
  calculator = new Calculator()
})

describe("1", () => {
  it('returns an array with 1 and 1', () => {
    expect(calculator.calculate("1")).toEqual(["1", 1])
  })
})

describe('10', () => {
  it('returns an array with 10 and 19', () => {
    expect(calculator.calculate("10")).toEqual(["10", 10])
  })
})

describe('1 and 1', () => {
  it('1 + 1 returns an array with the sum and the answer 2', () => {
    expect(calculator.calculate("1 + 1")).toEqual(["1 + 1", 2])
  })

  it('1 - 1 returns an array with the sum and the answer 0', () => {
    expect(calculator.calculate("1 - 1")).toEqual(["1 - 1", 0])
  })

  it('1 * 1 returns an array with the sum and the answer 0', () => {
    expect(calculator.calculate("1 * 1")).toEqual(["1 * 1", 1])
  })

  it('1 / 1 returns an array with the sum and the answer 1', () => {
    expect(calculator.calculate("1 / 1")).toEqual(["1 / 1", 1])
  })

  it('1 + 1 + 1 returns an array with the sum and the answer 3', () => {
    expect(calculator.calculate('1 + 1 + 1')).toEqual(['1 + 1 + 1', 3])
  })

  it('1 - 1 - 1 returns an array with the sum and the answer 3', () => {
    expect(calculator.calculate('1 - 1 - 1')).toEqual(['1 - 1 - 1', -1])
  })
})

