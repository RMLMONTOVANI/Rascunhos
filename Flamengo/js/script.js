 
var zoom = document.getElementById('zoom');
var caixatexto = document.getElementById('caixazoom');


zoom.onmouseover = function(){
  zoom.style.transform = 'scale(1.1)';
  zoom.style.transition = 'all 0.7s';
  caixatexto.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

zoom.onmouseout = function(){
  zoom.style.transform = 'scale(1.0)';
   zoom.style.transition = 'all 0.5s';
  caixatexto.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

caixatexto.onmouseover = function(){
  zoom.style.transform = 'scale(1.1)';
  zoom.style.transition = 'all 0.5s';
  caixatexto.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  
}

caixatexto.onmouseout = function(){
  zoom.style.transform = 'scale(1.0)';
  zoom.style.transition = 'all 0.5s';
  caixatexto.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

///////////////////////////////////////////////////////////////
var gradezoom = document.getElementById('img1');
var caixatextodois = document.getElementById('caixatexto2');

gradezoom.onmouseover = function(){
  gradezoom.style.transform = 'scale(1.1)';
  gradezoom.style.transition = 'all 0.5s';
  caixatextodois.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

gradezoom.onmouseout = function(){
  gradezoom.style.transform = 'scale(1.0)';
  gradezoom.style.transition = 'all 0.5s';
  caixatextodois.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

caixatextodois.onmouseover = function(){
   gradezoom.style.transform = 'scale(1.1)';
  gradezoom.style.transition = 'all 0.5s';
  caixatextodois.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

caixatextodois.onmouseout = function(){
   gradezoom.style.transform = 'scale(1.0)';
  gradezoom.style.transition = 'all 0.5s';
  caixatextodois.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}
/////////////////////////////////////////////////////////////////
var imgdois = document.getElementById('img2');
var caixatextotres = document.getElementById('caixatextotres');

imgdois.onmouseover = function(){
  imgdois.style.transform = 'scale(1.1)';
  imgdois.style.transition = 'all 0.5s';
  caixatextotres.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

imgdois.onmouseout = function(){
  imgdois.style.transform = 'scale(1.0)';
  imgdois.style.transition = 'all 0.5s';
  caixatextotres.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

caixatextotres.onmouseover = function(){
   imgdois.style.transform = 'scale(1.1)';
  imgdois.style.transition = 'all 0.5s';
  caixatextotres.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

caixatextotres.onmouseout = function(){
   imgdois.style.transform = 'scale(1.0)';
  imgdois.style.transition = 'all 0.5s';
  caixatextotres.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}



/////////////////////////////////////////////////////////////////
var vitorimg = document.getElementById('vitorzoom');
var caixazoom2 = document.getElementById('caixazoom2');
vitorimg.onmouseover = function(){
  vitorimg.style.transform = 'scale(1.1)';
  vitorimg.style.transition = 'all 0.5s';
  caixazoom2.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

vitorimg.onmouseout = function(){
  vitorimg.style.transform = 'scale(1.0)';
  vitorimg.style.transition = 'all 0.5s';
  caixazoom2.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

caixazoom2.onmouseover = function(){
  vitorimg.style.transform = 'scale(1.1)';
  vitorimg.style.transition = 'all 0.5s';
  caixazoom2.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

caixazoom2.onmouseout = function(){
  vitorimg.style.transform = 'scale(1.0)';
  vitorimg.style.transition = 'all 0.5s';
  caixazoom2.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

////////////////////////////////////////////////////////////////////
var imgvolei = document.getElementById('imgvolei');

imgvolei.onmouseover = function(){
  imgvolei.style.transform = 'scale(1.1)';
  imgvolei.style.transition = 'all 0.5s';
  textovolei.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  
}

imgvolei.onmouseout = function(){
  imgvolei.style.transform = 'scale(1.0)';
  imgvolei.style.transition = 'all 0.5s';
  textovolei.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  
}

textovolei.onmouseover = function(){
  imgvolei.style.transform = 'scale(1.1)';
  imgvolei.style.transition = 'all 0.5s';
  textovolei.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
}

textovolei.onmouseout = function(){
  imgvolei.style.transform = 'scale(1.0)';
  imgvolei.style.transition = 'all 0.5s';
  textovolei.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}
//////////////////////////////////////////////////////////////////////

var instimg = document.getElementById('instimg');
instimg.onmouseover = function(){
  instimg.style.transform = 'scale(1.1)';
  instimg.style.transition = 'all 0.5s';
  insttext.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  
}

instimg.onmouseout = function(){
  instimg.style.transform = 'scale(1.0)';
  instimg.style.transition = 'all 0.5s';
  insttext.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  
}

insttext.onmouseover = function(){
   instimg.style.transform = 'scale(1.1)';
  instimg.style.transition = 'all 0.5s';
  insttext.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

insttext.onmouseout = function(){
   instimg.style.transform = 'scale(1.0)';
  instimg.style.transition = 'all 0.5s';
  insttext.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}
