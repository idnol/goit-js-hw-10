import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _.throttle((e) => {
  localStorage.setItem("videoplayer-current-time", e.seconds);
}, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {

}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      console.log(RangeError);
      break;

    default:
      console.log(error.name);
      break;
  }
});