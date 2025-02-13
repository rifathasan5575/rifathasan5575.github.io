document.addEventListener("DOMContentLoaded", function() {
    let text = "A Passionate Web Developer";
    let index = 0;
    let typingText = document.querySelector(".typing-text");

    function typeEffect() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    setTimeout(() => {
        typingText.innerHTML = "";
        typeEffect();
    }, 1000);
});
