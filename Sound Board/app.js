
const sounds = ["Bee","Dog","Birds", "Lion", "Anime", "Men"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", () => {
      StopSongs();
      document.getElementById(sound).play();
    });
    document.getElementById("buttons").appendChild(btn);
  });
  
  function StopSongs() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
  
      song.pause();
      song.currentTime = 0;
    });
  }