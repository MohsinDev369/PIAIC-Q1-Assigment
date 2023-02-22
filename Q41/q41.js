//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ['Cris Angle', 'David Blaine', 'Apollo Robbins'];
function show_magicians(magicians) {
    magicians.map(function (m) { return console.log(m); });
}
show_magicians(magicians);
