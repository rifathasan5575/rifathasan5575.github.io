// ডার্ক মোড টগল
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "☀️";
    } else {
        darkModeToggle.innerText = "🌙";
    }
});

// টাইপিং ইফেক্ট
const typingText = document.getElementById("typing-text");
const words = ["I'm a Web Developer.", "I love creating websites!", "Welcome to my portfolio!"];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < words[wordIndex].length) {
        typingText.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
