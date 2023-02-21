//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ['Mohsin', 'Jones', 'Sam', 'Bob', 'Paul'];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ['Adnan', 'Jones', 'Sam', 'Albert', 'Adam'];
// • Loop through the new_users list to see if each new username has already been used.If it has, print a message that the person will need to enter a new username.If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    if (current_users_lower.includes(new_users[i].toLowerCase())) {
        console.log("".concat(new_users[i], ", Username is not available"));
    }
    else {
        console.log("".concat(new_users[i], " username is available"));
    }
}
