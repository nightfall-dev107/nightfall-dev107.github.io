window.onload = () => {
const whisper = document.getElementById("whisper");
const scareImg = document.getElementById("scare");
const shadow = document.getElementById("shadow");
const scream = document.getElementById("scream");

// Soft creepy whisper sound starts
setTimeout(() => {
whisper.volume = 0.4;
whisper.play();
shadow.style.opacity = 0.4;
}, 3000);

// Random small glitches
setInterval(() => {
document.body.style.filter = "contrast(200%) blur(1px)";
setTimeout(() => {
document.body.style.filter = "none";
}, 120);
}, 6000);

// Build-up shadow moves closer
setInterval(() => {
let height = shadow.clientHeight;
shadow.style.height = (height + 8) + "px";
}, 5000);

// Jumpscare triggers when user clicks anywhere
document.body.addEventListener("click", () => {
whisper.pause();

scareImg.style.height = "100%";
scareImg.style.opacity = 1;

scream.volume = 1;
scream.play();

// Screen glitch effect
document.body.style.background = "white";

setTimeout(() => {
document.body.style.background = "black";
}, 80);
});
};
