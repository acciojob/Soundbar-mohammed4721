const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsDiv.appendChild(btn);

  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0; 
  });
}
