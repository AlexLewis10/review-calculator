## String Calculator

A simple calculator that takes a string as an input and returns an array with the original string and the answer to the sum.

This kata was part of a formal review and is therefore not yet complete.

### Acceptance Criteria

I made the following notes whilst gathering requirements from the client.

#### Inputs
"1"
"1 + 1" 
"1 + 1 + 1"

#### Output
["1", 1]
["1 + 1", 2]
["1 + 1 + 1"]

#### Edge Cases
Edge case "empty string" raise an error
No operator in between string > raise an error

If someone tries to divide by 0 > Maths error; illegal operation

#### Extension
"1 + 1 - 1"
["1 + 1 - 1", 0]

#### Test progression

I made this input output table to guide me through my tests.

| INPUT | OUTPUT |
|-------|--------|
| "1"   | ["1", 1] |
| "1 + 1"  | ["1 + 1", 2] |
| "1 - 1" | ["1 - 1", 0] |
| "1 * 1" | ["1 * 1", 2] |
| "1 / 1" | ["1 / 1", 1] |
| "10"    | ["10", 10]   |
| "1 + 1 + 1" | ["1 + 1 + 1", 3] |
| "1 - 1 - 1" | ["1 - 1 - 1", -1] |
| "2 * 2 * 2" | ["2 * 2 * 2", 6] |
| 1 / 0 | Maths error; illegal operation |
| "" | Raises error |
| No operator in string | Raises error |







