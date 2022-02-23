const chisteAPIButton = document.querySelector('.btn');
chisteAPIButton.addEventListener('click', mostrarChiste);
const scoreContent = document.querySelector('.joke-score');
scoreContent.addEventListener('click', createReport);
// const score1 = document.querySelector('#score1');
// const score2 = document.querySelector('#score2');
// const score3 = document.querySelector('#score3');
// score1.addEventListener('click', createReport);
// score2.addEventListener('click', createReport);
// score3.addEventListener('click', createReport);

let joke = '';

async function mostrarChiste() {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url,{ headers: {
                        'Accept': 'application/json'
                            }
                        });
        const json = await response.json();
        joke = addJoke(json.joke);
        scoreContent.style.display = 'inline';
    } catch (error) {
        console.log(error);
    }
}

const addJoke = joke => {
    const placeJoke = document.querySelector('.card-text');
    placeJoke.innerHTML = joke;
}

let reportAcudits = [];

function createReport() {
    let score = 0;
    for (var i=0; i<scoreContent.length; i++) {
        if (scoreContent[i].checked) { 
            break; 
        };
        score = scoreContent[i].value;
    };
    const d = new Date();
    let date = d.toISOString();
    let newJoke = {
        joke: joke,
        score: score,
        date: date
    }
    reportAcudits.push(newJoke);
    console.log(reportAcudits); 
}

