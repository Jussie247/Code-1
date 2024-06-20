"use strict";
// Arithmetic Operators
let a = 10;
let b = 5;
console.log('Arithmetic Operators:');
console.log(`a + b = ${a + b}`); // Addition
console.log(`a - b = ${a - b}`); // Subtraction
console.log(`a * b = ${a * b}`); // Multiplication
console.log(`a / b = ${a / b}`); // Division
console.log(`a % b = ${a % b}`); // Modulus
console.log(`a ** b = ${a ** b}`); // Exponentiation
// Assignment Operators
let x = 10;
console.log('\nAssignment Operators:');
console.log(`x = ${x}`);
x += 5;
console.log(`x += 5 -> ${x}`);
x -= 5;
console.log(`x -= 5 -> ${x}`);
x *= 2;
console.log(`x *= 2 -> ${x}`);
x /= 2;
console.log(`x /= 2 -> ${x}`);
x %= 3;
console.log(`x %= 3 -> ${x}`);
x **= 2;
console.log(`x **= 2 -> ${x}`);
// Comparison Operators
console.log('\nComparison Operators:');
console.log(`a == b -> ${a == b}`); // Equal
console.log(`a != b -> ${a != b}`); // Not equal
console.log(`a === b -> ${a === b}`); // Strict equal
console.log(`a !== b -> ${a !== b}`); // Strict not equal
console.log(`a > b -> ${a > b}`); // Greater than
console.log(`a < b -> ${a < b}`); // Less than
console.log(`a >= b -> ${a >= b}`); // Greater than or equal
console.log(`a <= b -> ${a <= b}`); // Less than or equal
// Logical Operators
let c = true;
let d = false;
console.log('\nLogical Operators:');
console.log(`c && d -> ${c && d}`); // Logical AND
console.log(`c || d -> ${c || d}`); // Logical OR
console.log(`!c -> ${!c}`); // Logical NOT
// Bitwise Operators
console.log('\nBitwise Operators:');
console.log(`a & b -> ${a & b}`); // Bitwise AND
console.log(`a | b -> ${a | b}`); // Bitwise OR
console.log(`a ^ b -> ${a ^ b}`); // Bitwise XOR
console.log(`~a -> ${~a}`); // Bitwise NOT
console.log(`a << b -> ${a << b}`); // Bitwise Left Shift
console.log(`a >> b -> ${a >> b}`); // Bitwise Right Shift
console.log(`a >>> b -> ${a >>> b}`); // Bitwise Zero-fill Right Shift
// Other Operators
console.log('\nOther Operators:');
// Ternary Operator
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(`Ternary Operator: age >= 18 ? 'Yes' : 'No' -> ${canVote}`);
// Typeof Operator
console.log(`Typeof Operator: typeof a -> ${typeof a}`);
console.log(`Typeof Operator: typeof 'Hello' -> ${typeof 'Hello'}`);
console.log(`Typeof Operator: typeof true -> ${typeof true}`);
// Instanceof Operator
class Person {
}
let person = new Person();
console.log(`Instanceof Operator: person instanceof Person -> ${person instanceof Person}`);
// In Operator
let obj = { name: 'John', age: 30 };
console.log(`In Operator: 'name' in obj -> ${'name' in obj}`);
console.log(`In Operator: 'salary' in obj -> ${'salary' in obj}`);
