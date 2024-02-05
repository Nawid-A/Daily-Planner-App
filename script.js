var icon= document.getElementById('weather-icon');  
const currentSRC= String(icon.getAttribute('src'));  
const newSRC= String(currentSRC.replace('static', 'animated'));
 
function hover(){  
    icon.setAttribute('src', newSRC); 
} 
function unhover(){ 
    icon.setAttribute('src', currentSRC);
}