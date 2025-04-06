// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log(x);
x -= 3; // x = x - 3
console.log(x);

// Comparison Operators
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to
console.log(a != b); // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

// Logical Operators
console.log(a > 5 && b < 10); // Logical AND
console.log(a > 5 || b > 10); // Logical OR
console.log(!(a > 5)); // Logical NOT

// Bitwise Operators
console.log(a & b); // AND
console.log(a | b); // OR
console.log(a ^ b); // XOR
console.log(~a); // NOT
console.log(a << 1); // Left shift
console.log(a >> 1); // Right shift

// Ternary Operator
let result = a > b ? "a is greater" : "b is greater";
console.log(result);

// Type Operators
console.log(typeof a); // Type of
console.log(a instanceof Number); // Instance of
// Comparison for non-number
let str1 = "hello";
let str2 = "world";
console.log(str1 == str2); // Equal to
console.log(str1 === str2); // Strict equal to
console.log(str1 != str2); // Not equal to
console.log(str1 !== str2); // Strict not equal to
console.log(str1 > str2); // Greater than (lexicographical comparison)
console.log(str1 < str2); // Less than (lexicographical comparison)