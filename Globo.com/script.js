
function modoDark(){

    let mododark = document.getElementById('mododark').checked;
    let body = document.getElementById('body');
    let header = document.querySelector('header');

    
    if(mododark == true){
	body.style.backgroundColor = '#2b2a33';
	header.style.backgroundColor = '#2b2a33';
    } else {
	body.style.backgroundColor = 'white';
	header.style.backgroundColor = 'white';
    }

}


