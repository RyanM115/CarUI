document.getElementById('diagnosis-button').addEventListener('click', function() {
  window.location.href = 'diagnosis.html';
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


  // Function to increase temperature
  function increaseTemperature() {
    var tempSpan = document.getElementById('interior-temp');
    var currentTemp = parseInt(tempSpan.textContent, 10);
    tempSpan.textContent = `${Math.min(currentTemp + 1, 30)}°`; // Limiting the maximum to 30°C for example
  }

  // Function to decrease temperature
  function decreaseTemperature() {
    var tempSpan = document.getElementById('interior-temp');
    var currentTemp = parseInt(tempSpan.textContent, 10);
    tempSpan.textContent = `${Math.max(currentTemp - 1, 12)}°`; // Limiting the minimum to 15°C for example
  }

  // Event listeners for the buttons
  document.getElementById('temp-up').addEventListener('click', increaseTemperature);
  document.getElementById('temp-down').addEventListener('click', decreaseTemperature);


  // Array of songs
  const songs = [
    'Frank Sinatra - My Way',
    'The Beatles - Yesterday',
    'Elvis Presley - Can\'t Help Falling in Love',
    'Queen - Bohemian Rhapsody',
    'Michael Jackson - Thriller'
  ];
  let currentSongIndex = 0;
  let isPlaying = false;

  // Function to update the song title
  function updateSongTitle() {
    document.getElementById('song-title').textContent = songs[currentSongIndex];
  }

  // Function to toggle play and pause
  function togglePlayPause() {
    const playPauseBtn = document.getElementById('play-pause');
    if (isPlaying) {
      playPauseBtn.textContent = '▶';
      // Pause the music
    } else {
      playPauseBtn.textContent = '||';
      // Play the music
    }
    isPlaying = !isPlaying;
  }

  // Function to play the next song
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongTitle();
    // Reset the music player to the start of the song
    // Play the music if it was playing
  }

  // Function to play the previous song
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongTitle();
    // Reset the music player to the start of the song
    // Play the music if it was playing
  }

function playPauseMusic() {
  const playPauseBtn = document.getElementById('play-pause');
  if (isPlaying) {
    playPauseBtn.textContent = '▶'; // Change to play icon
    isPlaying = false;
    // Here you would pause the actual audio playback, for example:
    // audio.pause();
  } else {
    playPauseBtn.textContent = '||'; // Change to pause icon
    isPlaying = true;
    // Here you would start the actual audio playback, for example:
    // audio.play();
  }
}

// Add event listeners to the music control buttons
document.getElementById('play-pause').addEventListener('click', playPauseMusic);

  playPauseMusic();

  // Event listeners for the music controls
  document.getElementById('play-pause').addEventListener('click', togglePlayPause);
  document.getElementById('next-song').addEventListener('click', nextSong);
  document.getElementById('prev-song').addEventListener('click', prevSong);

  // Initialize the song title
  updateSongTitle();

   // Assume song duration in seconds
  const songDuration = 276; // 4 minutes and 36 seconds
  let currentTime = 0; // Track current time in seconds

  // Function to format time in minutes and seconds
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  // Function to update the time display
  function updateTimeDisplay() {
    // Update current time
    document.getElementById('current-time').textContent = formatTime(currentTime);

    // Update remaining time
    const remainingTime = songDuration - currentTime;
    document.getElementById('total-time').textContent = formatTime(remainingTime);

    // Update the progress bar
    const progressPercentage = (currentTime / songDuration) * 100;
    document.getElementById('progress').style.width = `${progressPercentage}%`;
    document.getElementById('progress-knob').style.left = `${progressPercentage}%`;

    // Increment current time
    currentTime++;
    if (currentTime > songDuration) {
      currentTime = 0; // Optionally loop the song or move to the next track
    }
  }

  // Call updateTimeDisplay every second
  setInterval(updateTimeDisplay, 1000);

