// Functions

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");

value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

function playOnDemand() {
    var music = new Audio('audio/notscarysound.mp3');
    music.play();
}

function playRandomAudio() {
    // 1 in 10000 chance to play audio
    if (Math.random() < value.textContent) {
      const audio = new Audio('audio/notscarysound.mp3'); // replace 'audio.mp3' with your audio file path
      audio.play();
      console.log("playing")
    }
    console.log("running...")
}

// Main

setInterval(playRandomAudio, 1000); // call playRandomAudio function every second