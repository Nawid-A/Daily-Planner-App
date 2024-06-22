
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'a311661b167f931c73592c67542d4efb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;

    const currentTime= new Date();
    let gotime= this.getElementById('LE-time').textContent;
    //Add Go train time logic tomorrow

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // Check the full structure in console
        document.getElementById('temp').innerHTML = Math.round(data.main.temp);
        document.getElementById('precip').innerHTML = data.rain ? data.rain['1h']*100 : 0;
        const sunset= data.sys.sunset;
        const sunsetTime= new Date(sunset*1000);
        let iconTime="day";

        if(currentTime>sunsetTime){
            iconTime="night";
        }

        // Set weather icon
        const desc = data.weather[0].main;
        const iconUrl = `icons/weathers/static/${desc}.svg`;
        document.getElementById('dynamicImage').src = iconUrl;
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
});

function switchtoAnimated(){
    const name=document.getElementById('dynamicImage').src.split("/").pop().split(".")[0];
    document.getElementById('dynamicImage').src= "icons/weathers/animated/"+name+".svg";
}

function switchtoStatic(){
    const name=document.getElementById('dynamicImage').src.split("/").pop().split(".")[0];
    document.getElementById('dynamicImage').src= "icons/weathers/static/"+name+".svg";
}

/*let bird = document.getElementById('bird');
let flyRight = true;

function toggleFlyDirection() {
    if (flyRight) {
        bird.style.animation = 'flyRightToLeftAndFlap 5s linear forwards'; // Fly from right to left with flapping
    } else {
        bird.style.animation = 'flyLeftToRightAndFlap 5s linear forwards'; // Fly from left to right with flapping
    }
    flyRight = !flyRight; // Toggle the direction for the next interval

    // Call the function again to switch directions after the current animation ends (5000ms or 5s)
    setTimeout(toggleFlyDirection, 5000);
}

toggleFlyDirection(); // Start the animation when the page loads
*/