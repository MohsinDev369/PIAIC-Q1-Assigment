//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ['Cris Angle', 'David Blaine', 'Apollo Robbins']

function show_magicians() {
    magicians.map(m => {console.log(m)})
}

function make_great() {
    magicians.map((val,index,arr) => { arr[index]=`Greate ${val}` }) 
}
make_great()
show_magicians()
