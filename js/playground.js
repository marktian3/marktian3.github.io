window.addEventListener('keydown', animateLogo); 

function animateLogo(e) {
  const logo = document.querySelector(".logo"); 
  if(e.code === "KeyM"){
    if(!logo.classList.contains('logoEasterEgg')){
      logo.classList.add('logoEasterEgg'); 
    } else {
      logo.classList.remove('logoEasterEgg'); 
    }
  }
}; 