function transpic(whichpic){
  var source = whichpic.getAttribute("href");
  var placepic = document.getElementById("imageplace");
  placepic.setAttribute("src",source);
}

function prepare(){
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('tope')) return false;
  var gallary = document.getElementById('tope');
  var links = gallary.getElementsByTagName('a');
  for (var i = 0; i<links.length; i++) {
    links[i].onclick = function(){
      transpic(this);
      return false;
    }
  }
}
function Ls(){
  var Lis = document.getElementsByTagName('li');
  var aa = document.getElementById('aa');
  var bb = document.getElementById('bb');
  var cc = document.getElementById('cc');
  var dd = document.getElementById('dd');
  var ee = document.getElementById('ee');
  
    Lis[0].onclick = function(){   
      aa.style.display = 'block';
      bb.style.display = 'none';
      cc.style.display = 'none';
      dd.style.display = 'none';
      ee.style.display = 'none';
    }
    Lis[1].onclick = function(){   
      bb.style.display = 'block';
      aa.style.display = 'none';
      cc.style.display = 'none';
      dd.style.display = 'none';
      ee.style.display = 'none';
    }
    Lis[2].onclick = function(){   
      cc.style.display = 'block';
      aa.style.display = 'none';
      bb.style.display = 'none';
      dd.style.display = 'none';
      ee.style.display = 'none';
    }
    Lis[3].onclick = function(){   
      dd.style.display = 'block';
      aa.style.display = 'none';
      bb.style.display = 'none';
      cc.style.display = 'none';
      ee.style.display = 'none';
    }
    Lis[4].onclick = function(){   
      ee.style.display = 'block';
      aa.style.display = 'none';
      bb.style.display = 'none';
      cc.style.display = 'none';
      dd.style.display = 'none';
    }
}


window.onload = function()
{
  prepare();
  Ls();
}