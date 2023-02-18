//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var j = '';
var x = 5;
var y = '5';
var z = 10;
console.log("Is x equal to y? I predict True.");
console.log(x == y);
// the '==' operator converts the variable into same data type if they are not then compare it, in this case x: number, y: string so x get converted into string and then compare it and x is indeed equal to y so true
console.log("Is x less than or equal to y? I predict True.");
console.log(x <= y);
// x is not smaller than y but equal to y so True
console.log("Is z greater than or equal to x? I predict True.");
console.log(z >= x);
// z is greater then x so True
console.log("Is x Strictly not equal to y? I predict True.");
console.log(x !== y);
//Strict not equal to, Data type is not same so x is not equal to y. so True
console.log("Is there value in !j? I predict True");
console.log(!j);
// There is no value in j but ! converts tge false to true
console.log("Is x strictly equal to y? I predict False.");
console.log(x === y);
//The '===' operator does not comvert the data type so x  is not equal to y.
console.log("Is x not equal to y? I predict False.");
console.log(x != y);
console.log("Is x greater than z? I predict False.");
console.log(x > z);
// Both x and z are not int and x is not bigger then z so False.
console.log("Is there value in !!j? I predict True");
console.log(!!j);
// the double !! converts the True in to false, False to True to False.
console.log("Is j bigger then y? I predict False");
console.log(j > y);
//j is empty string and y is not empty
