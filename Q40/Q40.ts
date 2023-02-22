//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: string, title: string, noOfTracks: number=0) {
    let musicAlbum = {
        artist,
        title,
    }
    if (noOfTracks) {
        musicAlbum["noOfTracks"] = noOfTracks
    }
     return musicAlbum
}

let Sam_Album = make_album('Sam', 'Epic Song')
console.log(Sam_Album);
let Jon_Album = make_album('Jon', 'Another Epic Song')
console.log(Jon_Album);
let Jack_Album = make_album('Jack', 'Runny out of ideas',10)
console.log(Jack_Album);