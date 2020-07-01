var canvas_container = document.getElementById("canvas-container");
var placeholder_video_id = 'KRUbhRKiauA'; //intro to cci 2020 video
let ifr;

var vid_id = {
  alex: 'oy0rQh7b9Vk',
  bea: 'a6fU21hJac4',
  cat: 'Ib-IJW5Ixws',
  jann: 'i7_fIwN2IYw',
  dejana: 'TmcLe9PUdRg',
  ed: 'j8psAb5hNM4',
  ella: 'WMSbGW4XUI0',
  eunah: 'zP09VTeYOU0',
  jessie: 'KN7miXqLY4Q',
  kamil: 'XaXEyDBLqnc',
  khalisha: 'hnLfZx97kHE',
  kirsty: 'tQdP_KpUW0I',
  laiqa: 'p63FCE4HL2w',
  lexy: '_HSJ_FbUZL4',
  llorenc: 'JWqlZJuimBs',
  martin: 'Oj2D-Fp8P4s',
  max: 'zXdsYsua-5g',
  mia: 'dj_GAPeVcF0',
  morgan: 'SVFWmb0zgYs',
  riya: 'IhNVawrJ414',
  rukiah: 'lz0vqnNexeA',
  sandro: 'iCCKIua5nxw',
  stacy: 'zDoGn7tmX70',
  tom: '7UwoS4pcvJw',
  val: 'XIdkOIywZ8s',
  vince: 'bYDMzjFwsIM',
  zhiqin: '8vkqFX4WOow'
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
  canvas_container.addEventListener("p5loaded", () => {
    var vidWidth = LONG_TEXT_BOX_W * canvasScale;
    var vidHeight = vidWidth * 9 / 16;
    player = new YT.Player('player', {
      height: vidHeight,
      width: vidWidth,
      videoId: placeholder_video_id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  canvas_container.addEventListener("iconclicked", () => {
    console.log('Playing student video: ' + student_name);

    //if the play icon is clicked, load the video of the associated student
    student = vid_id[student_name];
    if (student != '') {
      player.loadVideoById(student);
    } else {
      player.loadVideoById(placeholder_video_id); //play placeholder if no associated video is found
      console.warn("no video found. playing placeholder video.")
    }
    video_active = true; //if video is active disable other links
    ifr = player.getIframe()
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
