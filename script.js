  function showMessage(id) {
      var element = document.getElementById('message' + id);
      if(element.style.display === 'block') {
          element.style.display = 'none';
      } else {
          element.style.display = 'block';
      }
  }

function personalizedGreeting() {
    const today = new Date();
    const hour = today.getHours();
    let greeting;

    if(hour < 12) {
        greeting = "Good morning, beautiful!";
    } else if(hour < 18) {
        greeting = "Good afternoon, my love!";
    } else {
        greeting = "Good evening, darling!";
    }

    document.getElementById("personalGreeting").innerText = greeting;
}

document.addEventListener('DOMContentLoaded', function() {
    personalizedGreeting();
});

function toggleMusic() {
    var music = document.getElementById('bgMusic');
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function setVolume(value) {
    var music = document.getElementById('bgMusic');
    music.volume = value;
}



