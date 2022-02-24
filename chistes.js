const chisteAPIButton = document.querySelector('.btn');
chisteAPIButton.addEventListener('click', addJoke);
const scoreContent = document.querySelector('.joke-score');

let jokeDad = '';
let jokeChuck = '';
let jokeFinal = '';

async function fetchJoke() {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url,{ headers: {
                        'Accept': 'application/json'
                            }
                        });
        const json = await response.json();
        jokeDad = json.joke;
        // joke = addJoke(json.joke);
        // scoreContent.style.display = 'inline';
    } catch (error) {
        console.log(error);
    }
}
async function fetchChuck () {
    const url = 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(url);
        const json = await response.json();
        jokeChuck = json.value;
    } catch (error) {
        console.log(error);
    }
}

function addJoke() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;

    if ( randomNumber === 1) {
        fetchJoke();
        jokeFinal = jokeDad;
    } else {
        fetchChuck();
        jokeFinal = jokeChuck;
    }
    console.log(':)')
    scoreContent.style.display = 'inline';
    const placeJoke = document.querySelector('.card-text');
    placeJoke.innerHTML = jokeFinal;
}


let reportAcudits = [];

function createReport(jokeScore) {
    const d = new Date();
    const date = d.toISOString();
    let newJoke = {
        joke: jokeFinal,
        score: jokeScore,
        date: date
    }
    reportAcudits.push(newJoke);
    console.log(reportAcudits); 
}

