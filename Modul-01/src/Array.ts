const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['Hello', 'World', 'TypeScript'];
const booleanArray: boolean[] = [true, false, true];

// A tuple with exactly three boolean values
let booleanTuple: [boolean, boolean, boolean] = [true, false, true];

// A mixed-type tuple (very common in TS)
let user: [number, string, boolean] = [1, "Alice", true];