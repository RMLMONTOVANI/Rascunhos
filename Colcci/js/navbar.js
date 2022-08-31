let navbar = document.querySelector('nav');
let logo = document.getElementById('logo');
let lupa = document.getElementById('lupa');
let usu = document.getElementById('usu');
let bolsa = document.getElementById('bolsa');




navbar.onmouseover = function(){
  navbar.style.backgroundColor = 'white';
  lupa.style.filter = 'invert(10%)';
  logo.style.filter = 'invert(1%)';
  usu.style.filter = 'invert(10%)';
  bolsa.style.filter = 'invert(10%)';
  link1.style.color = '#5b5b5b';
  link2.style.color = '#5b5b5b';
  link3.style.color = '#5b5b5b';
  link4.style.color = '#5b5b5b';
  link5.style.color = '#5b5b5b';
  link6.style.color = '#5b5b5b';
  link7.style.color = '#5b5b5b';
  link8.style.color = '#5b5b5b';
  link9.style.color = '#5b5b5b';
}

navbar.onmouseout = function(){
  navbar.style.backgroundColor = 'rgb(43,43,43,0.3)';
  lupa.style.filter = 'invert(100%)';
  logo.style.filter = 'invert(100%)';
  usu.style.filter = 'invert(100%)';
  bolsa.style.filter = 'invert(100%)';
  link1.style.color = 'white';
  link2.style.color = 'white';
  link3.style.color = 'white';
  link4.style.color = 'white';
  link5.style.color = 'white';
  link6.style.color = 'white';
  link7.style.color = 'white';
  link8.style.color = 'white';
  link9.style.color = 'white';
}


document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if (posicaoy == 0) {
     navbar.style.backgroundColor = 'rgb(43,43,43,0.3)';
  lupa.style.filter = 'invert(100%)';
  logo.style.filter = 'invert(100%)';
  usu.style.filter = 'invert(100%)';
  bolsa.style.filter = 'invert(100%)';
  link1.style.color = 'white';
  link2.style.color = 'white';
  link3.style.color = 'white';
  link4.style.color = 'white';
  link5.style.color = 'white';
  link6.style.color = 'white';
  link7.style.color = 'white';
  link8.style.color = 'white';
    link9.style.color = 'white';

  } else {
     navbar.style.backgroundColor = 'white';
  lupa.style.filter = 'invert(10%)';
  logo.style.filter = 'invert(1%)';
  usu.style.filter = 'invert(10%)';
  bolsa.style.filter = 'invert(10%)';
  link1.style.color = '#5b5b5b';
  link2.style.color = '#5b5b5b';
  link3.style.color = '#5b5b5b';
  link4.style.color = '#5b5b5b';
  link5.style.color = '#5b5b5b';
  link6.style.color = '#5b5b5b';
  link7.style.color = '#5b5b5b';
  link8.style.color = '#5b5b5b';
  link9.style.color = '#5b5b5b';
    
  }
});

var menu = document.getElementById('menu');

link1.onmouseover = function(){
  document.body.style.backgroundColor = '#dcdcdc';
  document.body.style.transition = 'all 0.5s';
}

link1.onmouseout = function(){
  document.body.style.backgroundColor = 'white';
  document.body.style.transition = 'all 0.5s';
}

link2.onmouseover = function(){
  document.body.style.backgroundColor = '#dcdcdc';
  document.body.style.transition = 'all 0.5s';
}

link2.onmouseout = function(){
  document.body.style.backgroundColor = 'white';
  document.body.style.transition = 'all 0.5s';
}

link3.onmouseover = function(){
  document.body.style.backgroundColor = '#dcdcdc';
  document.body.style.transition = 'all 0.5s';
}

link3.onmouseout = function(){
  document.body.style.backgroundColor = 'white';
  document.body.style.transition = 'all 0.5s';
}

link4.onmouseover = function(){
  document.body.style.backgroundColor = '#dcdcdc';
  document.body.style.transition = 'all 0.5s';
}

link4.onmouseout = function(){
  document.body.style.backgroundColor = 'white';
  document.body.style.transition = 'all 0.5s';
}

link8.onmouseover = function(){
  document.body.style.backgroundColor = '#dcdcdc';
  document.body.style.transition = 'all 0.5s';
}

link8.onmouseout = function(){
  document.body.style.backgroundColor = 'white';
  document.body.style.transition = 'all 0.5s';
}
