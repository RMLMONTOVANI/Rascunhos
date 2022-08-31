
function modoDark(){

    let mododark = document.getElementById('mododark').checked;
    let body = document.getElementById('body');
    let header = document.querySelector('header');
    let subnav = document.getElementById('subnav');
    let menu = document.getElementById('menu');
    
    
    if(mododark == true){
	body.style.backgroundColor = '#444350';
	header.style.backgroundColor = '#444350';
	subnav.style.backgroundColor = '#444350';
	menu.style.backgroundColor = '#444350';
	
	
    } else {
	body.style.backgroundColor = 'white';
	header.style.backgroundColor = 'white';
	subnav.style.backgroundColor = 'white';
	menu.style.backgroundColor = 'white';
    }

}


