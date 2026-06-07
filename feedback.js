// Feedbacks Array
const feedbacks = [
    "Murliwala Sarees made my wedding dreams come true with their stunning lehenga collection! - Piya Gupta",
    "Best shop for bridal wear. Beautiful, traditional, and elegant! - Riya Gupta",
    "I loved the unique designs and high-quality sarees. Perfect for festive shopping! - Aditi Agrawal",
    "Murliwala never disappoints. My whole family shops here for every occasion! - Sneha Tomar",
    "Highly recommended! Great collection, excellent quality, and wonderful customer service. - Siya Garg"
];

const feedbackDisplay = document.getElementById("feedback-display");
let currentIndex = 0;

function displayFeedback() {
    feedbackDisplay.style.opacity = 0;
    setTimeout(() => {
        feedbackDisplay.textContent = feedbacks[currentIndex];
        feedbackDisplay.style.opacity = 1;
        currentIndex = (currentIndex + 1) % feedbacks.length;
    }, 1000);
}
setInterval(displayFeedback, 4000);

window.onload = displayFeedback;
