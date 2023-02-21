//31.No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = [];
if (usernames.length) {
    usernames.forEach(function (n) { n === 'Admin' ? console.log('Hello admin, would you like to see a status report ?') : console.log("Hello ".concat(n, ",thank you for logging in again.")); });
}
else {
    console.log('We need to find some users!');
}
