window.addEventListener('load', ()=>{
    let lon;
    let lat;
    const iconoClima = document.getElementById('clima-icono');
    const valorClima = document.getElementById('clima-valor');
    const ubicacionClima = document.getElementById('clima-ubicacion');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=32d17f6cbec5cabafd6ab5fd5f281fef`;
            async function fetchClima() {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    let valor = Math.round(json.main.temp);
                    valorClima.textContent = `${valor} ºC`;
                    ubicacionClima.textContent = json.name;
                    const iconoCode = json.weather[0].icon;
                    iconoClima.src = `http://openweathermap.org/img/wn/${iconoCode}@2x.png`;
                } catch (error) {
                    console.log(error);
                }
            }
            fetchClima();
        })
    }
    
});

const chisteAPIButton = document.querySelector('.btn');
chisteAPIButton.addEventListener('click', addJoke);
const scoreContent = document.querySelector('.joke-score');
const colorBackground = document.getElementById('joke-container');

let jokeFinal;

async function fetchJoke() {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url,{ headers: {
                        'Accept': 'application/json'
                            }
                        });
        const json = await response.json();
        jokeFinal = json.joke;
        scoreContent.style.visibility = 'visible';
        const placeJoke = document.querySelector('.card-text');
    placeJoke.innerHTML = jokeFinal;
    } catch (error) {
        console.log(error);
    }
}

async function fetchChuck () {
    const url = 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(url);
        const json = await response.json();
        jokeFinal = json.value;
        scoreContent.style.visibility = 'visible';
    const placeJoke = document.querySelector('.card-text');
    placeJoke.innerHTML = jokeFinal;
    } catch (error) {
        console.log(error);
    }
}

function addJoke() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if ( randomNumber === 1) {
        fetchJoke();
    } else {
        fetchChuck();
    }
    changeBackground();
}


let reportAcudits = [];

function createReport(jokeScore) {
    const d = new Date();
    const date = d.toISOString();
    const alreadyScored = reportAcudits.some(report => report.joke == jokeFinal)
    if (!alreadyScored){
        let newJoke = {
            joke: jokeFinal,
            score: jokeScore,
            date: date
        }
        reportAcudits.push(newJoke);
        console.log(reportAcudits); 
    }
}

function changeBackground() {
    if (colorBackground.classList.contains('container-color')) {
        colorBackground.classList.replace('container-color', 'container-color2');
    } else if (colorBackground.classList.contains('container-color2')) {
        colorBackground.classList.replace('container-color2', 'container-color3');
    } else if (colorBackground.classList.contains('container-color3')) {
        colorBackground.classList.replace('container-color3', 'container-color4');
    } else if (colorBackground.classList.contains('container-color4')) {
        colorBackground.classList.replace('container-color4', 'container-color');
    }
}
