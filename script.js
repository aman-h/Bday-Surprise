// Set the target date (replace with your friend's birthday)
const targetDate = new Date().getTime() + 60000;

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference in seconds
    const timeDiff = Math.floor((targetDate - currentDate) / 1000);

    if (timeDiff < 0) {
        // Countdown is over, display a message
        countdownElement.textContent = 'Happy Birthday!';
        clearInterval(countdownInterval);
        showBalloonsAndDecorations();
        showMessage();
    } else {
        // Calculate the remaining time
        const days = Math.floor(timeDiff / (24 * 60 * 60));
        const hours = Math.floor((timeDiff % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((timeDiff % (60 * 60)) / 60);
        const seconds = Math.floor(timeDiff % 60);

        // Display the remaining time
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function showBalloonsAndDecorations() {
    const balloonsElement = document.getElementById('balloons');
    balloonsElement.classList.add('animate-balloons');

    const decorationsElement = document.getElementById('decorations');
    decorationsElement.classList.add('animate-decorations');
}

function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Wishing you a fantastic birthday!';
}
