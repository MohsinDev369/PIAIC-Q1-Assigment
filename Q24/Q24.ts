//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
console.log("apple" === "apple"); // true
//This test checks if the string "apple" is equal to the string "apple", which is true. This is because the strict equality operator (===) checks both the value and the type of the operands, and in this case, both operands are the same string value of type string.


console.log("apple" !== "apple"); // false
//  !== will return true if the two strings are not equal, and false if they are equal.

//• Tests using the lower case function
const str1 = "APPLE";
const str2 = "apple";
console.log(str1.toLowerCase() === str2); // true
console.log(str1 === str2); // fal

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(2==2); //true
console.log(2 != 2); //false
console.log(2 < 2); //false
console.log(3 > 2); //true
console.log(2 >= 2); //true
console.log(2 <= 2); //true

//• Tests using "and" and "or" operators
console.log(10 <= 10 && 2 > 1); //true
console.log(10 <= 10 || 0 > 1);

// • Test whether an item is in a array
console.log(['hello', 1, '2', 'apple'].includes("2"));//true

// • Test whether an item is not in a array
console.log(['hello', 1, '2', 'apple'].includes(2)); //false