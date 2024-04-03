function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Function calls 
var album1 = make_album('Ali Zafar', 'Masty');
var album2 = make_album('Atif Aslam', 'Jal Pari', 12);
var album3 = make_album('Vital Signs', 'Hum Tum', 8);
console.log(album1);
console.log(album2);
console.log(album3);
