const chisteAPIButton = document.querySelector('.btn');
chisteAPIButton.addEventListener('click', mostrarChiste);

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
    } catch (error) {
        console.log(error);
    }
}

const addJoke = joke => {
    const placeJoke = document.querySelector('.card-text');
    placeJoke.innerHTML = joke;
}

