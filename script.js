// Embedded YouTube Video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
  
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: { 'autoplay': 1, 'controls': 1,'autohide':1,'wmode':'opaque','loop':1,listType:'playlist',list: 'RD0xy42YjOWOk' },
        videoId: '0xy42YjOWOk',
        events: {
        'onReady': onPlayerReady}
    });
}
  
function onPlayerReady(event) {
    event.target.mute();
}

function playSound(e) {

    if(e.type == 'click'){
      var keyCode = e.target.parentElement.getAttribute('data-key')
    }
    else{
      var keyCode = e.keyCode
    }
    
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}
  
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', playSound));