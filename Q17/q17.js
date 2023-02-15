//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
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
//-----------------------------Q17-----------------------------
console.log('I can invite only two people for dinner');
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
var notInvited = gustList.splice(2);
notInvited.forEach(function (guest) {
    console.log("".concat(guest, ", you're not invited."));
});
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
gustList.forEach(function (guest) {
    console.log("".concat(guest, ", you're invited!"));
});
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
gustList.length = 0;
console.log(gustList);
