
document.getElementById('diagnosis-button').addEventListener('click', function() {
  window.location.href = 'diagnosis.html';
});

  function formatTimeOfDay(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  function updateTimeOfDayDisplay() {
    const now = new Date();
      document.getElementById('time-of-day').textContent = formatTimeOfDay(now);
  }

  setInterval(updateTimeOfDayDisplay, 60000);

  updateTimeOfDayDisplay();
function updateCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
    document.getElementById('current-time').textContent = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();


  function increaseTemperature() {
    var tempSpan = document.getElementById('interior-temp');
    var currentTemp = parseInt(tempSpan.textContent, 10);
    tempSpan.textContent = `${Math.min(currentTemp + 1, 30)}°`;
  }

  function decreaseTemperature() {
    var tempSpan = document.getElementById('interior-temp');
    var currentTemp = parseInt(tempSpan.textContent, 10);
    tempSpan.textContent = `${Math.max(currentTemp - 1, 12)}°`;
  }

  document.getElementById('temp-up').addEventListener('click', increaseTemperature);
  document.getElementById('temp-down').addEventListener('click', decreaseTemperature);


  const songs = [
    'Frank Sinatra - My Way',
    'The Beatles - Yesterday',
    'Elvis Presley - Can\'t Help Falling in Love',
    'Queen - Bohemian Rhapsody',
    'Michael Jackson - Thriller'
  ];
  let currentSongIndex = 0;
  let isPlaying = false;

  function updateSongTitle() {
    document.getElementById('song-title').textContent = songs[currentSongIndex];
  }

  function togglePlayPause() {
    const playPauseBtn = document.getElementById('play-pause');
    if (isPlaying) {
      playPauseBtn.textContent = '▶';
    } else {
      playPauseBtn.textContent = '||';
    }
    isPlaying = !isPlaying;
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongTitle();
  }

  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongTitle();
  }

function playPauseMusic() {
  const playPauseBtn = document.getElementById('play-pause');
  if (isPlaying) {
    playPauseBtn.textContent = '▶';
    isPlaying = false;
  } else {
    playPauseBtn.textContent = '||';
    isPlaying = true;
  }
}

document.getElementById('play-pause').addEventListener('click', playPauseMusic);

  playPauseMusic();

  document.getElementById('play-pause').addEventListener('click', togglePlayPause);
  document.getElementById('next-song').addEventListener('click', nextSong);
  document.getElementById('prev-song').addEventListener('click', prevSong);

  updateSongTitle();

  const songDuration = 276;
  let currentTime = 0;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  function updateTimeDisplay() {
    document.getElementById('current-time').textContent = formatTime(currentTime);

    const remainingTime = songDuration - currentTime;
    document.getElementById('total-time').textContent = formatTime(remainingTime);

    const progressPercentage = (currentTime / songDuration) * 100;
    document.getElementById('progress').style.width = `${progressPercentage}%`;
    document.getElementById('progress-knob').style.left = `${progressPercentage}%`;

    currentTime++;
    if (currentTime > songDuration) {
      currentTime = 0;
    }
  }

  setInterval(updateTimeDisplay, 1000);


