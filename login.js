// List of quotes for the typewriter animation
const quotes = [
    "Drapes designed to highlight your charm and complement your unique style effortlessly.",
    "Redefining sarees and lehengas to make you shine in every moment.",
    "Sarees that speak the language of sophistication.",
    "Enhancing your elegance with every drape.",
    "A touch of tradition, a hint of modernity.",
    "Heritage in every weave, elegance in every touch.",
    "Step into the world of timeless fashion."
];

// Typewriter Animation
let currentQuoteIndex = 0;
let charIndex = 0;
let isTyping = true;
const typewriterElement = document.querySelector(".typewriter");

function typeWriterEffect() {
    if (isTyping) {
        // Typing characters
        if (charIndex < quotes[currentQuoteIndex].length) {
            typewriterElement.textContent += quotes[currentQuoteIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterEffect, 40); // Typing speed
        } else {
            isTyping = false; // Typing finished
            setTimeout(typeWriterEffect, 3000); // Delay before erasing starts
        }
    } else {
        // Erasing characters
        if (charIndex > 0) {
            typewriterElement.textContent = quotes[currentQuoteIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriterEffect, 65); // Erasing speed
        } else {
            // Move to the next quote
            isTyping = true;
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Loop to next quote
            setTimeout(typeWriterEffect, 100); // Delay before typing the next quote
        }
    }
}

// Start the Typewriter Effect
typeWriterEffect();


// Ensure text wraps properly in the container
const style = document.createElement("style");
style.innerHTML = `
    .typewriter {
        word-wrap: break-word; /* Ensures text wraps to the next line */
        white-space: pre-wrap; /* Preserves spaces and breaks */
        font-size: 1.2em; /* Adjust font size for better readability */
        line-height: 1.5; /* Proper line spacing */
        display: inline-block; /* Keeps the quotes in a continuous flow */
        max-width: 100%; /* Prevents text from overflowing the container */
        word-break: break-word; /* Ensures words break if the line exceeds container width */
    }
`;
document.head.appendChild(style);

// Form Validation
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const authLeft = document.querySelector('.auth-left');
    const authRight = document.querySelector('.auth-right');

    // Adjust the right section width and positioning based on left section content
    function adjustAuthRightPosition() {
        const leftHeight = authLeft.offsetHeight;
        const rightHeight = authRight.offsetHeight;

        if (leftHeight > rightHeight) {
            authRight.style.position = 'absolute';
            authRight.style.top = '0';
            authRight.style.bottom = 'auto';
        } else {
            authRight.style.position = 'relative';
        }
    }

    // Monitor window resize
    window.addEventListener('resize', adjustAuthRightPosition);
    
    // Adjust position on page load
    adjustAuthRightPosition();
});
