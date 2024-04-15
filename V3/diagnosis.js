
document.getElementById('home-button').addEventListener('click', function() {
  window.location.href = 'Home.html';
});


function fltfault() {
  document.getElementById("fl-t").style.backgroundColor = "red";
  var text = document.getElementById("flte");
  text.style.display = "block";
}
function frtfault() {
  document.getElementById("fr-t").style.backgroundColor = "red";
  var text = document.getElementById("frte");
  text.style.display = "block";
}
function rltfault() {
  document.getElementById("rl-t").style.backgroundColor = "red";
  var text = document.getElementById("rlte");
  text.style.display = "block";
}
function rrtfault() {
  document.getElementById("rr-t").style.backgroundColor = "red";
  var text = document.getElementById("rrte");
  text.style.display = "block";
}

function lpfltfault() {
  document.getElementById("fl-t").style.backgroundColor = "orange";
  var x = document.getElementById("lpflt");
  x.innerHTML = "22psi";
  var text = document.getElementById("lpflte");
  text.style.display = "block";

}
function lpfrtfault() {
  document.getElementById("fr-t").style.backgroundColor = "orange";
  var x = document.getElementById("lpfrt");
  x.innerHTML = "22psi";
  var text = document.getElementById("lpfrte");
  text.style.display = "block";
}
function lprltfault() {
  document.getElementById("rl-t").style.backgroundColor = "orange";
  var x = document.getElementById("lprlt");
  x.innerHTML = "22psi";
  var text = document.getElementById("lprlte");
  text.style.display = "block";
}
function lprrtfault() {
  document.getElementById("rr-t").style.backgroundColor = "orange";
  var x = document.getElementById("lprrt");
  x.innerHTML = "22psi";
  var text = document.getElementById("lprrte");
  text.style.display = "block";
}

function flbfault() {
  document.getElementById("fl-b").style.backgroundColor = "red";
  var text = document.getElementById("flbe");
  text.style.display = "block";
}
function frbfault() {
  document.getElementById("fr-b").style.backgroundColor = "red";
  var text = document.getElementById("frbe");
  text.style.display = "block";
}
function rlbfault() {
  document.getElementById("rl-b").style.backgroundColor = "red";
  var text = document.getElementById("rlbe");
  text.style.display = "block";
}
function rrbfault() {
  document.getElementById("rr-b").style.backgroundColor = "red";
  var text = document.getElementById("rrbe");
  text.style.display = "block";
}
function dsfault() {
  document.getElementById("ds").style.backgroundColor = "red";
  var text = document.getElementById("dse");
  text.style.display = "block";
}
function fafault() {
  document.getElementById("fa").style.backgroundColor = "red";
  var text = document.getElementById("fae");
  text.style.display = "block";
}
function rafault() {
  document.getElementById("ra").style.backgroundColor = "red";
  var text = document.getElementById("rae");
  text.style.display = "block";
}
function bfault() {
  document.getElementById("b").style.backgroundColor = "red";
  var text = document.getElementById("be");
  text.style.display = "block";
}
function rfault() {
  document.getElementById("r").style.backgroundColor = "red";
  var text = document.getElementById("re");
  text.style.display = "block";
}
function efault() {
  document.getElementById("e").style.backgroundColor = "red";
  var text = document.getElementById("ee");
  text.style.display = "block";
}

function engineOverheatFault() {
  document.getElementById("e").style.backgroundColor = "red";
  var text = document.getElementById("engine-overheat");
  text.style.display = "block";

  var maxTemperature = document.querySelector('.temperature-gauge').offsetWidth;

  var temperatureIndicator = document.getElementById("temperature-indicator");
  temperatureIndicator.style.width = maxTemperature + 'px';
  temperatureIndicator.classList.add('overheat');
}


function updateFluidLevel(fluidType, levelPercentage) {
  const fluidLevelId = `${fluidType}-level`;
  const fluidLevelElement = document.getElementById(fluidLevelId);

  if (fluidLevelElement) {
    fluidLevelElement.style.width = `${levelPercentage}%`;

    if (levelPercentage < 25) {
      fluidLevelElement.style.background = '#f44336';
    } else if (levelPercentage < 50) {
      fluidLevelElement.style.background = '#ffeb3b';
    } else {
      fluidLevelElement.style.background = '#4caf50';
    }
  }
}

// Example usage
updateFluidLevel('engine-oil', 95);
updateFluidLevel('coolant', 45);

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

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
