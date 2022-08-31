function validarFormNome(){
  var nome = document.getElementById('nome').value;
  var p = document.getElementById('textnome');
  
  if(nome == "" || nome == null && email == "" || email == null) {
    
    p.innerHTML = "Campo obrigatorio"
    p.style.color = 'red';
    
  } else {
    var p = document.getElementById('textnome');
    p.innerHTML = "Sucesso";
    p.style.color = "green";
    
  }



  
}

function validarFormEmail(){
  var email = document.getElementById('email').value;
  var pdois = document.getElementById('textemail');
  
  if(email == "" || email == null) {
    
    pdois.innerHTML = "Campo obrigatorio";
    pdois.style.color = 'red';
    
  } else {
    var p = document.getElementById('textemail');
    pdois.innerHTML = "Sucesso";
    pdois.style.color = "green";
    
  }
  
}


