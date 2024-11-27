//1. Array Type Annotation
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["apple", "banana", "cherry"];
console.log(numbers)
// 2. Generic Array Type
let Mynumbers: Array<number> = [1, 2, 3];
let Mystrings: Array<string> = ["apple", "banana", "cherry"];
// 3 Readonly array
let readonlyNumbers: ReadonlyArray<number> = [1, 2, 3];
//4 Tuple Type array 
let tuple: [number, string, boolean] = [1, "hello", true];
// 5. Union Type array
let mixed: (number | string)[] = [1, "apple", 3, "banana"];
// 6. 