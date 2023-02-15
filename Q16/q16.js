//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var gustList = ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla'];
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
// gustList[1] is not comming
console.log("".concat(gustList[1], " is not comming for the dinner"));
// gustList[1] is replaced with 'super man'
gustList[1] = 'Super Man';
// printing the new list
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
// ------------------------Q16 Start here-------------------------------
console.log("Found a new big table 0u0");
// new Guest to invite "Doctor Strange"
// Adding "Doctor Strange" to the beginning of the array
gustList.unshift('Doctor Strange');
// Adding "Iron Man" in the middle of the array
gustList.splice(gustList.length / 2, 0, 'Iron Man');
//Adding "HawkEye" to the end of the array
gustList.push('HawkEye');
// sending invations for each guest 
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
