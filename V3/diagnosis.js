document.getElementById('home-button').addEventListener('click', function() {
  window.location.href = 'Home.html'; // Replace 'index.html' with the URL of your original page
});

 // Function to format time as h:mm AM/PM
  function formatTimeOfDay(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  // Function to update the time display
  function updateTimeOfDayDisplay() {
    const now = new Date();
      document.getElementById('time-of-day').textContent = formatTimeOfDay(now);
  }

  // Update the time display every minute
  setInterval(updateTimeOfDayDisplay, 60000);

  // Update the time display immediately when the page loads
  updateTimeOfDayDisplay();
function updateCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
    document.getElementById('current-time').textContent = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Set the time when the page loads
updateCurrentTime();

  // Function to format time in minutes and seconds
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
