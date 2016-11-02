window.onload =function(){
  play();
  dragStep();
  speed();
  dragVol();
  fullscreen();
  jindu;
  timee();
}
var video = document.getElementById('video');

function play(){
  var btn1 = document.getElementById('btn1');

  var time2 = document.getElementById('time-2');
  btn1.onclick = function(){
    if (video.paused) {
       video.play();
    btn1.src = "video/img/pause.png";
    }
    else
    {
      video.pause();
      btn1.src = "video/img/start.png";
    }
  }
}



//进度条
function dragStep(){
  var step = document.getElementsByClassName('step')[0],
      tit  = document.getElementById('step-pro');

  step.onmousedown=function fnDown(){
    document.onmousemove = function(event){
      event = event || window.event;
      mo=(event.clientX-99)*100/862;
      if(mo>100) mo =100;
      tit.style.width=mo+'%';
      video.currentTime = mo/100*(video.duration);
      document.onmouseup =function(){
      document.onmousemove=null;
    }
    }
    
  }
    step.onclick = function(event){
      event = event || window.event;
      mo=(event.clientX-99)*100/862;
      if(mo>100) mo =100;
      tit.style.width=mo+'%';
      video.currentTime = mo/100*(video.duration);
    }
 }
//进度条滚动
var jindu = window.setInterval(function (){gun();},100);
function gun(){
  var tit  = document.getElementById('step-pro');
  tit.style.width=video.currentTime/video.duration*100+'%';
}

function timee(){
  time1 = document.getElementById('time-1');
  time2 = document.getElementById('time-2');
  minute = parseInt(video.duration/60);
  second = parseInt(video.duration%60);
  if(minute<10&&second<10){
  time2.innerHTML='0'+minute+':'+'0'+second;
  }
  console.log(minute);

  var curr = video.currentTime;

  window.setInterval(function (){ti();},100);
  function ti(){
    var min = parseInt(video.currentTime/60),
        sec = parseInt(video.currentTime%60);
        if (min<10) {
          min = '0'+min;
        }
        if (sec<10) {
          sec = '0'+sec;
        }
    time1.innerHTML=min + ':' +sec;
  }
}

function speed(){
  var x = document.getElementById('speed');
  x.onclick = function(){
    video.currentTime +=5;
  }
}
//音量
function dragVol(){
  var vol = document.getElementsByClassName('song')[0],
      tit  = document.getElementById('song-pro');

  vol.onmousedown=function fnDown(){
    
    document.onmousemove = function(event){
      event = event || window.event;
      mo=(event.clientX-742)*100/56;
      if(mo>100) mo =100;
      tit.style.width=mo+'%';
      video.volume= mo/100;
      document.onmouseup =function(){
      document.onmousemove=null;
      }
    }
  }
    vol.onclick = function(event){
      event = event || window.event;
      mo=(event.clientX-742)*100/56;
      if(mo>100) mo =100;
      tit.style.width=mo+'%';
      video.volume= mo/100;
    }
 }

function fullscreen(){
  var p = document.getElementById('zoom');
  p.onclick = function(){
  if(video.requestFullscreen) {
      video.requestFullscreen();
    } else if(video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if(video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if(video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }
}