var canvas_container = document.getElementById("canvas-container");
var videobutton = document.getElementById('videobutton');
var vidHeight = canvasWidth * 9 / 16;

var placeholder_video_id = 'KRUbhRKiauA'; //intro to cci 2020 video

var vid_id = {
  alex: '',
  bea: 'n1W8W9TUKfY',
  cat: '',
  jann: '',
  dejana: '',
  ed: '',
  ella: '',
  eunah: '',
  jessie: '',
  kamil: '',
  khalisha: '',
  kirsty: '',
  laiqa: '',
  lexy: '',
  llorenc: '',
  martin: '',
  max: '',
  mia: '',
  morgan: '',
  riya: '',
  rukiah: '',
  sandro: '',
  stacy: '',
  tom: '',
  val: '',
  vince: '',
  zhiqin: ''
}

var student;

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: vidHeight,
    width: canvasWidth,
    videoId: placeholder_video_id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  canvas_container.addEventListener("iconclicked", function () {
    // console.log('student video: ' + student_name);

    //if the play icon is clicked, load the video of the associated student
    student = vid_id[student_name];
    if (student != '') {
      player.loadVideoById(student);
    } else {
      player.loadVideoById(placeholder_video_id); //play placeholder if no associated video is found
      console.warn("no video found. playing placeholder video.")
    }
    video_active = true; //if video is active disable other links
    let ifr = player.getIframe()
    ifr.style.display = "block"; //display the video player

    //if canvas is clicked, stop video and stop displaying the iframe
    canvas_container.addEventListener('click', function () {
      // console.log("canvas clicked");
      ifr.style.display = "none"; //hide the video player
      player.stopVideo(); //stop the video
      video_active = false;
    }, false);
  }, false);
}

function toggleVisibility(div) {
  div.style.display === "block" ?
    div.style.display = "none" :
    div.style.display = "block";
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    let ifr = player.getIframe()
    toggleVisibility(ifr);
    video_active = false;
  }
}