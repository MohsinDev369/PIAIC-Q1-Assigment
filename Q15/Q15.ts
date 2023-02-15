//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let gustList = ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla']

gustList.forEach(name => { console.log(`Would you like to join me for dinner Mr.${name}`) })

// ----------------------------------------------------------------
// gustList[1] is not comming
console.log(`${gustList[1]} is not comming for the dinner`);

// gustList[1] is replaced with 'super man'
gustList[1] = 'Super Man'

// printing the new list
gustList.forEach(name => { console.log(`Would you like to join me for dinner Mr.${name}`) })