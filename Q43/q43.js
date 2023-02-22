var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//43.Unchanged Magicians: Start with your work from Exercise x40x 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ['Cris Angle', 'David Blaine', 'Apollo Robbins'];
function show_magicians(x) {
    x.map(function (m) { console.log(m); });
}
function make_great(greateMagicians) {
    return greateMagicians.map(function (val, index, arr) { return arr[index] = "Greate ".concat(val); });
}
var newGreateArray = make_great(__spreadArray([], magicians, true));
show_magicians(magicians);
show_magicians(newGreateArray);
