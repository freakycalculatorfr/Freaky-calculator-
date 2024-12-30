
// script.js
let display = document.getElementById('display');

function pressKey(key) {
  display.value += key;
  checkSecretCode();
}

function clearDisplay() {
  display.value = '';
}

function checkSecretCode() {
  if (display.value === '000') {
    playVideo();
  }
}

function playVideo() {
  document.getElementById('video-popup').classList.remove('hidden');
}

function closeVideo() {
  document.getElementById('video-popup').classList.add('hidden');
  document.getElementById('secret-video').pause();
  clearDisplay();
}
