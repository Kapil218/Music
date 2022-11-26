let art = document.querySelector('.art');
let curr_playing = document.querySelector('.curr-playing');
let artist = document.querySelector('.artist');
let song_name = document.querySelector('.song-name');

let prev_track = document.querySelector('.prev-track');
let pp = document.querySelector('.pp');
let next_track = document.querySelector('.next-track');
let playPause_track = document.querySelector('.playPause-track');

let seek_slider = document.querySelector('.seek-slider');
let volume_slider = document.querySelector('.vol-slider');
let current_time = document.querySelector('.current-time');
let total_time = document.querySelector('.total-time');
let wave = document.getElementById('wave');
let ff = document.getElementById('fa');
// creatiing audio element
let curr_track = document.createElement('audio');


const currentTime = function (e) {
  const minutes = Math.floor(e / 60);
  const seconds = Math.floor(e - minutes * 60);
  //   console.log(seconds);

  if (seconds < 10 && minutes < 10) {
    document.getElementById('current-time').innerHTML = `0${minutes}:0${seconds}`;
  } else if (seconds > 10 || minutes < 10) {
    document.getElementById('current-time').innerHTML = `0${minutes}:${seconds}`;
  } else if (seconds < 10 && minutes > 10) {
    document.getElementById('current-time').innerHTML = `${minutes}:0${seconds}`;
  } else if (seconds > 10 && minutes > 10) {
    document.getElementById('current-time').innerHTML = `${minutes}:${seconds}`;
  }
  if (audioElement.currentTime === audioElement.duration) {
    next_track.click();
  }
};
const music_list = [
  {
    img: './png/0.png',
    name: 'SPACESHIP',
    artist: 'Ap Dhillon',
    music: './songs/kapil0.mp3',
  },
  {
    img: './png/1.png',
    name: 'Excuss',
    artist: 'Ap Delleho',
    music: './songs/kapil1.mp3',
  },
  {
    img: './png/2.png',
    name: 'Mainu Nai Pehchandi',
    artist: 'Jerry',
    music: './songs/kapil2.mp3',
  },

 
  {
    img: './png/3.png',
    name: 'KANGNA',
    artist: 'Abber ',
    music: './songs/kapil3.mp3',
  },
  {
    img: './png/4.png',
    name: 'OFFSHORE',
    artist: 'Shubh',
    music: './songs/kapil5.mp3',
  },
  {
    img: './png/5.png',
    name: 'NO LOVE',
    artist: 'Shubh',
    music: './songs/kapil5.mp3',
  },
  {
    img: './png/6.png',
    name: 'BROWN RANG',
    artist: 'by Yo Yo honey singh',
    music: './songs/kapil6.mp3',
  },
  {
    img: './png/7.png',
    name: 'BLUE EYES',
    artist: 'by Yo Yo honey singh ',
    music: './songs/kapil7.mp3',
  },
  {
    img: './png/8.png',
    name: 'OLD TOWN ROAD',
    artist: 'by Lil Nas X',
    music: './songs/kapil8.mp3',
  },
  {
    img: './png/9.png',
    name: 'ON MY WAY',
    artist: 'by Alan Walkar' ,
    music: './songs/kapil9.mp3',
  },
  {
    img: './png/10.png',
    name: 'FADDED',
    artist: 'by Alan Walkar',
    music: './songs/kapil10.mp3',
  },
];

let songIndex = 0;
let slider = document.getElementById('seek-slider');
let vol = document.getElementById('vol-slider');

let audioElement = new Audio(`./songs/kapil${songIndex}.mp3`);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setTimeout(() => {
  changeTotalTime(audioElement.duration);
  audioElement.currentTime = (slider.value / slider.max) * audioElement.duration;
}, 100);

ff.addEventListener('click', () => {
  if (audioElement.volume > 0) {
    audioElement.volume = 0;
    ff.classList.remove('fa-volume-up');
    ff.classList.remove('fa');
    ff.classList.add('fas');
    ff.classList.add('fa-volume-mute');
  } else {
    ff.classList.remove('fas');
    ff.classList.remove('fa-volume-mute');
    ff.classList.add('fa-volume-up');
    ff.classList.add('fa');
    audioElement.volume = vol.value / 100;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
vol.addEventListener('click', () => {
  audioElement.volume = vol.value / 100;
  if (audioElement.volume == 0) {
    ff.classList.remove('fa-volume-up');
    ff.classList.remove('fa');
    ff.classList.add('fas');
    ff.classList.add('fa-volume-mute');
  } else {
    ff.classList.remove('fas');
    ff.classList.remove('fa-volume-mute');
    ff.classList.add('fa-volume-up');
    ff.classList.add('fa');
    audioElement.volume = vol.value / 100;
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
slider.addEventListener('click', () => {
  audioElement.currentTime = (slider.value / slider.max) * audioElement.duration;
  currentTime(audioElement.currentTime);
});
load_details(songIndex);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
playPause_track.addEventListener('click', () => {
  load_details(songIndex);
  if (audioElement.paused || audioElement.currentTime <= 0) {
  
    audioElement.play();
    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    art.classList.add('rotate');
    wave.classList.add('loader');
    pp.classList.remove('fa-play-circle');
    pp.classList.add('fa-pause-circle');
  } else {
    
    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    art.classList.remove('rotate');
    wave.classList.remove('loader');
    audioElement.pause();

    pp.classList.remove('fa-pause-circle');
    pp.classList.add('fa-play-circle');
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
next_track.addEventListener('click', () => {
  pp.classList.remove('fa-play-circle');
    pp.classList.add('fa-pause-circle');
  if (songIndex == music_list.length - 1) {
    audioElement.pause();
    songIndex = 0;

    audioElement = new Audio(`./songs/kapil${songIndex}.mp3`);

    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    audioElement.play();
    load_details(songIndex);
    art.classList.add('rotate');
    wave.classList.add('loader');
    return;
  }
  if (songIndex < music_list.length - 1) {
    audioElement.pause();
    songIndex++;

    audioElement = new Audio(`./songs/kapil${songIndex}.mp3`);
    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    audioElement.play();
    load_details(songIndex);
    art.classList.add('rotate');
    wave.classList.add('loader');
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
prev_track.addEventListener('click', () => {
  pp.classList.remove('fa-play-circle');
    pp.classList.add('fa-pause-circle');
  if (songIndex == 0) {
    audioElement.pause();
    songIndex = music_list.length;
    audioElement = new Audio(`./songs/kapil${songIndex}.mp3`);
    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.play();
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    load_details(songIndex);
    art.classList.add('rotate');
    wave.classList.add('loader');
    return;
  }
  if (songIndex > 0) {
    audioElement.pause();
    songIndex--;
    audioElement = new Audio(`./songs/kapil${songIndex}.mp3`);
    setTimeout(() => {
      changeTotalTime(audioElement.duration);
    }, 10);
    audioElement.play();
    audioElement.ontimeupdate = function () {
      currentTime(audioElement.currentTime);

      slider.value = (audioElement.currentTime / audioElement.duration) * 100;
    };
    load_details(songIndex);
    art.classList.add('rotate');
    wave.classList.add('loader');
  }
});

function load_details(index) {
  // curr_playing.scr= music_list[index].music;

  art.style.backgroundImage = `url( " ${music_list[index].img} ")`;

  song_name.textContent = music_list[index].artist;
  artist.textContent = music_list[index].name;

  curr_playing.textContent = `Playing         ${index + 1}        of       ${music_list.length}`;
}
const changeTotalTime = function (duration) {
  const minutes = Math.floor(audioElement.duration / 60);
  const seconds = Math.floor(audioElement.duration - minutes * 60);
  //   console.log(seconds);

  if (seconds < 10 && minutes < 10) {
    document.getElementById('total-time').innerHTML = `0${minutes}:0${seconds}`;
  } else if (seconds > 10 || minutes < 10) {
    document.getElementById('total-time').innerHTML = `0${minutes}:${seconds}`;
  } else if (seconds < 10 && minutes > 10) {
    document.getElementById('total-time').innerHTML = `${minutes}:0${seconds}`;
  } else if (seconds > 10 && minutes > 10) {
    document.getElementById('total-time').innerHTML = `${minutes}:${seconds}`;
  }
};

