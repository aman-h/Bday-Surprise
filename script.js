// Set the target time to one minute from the current time
const targetTime = new Date().getTime() + 60000; // 60,000 milliseconds = 1 minute

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current time
    const currentTime = new Date().getTime();

    // Calculate the time difference in seconds
    const timeDiff = Math.floor((targetTime - currentTime) / 1000);

    if (timeDiff < 0) {
        // Countdown is over, display a message
        countdownElement.textContent = 'Happy Birthday!';
        clearInterval(countdownInterval);
        showBalloonsAndDecorations();
        showMessage();
    } else {
        // Calculate the remaining time
        const minutes = Math.floor(timeDiff / 60);
        const seconds = Math.floor(timeDiff % 60);

        // Display the remaining time
        countdownElement.textContent = `${minutes}m ${seconds}s`;
    }
}

function showBalloonsAndDecorations() {
    const balloonsElement = document.getElementById('balloons');
    balloonsElement.classList.add('animate-balloons');

    const decorationsElement = document.getElementById('decorations');
    decorationsElement.classList.add('animate-decorations');
}

