function make_album(artist: string, title: string, tracks?: number): 
{ artist: string; title: string; tracks?: number } 
{
    const album = {
        artist,
        title,
        tracks
    };

    if (tracks !== undefined)
    {
        album.tracks = tracks;
    }

    return album;
}

// Function calls 
const album1 = make_album('Ali Zafar', 'Masty');
const album2 = make_album('Atif Aslam', 'Jal Pari', 12);
const album3 = make_album('Vital Signs', 'Hum Tum', 8);

console.log(album1);
console.log(album2);
console.log(album3);