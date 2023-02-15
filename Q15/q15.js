//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var gustList = ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla'];
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
console.log("".concat(gustList[1], " is not comming for the dinner"));
gustList[1] = 'Super Man';
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
