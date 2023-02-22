//43.Unchanged Magicians: Start with your work from Exercise x40x 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ['Cris Angle', 'David Blaine', 'Apollo Robbins']

function show_magicians(x: Array<String>) {
    x.map(m => { console.log(m) })
}

function make_great(greateMagicians: Array<String>) {
    return greateMagicians.map((val, index, arr) => arr[index] = `Greate ${val}`)

}

let newGreateArray = make_great([...magicians])

show_magicians(magicians)
show_magicians(newGreateArray)

