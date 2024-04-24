// variables
let uploadedAudio = null;
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
const fileInput = document.querySelector("#fileInput");

// functions

// takes number from frequency and assigns it to a frequency variable
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});

// Function to handle file upload
document.querySelector("#fileInput").addEventListener("change", function(event) {
    const file = this.files[0]; // Get the selected file
    if (file) {
        // Create a FileReader object to read the file
        const reader = new FileReader();
        reader.onload = function(event) {
        // Save the file data in uploadedAudio variable
        uploadedAudio = event.target.result;
        };
        // Read the file as a data URL
        reader.readAsDataURL(file);
    }
});


// plays the selected audio file when button is pressed
function playOnDemand() {
    if (uploadedAudio) {
        const audio = new Audio(uploadedAudio);
        audio.play();
    }
}

// plays selected audio at random with a specific frequency
function playRandomAudio() {
    if (Math.random() < value.textContent && uploadedAudio) {
        const audio = new Audio(uploadedAudio);
        audio.play();
        console.log("playing")
    }
    console.log("running...")
}

// Main
setInterval(playRandomAudio, 1000); // call playRandomAudio function every second