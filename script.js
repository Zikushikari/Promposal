document.addEventListener("DOMContentLoaded", function() { const revealButton = document.getElementById("revealButton"); const message = document.getElementById("message"); const yesButton = document.getElementById("yesButton"); const noButton = document.getElementById("noButton");

// Play music
let audio = new Audio("https://www.bensound.com/bensound-music/bensound-love.mp3");

revealButton.addEventListener("click", function() {
    message.classList.remove("hidden");
    revealButton.style.display = "none";
    audio.play();
    startConfetti();
});

yesButton.addEventListener("click", function() {
    alert("For real!?? OMG I can't wait to go to the prom with you! ^^❤");
    stopConfetti();
});

noButton.addEventListener("mouseover", function() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Confetti animation
function startConfetti() {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function stopConfetti() {
    document.getElementById("confetti-canvas").remove();
}

// Add a confetti canvas
let canvas = document.createElement("canvas");
canvas.id = "confetti-canvas";
document.body.appendChild(canvas);

});

