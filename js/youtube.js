
// YOUTUBE Player iframe

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      videoId: 'F8WZLIO5zNA',
      playerVars: {
          autoplay: true, //자동 재생 유무
          loop: true, // 반복 재생 유무
          playlist: 'F8WZLIO5zNA' //반복 재생할 유튜브 영상 ID
      }
      });
    }
  