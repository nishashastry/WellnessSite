let songs = [
  {
    song: "Blinding Lights",
    artist: "Weekend"
  },
  {
    song: "Ride It",
    artist: "Regard"
  },
  {
    song: "Rain on Me",
    artist: "Lady Gaga ft. Ariana Grande"
  },
  {
    song: "POV",
    artist: "Ariana Grande"
  },
  {
    song: "Roxanne",
    artist: "Arizona Zervas"
  },
  {
    song: "Physical",
    artist: "Dua Lipa"
  },
  {
    song: "The Box",
    artist: "Roddy Rich"
  },
  {
    song: "Savage",
    artist: "Megan Thee Stallion"
  },
  {
    song: "Mood",
    artist: "24KGoldn"
  },
  {
    song: "Adore You",
    artist: "Harry Styles"
  },
  {
    song: "Don't Start Now",
    artist: " Dua Lipa"
  },
  {

    song: "Rockstar",
    artist: "DaBaby Ft. Roddy Rich"
  },
  {
    song: "Dance Monkey",
    artist: "Tones & I"
  },


]
      var x = document.getElementById("quoteGen");
      var y = document.getElementById("songGen");
      var z = document.getElementById("activityGen");
      var a = document.getElementById("bookGen");

function songDisplay() {
      
        if (y.style.display === "none") {
          y.style.display = "flex";
        } else {
          y.style.display = "none";
        }
}
const songName = document.querySelector('.songTitle');
const art = document.querySelector('.songArtist');
const nextSong = document.querySelector('.next'); //instead of nextChoice type the id of ht ebutton of the button above

const getSong = async () => {

  const num = Math.floor(Math.random() * songs.length);

  const song = songs[num].song;
  const artist = songs[num].artist;
  songName.innerText = song;
  art.innerText = artist;
}

nextSong.addEventListener('click', getSong);

getSong();