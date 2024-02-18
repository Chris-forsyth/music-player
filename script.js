const songs = [
    "cinimax.mp3",
    "Inspiring.mp3",
    "Minimal.mp3",
    "rock.mp3",
    "upbeat.mp3",
    "Wild.mp3"
];

const createSonglist = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
  };
  const songlist= document.getElementById("songlist");
  songlist.appendChild(createSonglist());

  songlist.onclick = function (e) {
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;
  
    document.getElementById(
      "currentsong"
    ).innerText = `Now Playing:  ${e.target.innerText}`;
  
    const player = document.getElementById("player");
    player.load();
    player.play();
    document.querySelector('#headphones').classList.remove("pulse")
  };


  function playaudio() {
    if (player.readyState) {
      player.play();
    }
  }
  
  function pauseaudio() {
    player.pause();
  }
  const slider = document.getElementById("volumeslider");
  slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
  };

  function updateprogress() {
    if (player.currentTime > 0) 
    {
        const progressbar = document.getElementById('progress')
    progressbar.value = (player.currentTime / player.duration) *100
}
    
    
  }