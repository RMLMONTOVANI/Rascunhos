var zoomDiv = document.getElementById('zoomDiv');
var caixatexto2 = document.getElementById('caixazoom2');


zoomDiv.onmouseover = function(){
  zoom.style.transform = 'scale(1.1)';
  zoom.style.transition = 'all 0.5s';
  caixatexto.style.backgroundColor = 'black';
}
