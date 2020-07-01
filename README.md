String calculator
"1"
"1 + 1" 
"1 + 1 + 1"

Extension
"1 + 1 - 1"


["1 + 1", 2]

Edge case "empty string" raise an error
No operator in between string > raise an error

If someone tries to divide by 0 > Maths error; illegal operation

| INPUT | OUTPUT |
|-------|--------|
| "1"   | ["1", 1] |
| "1 + 1"  | ["1 + 1", 2] |
| "1 - 1" | ["1 - 1", 0] |
| "1 * 1" | ["1 * 1", 2] |
| "1 / 1" | ["1 / 1", 1] |
| "1 + 1 + 1" | ["1 + 1 + 1", 3] |





